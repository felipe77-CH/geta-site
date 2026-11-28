# Formulário de contato – serviço `geta-contato`

Cloudflare Worker que recebe o formulário do site, **guarda cada contato no banco D1**
`geta-contatos`, **envia um aviso por e-mail** à equipe e **manda à pessoa uma confirmação de recebimento**
no idioma em que ela escreveu (PT, EN ou ES). Os comandos abaixo rodam dentro desta pasta.

## Como funciona
1. O formulário (`index.html`, `#contactForm`) envia para o endereço em `data-endpoint`.
2. O Worker confere a origem (`ALLOWED_ORIGINS`), o anti-spam e os campos.
3. Grava na tabela `contatos` (ver `schema.sql`). O IP não é guardado.
4. Se o envio de e-mail estiver ativo, manda o aviso para `CONTACT_TO`. Se o e-mail falhar,
   o contato continua guardado (coluna `email_enviado = 0`).
5. Se o Resend estiver configurado, manda a confirmação à pessoa (coluna `confirmacao_enviada`).
   Contra abuso: no máximo uma confirmação por endereço a cada 24 h, e o texto não repete a mensagem
   recebida. O "Responder" da confirmação vai para `CONTACT_TO`.

## Segurança e LGPD
- **Aceite obrigatório**: o formulário tem a caixa "Li e aceito a Política de privacidade e os Termos de uso".
  O serviço recusa envios sem ela e grava `aceite_em` (data e hora UTC), `aceite_versao`
  (constante `VERSAO_DOCUMENTOS` em `src/index.js`) e `aceite_meio` (caixa, idioma e página).
  Ao mudar a política ou os termos, atualize a data nas páginas **e** em `VERSAO_DOCUMENTOS`.
- **Limites de envio**: 5 por minuto por IP (binding `LIMITE`; o IP não é guardado), 3 por e-mail
  em 24 h e 200 no site inteiro em 24 h. Acima disso a resposta é `429`.
- **Validação**: só os campos conhecidos são lidos (outros, como `status` ou `id`, são ignorados),
  com tamanho máximo, sem caracteres de controle; telefone, idioma, área e página são conferidos.
  Envio máximo de 20 KB. Todas as consultas SQL são parametrizadas.
- **Respostas mínimas**: só `{ ok }` e um código de erro, com cabeçalhos de segurança.
- **Retenção**: uma tarefa diária (`[triggers]` em `wrangler.toml`) apaga contatos com mais de 2 anos.
- **Segredos**: chaves ficam só em `wrangler secret` (nunca no repositório). O D1 já guarda os dados
  criptografados em repouso. Proteja a conta Cloudflare com autenticação em dois fatores.

## Atualizar um banco já existente
```
npx wrangler d1 execute geta-contatos --remote --file=migracao-002-confirmacao.sql
npx wrangler d1 execute geta-contatos --remote --file=migracao-003-aceite.sql
```
Ordem de publicação: **primeiro o site** (que já envia o campo `aceite`), **depois** o serviço
(`npx wrangler deploy`). Ao contrário, o formulário antigo seria recusado por falta do aceite.

## Primeira instalação
```
npx wrangler login
npx wrangler d1 create geta-contatos          # copie o database_id para wrangler.toml
npx wrangler d1 execute geta-contatos --remote --file=schema.sql
npx wrangler deploy
```

## Ativar o aviso por e-mail (depois que getaengenharia.com.br estiver ativo no Cloudflare)
1. Cloudflare → getaengenharia.com.br → **Email → Email Routing**: ativar.
2. **Destination addresses**: adicionar o e-mail que vai receber e confirmar pelo link enviado.
3. Descomentar o bloco `[[send_email]]` em `wrangler.toml`.
4. `npx wrangler secret put CONTACT_TO` (digite o e-mail de destino) e `npx wrangler deploy`.

## Ativar a confirmação à pessoa (Resend)
O Email Routing do Cloudflare só envia a endereços verificados, por isso a confirmação usa o Resend.
1. Crie a conta em resend.com → **Domains → Add domain** → `getaengenharia.com.br`.
2. Adicione no DNS os registros que o Resend mostrar (SPF/MX em `send.` e DKIM em `resend._domainkey`)
   e espere o domínio ficar **Verified**. Recomendado: um registro DMARC
   (`_dmarc` TXT `v=DMARC1; p=none; rua=mailto:<seu e-mail>`).
3. **API Keys → Create API key** com permissão *Sending access*.
4. Nesta pasta:
   ```
   npx wrangler d1 execute geta-contatos --remote --file=migracao-002-confirmacao.sql   # só bancos antigos
   npx wrangler secret put RESEND_API_KEY
   npx wrangler secret put CONTACT_TO        # se ainda não existir: e-mail da equipe
   npx wrangler deploy
   ```
### Confirmação saindo de um e-mail institucional
Para a pessoa ver a confirmação como enviada por um e-mail da equipe (e as respostas dela chegarem
direto nessa caixa), verifique **também o domínio desse e-mail** no Resend (ex.: `geta.eng.br`, com os
registros DNS que o Resend mostrar) e defina o remetente como segredo (não fica no repositório público):
```
npx wrangler secret put CONFIRM_FROM      # ex.: Nome Sobrenome – GETA Engenharia <nome@geta.eng.br>
npx wrangler deploy
```
Sem `CONFIRM_FROM`, a confirmação sai de `CONTACT_FROM` e as respostas vão para `CONTACT_TO`.

Sem o binding `EMAIL`, o aviso à equipe também sai pelo Resend. Textos da confirmação:
objeto `CONFIRMACAO` em `src/index.js`. Ver erros: `npx wrangler tail`.

## Consultar os contatos
```
npx wrangler d1 execute geta-contatos --remote --command "SELECT id, criado_em, nome, empresa, email, area, status, email_enviado, confirmacao_enviada, aceite_em, aceite_versao FROM contatos ORDER BY id DESC LIMIT 50"
```
Ou no painel: Cloudflare → Storage & databases → D1 → geta-contatos → Console.
Exportar tudo: `npx wrangler d1 export geta-contatos --remote --output=contatos.sql`.

## Anti-spam Turnstile (opcional)
Crie um widget em Cloudflare → Turnstile, coloque a *site key* no formulário e
`npx wrangler secret put TURNSTILE_SECRET` com a *secret key*.
