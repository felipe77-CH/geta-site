-- Migração para bancos criados antes da confirmação por e-mail (rodar uma vez só):
--   npx wrangler d1 execute geta-contatos --remote --file=migracao-002-confirmacao.sql
ALTER TABLE contatos ADD COLUMN confirmacao_enviada INTEGER NOT NULL DEFAULT 0;
CREATE INDEX IF NOT EXISTS idx_contatos_email ON contatos (email);
