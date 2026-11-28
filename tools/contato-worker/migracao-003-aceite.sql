-- Migração: registro do aceite da Política de privacidade e dos Termos de uso (rodar uma vez só):
--   npx wrangler d1 execute geta-contatos --remote --file=migracao-003-aceite.sql
ALTER TABLE contatos ADD COLUMN aceite_em TEXT;
ALTER TABLE contatos ADD COLUMN aceite_versao TEXT;
ALTER TABLE contatos ADD COLUMN aceite_meio TEXT;
