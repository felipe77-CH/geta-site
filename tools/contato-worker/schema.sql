-- Banco D1 "geta-contatos": contatos recebidos pelo formulário do site.
-- Não guardamos o IP de quem escreve (minimização de dados, LGPD).
CREATE TABLE IF NOT EXISTS contatos (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  criado_em     TEXT    NOT NULL DEFAULT (datetime('now')),  -- UTC
  nome          TEXT    NOT NULL,
  empresa       TEXT,
  email         TEXT    NOT NULL,
  telefone      TEXT,
  area          TEXT,
  mensagem      TEXT    NOT NULL,
  idioma        TEXT,
  pagina        TEXT,
  pais          TEXT,
  email_enviado INTEGER NOT NULL DEFAULT 0,                    -- aviso à equipe enviado
  confirmacao_enviada INTEGER NOT NULL DEFAULT 0,              -- confirmação à pessoa enviada
  status        TEXT    NOT NULL DEFAULT 'novo',               -- novo / respondido / arquivado
  -- Registro do aceite da Política de privacidade e dos Termos de uso (LGPD, art. 8º, § 2º)
  aceite_em     TEXT,                                          -- data e hora do aceite (UTC)
  aceite_versao TEXT,                                          -- versão dos documentos aceitos
  aceite_meio   TEXT                                           -- como aceitou (caixa do formulário, idioma, página)
);
CREATE INDEX IF NOT EXISTS idx_contatos_criado ON contatos (criado_em);
CREATE INDEX IF NOT EXISTS idx_contatos_email ON contatos (email);
