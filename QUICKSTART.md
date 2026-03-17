# 🚀 Quick Start - Calendário Cultural POA

Guia rápido para ter o projeto rodando em 5 minutos!

## Opção 1: Demo Rápida (Sem Configuração)

O projeto tem dados mock para demonstração. Perfeito para testar a interface!

\`\`\`bash
# Clone o repositório
git clone https://github.com/seu-usuario/calendario-cultural.git
cd calendario-cultural

# Instale dependências
npm install

# Execute em modo de desenvolvimento
npm run dev
\`\`\`

Abra [http://localhost:3000](http://localhost:3000) e veja 3 eventos mock! 🎉

## Opção 2: Com Dados Reais do Google Sheets

### 1. Configure Google Sheets (10 min)

Siga o guia completo: [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md)

**Resumo rápido:**
1. Crie Service Account no Google Cloud Console
2. Baixe o JSON com credenciais
3. Crie planilha com os cabeçalhos corretos
4. Compartilhe planilha com o email da service account

### 2. Configure Variáveis de Ambiente

\`\`\`bash
# Copie o exemplo
cp .env.local.example .env.local

# Edite com suas credenciais
nano .env.local
\`\`\`

Adicione:
\`\`\`env
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\\n...\\n-----END PRIVATE KEY-----\\n"
GOOGLE_SHEETS_CLIENT_EMAIL="seu-email@projeto.iam.gserviceaccount.com"
GOOGLE_SHEETS_SPREADSHEET_ID="seu-id-da-planilha"
\`\`\`

### 3. Execute o Projeto

\`\`\`bash
npm run dev
\`\`\`

Abra [http://localhost:3000](http://localhost:3000) e veja seus eventos! 🎨

## Opção 3: Deploy na Vercel (Produção)

### Via Dashboard

1. Acesse [vercel.com/new](https://vercel.com/new)
2. Importe seu repositório GitHub
3. Configure as variáveis de ambiente
4. Clique em Deploy

Guia completo: [DEPLOY.md](./DEPLOY.md)

### Via CLI

\`\`\`bash
# Instale a CLI da Vercel
npm install -g vercel

# Faça login
vercel login

# Deploy
vercel
\`\`\`

## Comandos Úteis

\`\`\`bash
# Desenvolvimento
npm run dev              # Inicia servidor em localhost:3000

# Build
npm run build            # Gera build de produção
npm start               # Executa build de produção

# Verificação
npm run lint            # Verifica código com ESLint
\`\`\`

## Estrutura da Planilha Google Sheets

| titulo | data | horaInicio | local | endereco | descricao | linkEvento | artista |
|--------|------|------------|-------|----------|-----------|------------|---------|
| Exposição ABC | 2026-03-25 | 19:00 | Galeria XYZ | Rua... | Texto... | https://... | Nome |

- **data**: Formato YYYY-MM-DD
- **horaInicio**: Formato HH:MM
- Campos opcionais: endereco, linkEvento, artista

## Solução de Problemas

### "Google Sheets credentials not configured"

**Causa**: Variáveis de ambiente não configuradas

**Solução**: 
- Verifique se `.env.local` existe
- Confirme os nomes das variáveis
- Reinicie o servidor (`npm run dev`)

### Build falha

**Solução**:
\`\`\`bash
# Limpe e reinstale
rm -rf node_modules .next
npm install
npm run build
\`\`\`

### Dados não aparecem

**Solução**:
- Verifique se a planilha tem eventos futuros
- Confirme que service account tem acesso
- Veja logs no console do navegador (F12)

## Próximos Passos

1. ✅ Projeto rodando localmente
2. 📊 Adicione eventos reais na planilha
3. 🎨 Customize cores no `app/globals.css`
4. 🚀 Faça deploy na Vercel
5. 📱 Teste no celular
6. 🌟 Compartilhe com a comunidade!

## Documentação Completa

- 📖 [README.md](./README.md) - Documentação principal
- 🔧 [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md) - Setup Google Sheets
- 🚀 [DEPLOY.md](./DEPLOY.md) - Deploy na Vercel
- 🤝 [CONTRIBUTING.md](./CONTRIBUTING.md) - Como contribuir
- 📊 [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) - Resumo do projeto

## Precisa de Ajuda?

- 🐛 Issues: [GitHub Issues](https://github.com/seu-usuario/calendario-cultural/issues)
- 📖 Docs: Veja os arquivos `.md` no repositório
- 💬 Dúvidas: Abra uma issue com tag "question"

---

**Pronto para começar!** 🎉

Execute \`npm run dev\` e abra [http://localhost:3000](http://localhost:3000)
