# Formulário de contato – serviço `geta-contato`

Cloudflare Worker que recebe o formulário do site, **guarda cada contato no banco D1**
`geta-contatos` e **envia um aviso por e-mail**. Os comandos abaixo rodam dentro desta pasta.

## Como funciona
1. O formulário (`index.html`, `#contactForm`) envia para o endereço em `data-endpoint`.
2. O Worker confere a origem (`ALLOWED_ORIGINS`), o anti-spam e os campos.
3. Grava na tabela `contatos` (ver `schema.sql`). O IP não é guardado.
4. Se o envio de e-mail estiver ativo, manda o aviso para `CONTACT_TO`. Se o e-mail falhar,
   o contato continua guardado (coluna `email_enviado = 0`).

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

## Consultar os contatos
```
npx wrangler d1 execute geta-contatos --remote --command "SELECT id, criado_em, nome, empresa, email, area, status FROM contatos ORDER BY id DESC LIMIT 50"
```
Ou no painel: Cloudflare → Storage & databases → D1 → geta-contatos → Console.
Exportar tudo: `npx wrangler d1 export geta-contatos --remote --output=contatos.sql`.

## Anti-spam Turnstile (opcional)
Crie um widget em Cloudflare → Turnstile, coloque a *site key* no formulário e
`npx wrangler secret put TURNSTILE_SECRET` com a *secret key*.
