# Guia de Deploy na Vercel

Este guia detalha o processo de deploy do Calendário Cultural POA na Vercel.

## Pré-requisitos

- Conta na [Vercel](https://vercel.com)
- Repositório no GitHub/GitLab/Bitbucket
- Credenciais do Google Sheets configuradas

## Passo 1: Prepare o Repositório

Certifique-se de que o código está commitado:

\`\`\`bash
git add .
git commit -m "feat: MVP landing page completo"
git push origin main
\`\`\`

## Passo 2: Importe o Projeto na Vercel

### Via Dashboard (Recomendado)

1. Acesse [vercel.com/new](https://vercel.com/new)
2. Selecione seu provedor Git (GitHub, GitLab ou Bitbucket)
3. Importe o repositório \`calendario-cultural\`
4. Configure o projeto:
   - **Framework Preset**: Next.js (detectado automaticamente)
   - **Root Directory**: ./
   - **Build Command**: \`npm run build\` (padrão)
   - **Output Directory**: .next (padrão)

## Passo 3: Configure as Variáveis de Ambiente

Na seção **Environment Variables**, adicione:

### Produção (Production)

\`\`\`
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nSUA_CHAVE_PRIVADA_AQUI\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_CLIENT_EMAIL="seu-service-account@seu-projeto.iam.gserviceaccount.com"
GOOGLE_SHEETS_SPREADSHEET_ID="ID_DA_SUA_PLANILHA"
NEXT_PUBLIC_SITE_URL="https://seu-dominio.vercel.app"
\`\`\`

### Preview (Opcional)

Marque também para ambientes de Preview se quiser testar PRs com dados reais.

### Dicas Importantes

- **Private Key**: Copie exatamente como está no JSON do Google, mantendo os \`\\n\`
- **Client Email**: O email termina com \`.iam.gserviceaccount.com\`
- **Spreadsheet ID**: Extraia da URL da planilha
- **Site URL**: Após o primeiro deploy, atualize com a URL real

## Passo 4: Deploy

1. Clique em **Deploy**
2. Aguarde o build (leva cerca de 1-2 minutos)
3. Após concluído, sua aplicação estará no ar! 🎉

## Passo 5: Configurações Pós-Deploy

### Domínio Customizado (Opcional)

1. Vá em **Settings** → **Domains**
2. Adicione seu domínio customizado
3. Configure o DNS conforme instruções
4. Atualize a variável \`NEXT_PUBLIC_SITE_URL\`

### Analytics

1. Vá em **Analytics** (aba no projeto)
2. Ative o Vercel Analytics gratuitamente
3. Monitore pageviews, Web Vitals e performance

### Speed Insights

1. Vá em **Speed Insights**
2. Ative para monitorar Core Web Vitals
3. Receba sugestões de otimização

## Passo 6: Verificação

Acesse sua aplicação e verifique:

- [ ] Landing page carrega corretamente
- [ ] Eventos são exibidos (ou mock data se sem credenciais)
- [ ] Botões de calendário funcionam
- [ ] Design responsivo em mobile
- [ ] Meta tags e Open Graph corretos
- [ ] PWA manifest acessível em \`/manifest.json\`

## Deploy Contínuo

Após a configuração inicial, a Vercel fará deploy automático:

- **Push para main**: Deploy em produção
- **Pull Request**: Deploy de preview com URL única
- **Branches**: Preview deployments

## Comandos CLI (Alternativa)

Se preferir usar a CLI:

\`\`\`bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy em produção
vercel --prod
\`\`\`

## Revalidação ISR

O site usa ISR (Incremental Static Regeneration) com revalidação de 1 hora:

- Primeira requisição: retorna página estática
- Após 1h: próxima requisição dispara rebuild
- Dados do Google Sheets são atualizados automaticamente

Para forçar rebuild manual:
1. Vá em **Deployments**
2. Clique em **Redeploy**

## Troubleshooting

### Erro: "Google Sheets credentials not configured"

- Verifique se as variáveis estão corretas
- Confirme que a Private Key tem \`\\n\` preservados
- Redeploy após adicionar variáveis

### Erro: "Failed to fetch events"

- Confirme que a planilha existe
- Verifique se o Service Account tem acesso
- Teste o Spreadsheet ID

### Build falhou

- Verifique logs no dashboard da Vercel
- Teste build local: \`npm run build\`
- Confirme que todas dependências estão no package.json

### Fontes não carregam

- Verifique se \`@import\` das fontes está no globals.css
- Confirme preconnect no layout.tsx
- Cache pode demorar alguns minutos

## Monitoramento

### Logs

Acesse logs em tempo real:
\`\`\`bash
vercel logs seu-projeto.vercel.app
\`\`\`

### Métricas

Dashboard da Vercel mostra:
- Request count
- Bandwidth usado
- Edge Network latency
- 99th percentile response time

## Limites do Plano Free

- 100 GB bandwidth/mês
- Serverless Function: 100 GB-Hrs
- 6000 minutos de build/mês
- Mais que suficiente para este MVP

## Próximos Passos

Após deploy bem-sucedido:

1. Compartilhe a URL com amigos e galerias
2. Adicione eventos reais na planilha
3. Monitore Analytics
4. Colete feedback
5. Itere e melhore! 🚀

---

**Dúvidas?** Consulte a [Documentação da Vercel](https://vercel.com/docs)
