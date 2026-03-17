# Configuração do Google Sheets

Guia completo para configurar a integração com Google Sheets API.

## Parte 1: Criar Service Account no Google Cloud

### 1.1 Acesse o Google Cloud Console

Acesse: [https://console.cloud.google.com/](https://console.cloud.google.com/)

### 1.2 Crie ou Selecione um Projeto

1. No topo da página, clique no seletor de projetos
2. Clique em **Novo Projeto**
3. Nome: \`calendario-cultural-poa\` (ou o nome que preferir)
4. Clique em **Criar**
5. Aguarde alguns segundos e selecione o projeto criado

### 1.3 Habilite a Google Sheets API

1. No menu lateral, vá em **APIs e Serviços** → **Biblioteca**
2. Busque por "Google Sheets API"
3. Clique no resultado
4. Clique em **Ativar**
5. Aguarde a ativação (alguns segundos)

### 1.4 Crie a Service Account

1. No menu lateral, vá em **APIs e Serviços** → **Credenciais**
2. Clique em **Criar Credenciais** → **Conta de Serviço**
3. Preencha:
   - **Nome**: \`calendario-sheets-reader\`
   - **ID**: (gerado automaticamente)
   - **Descrição**: \`Service Account para ler eventos do Sheets\`
4. Clique em **Criar e Continuar**
5. **Função**: Pule (não é necessário)
6. Clique em **Continuar**
7. Clique em **Concluir**

### 1.5 Gere a Chave JSON

1. Na lista de contas de serviço, clique na que você acabou de criar
2. Vá na aba **Chaves**
3. Clique em **Adicionar Chave** → **Criar Nova Chave**
4. Selecione **JSON**
5. Clique em **Criar**
6. Um arquivo JSON será baixado automaticamente

**⚠️ IMPORTANTE**: Guarde este arquivo com segurança! Não compartilhe ou commite no Git.

### 1.6 Extraia as Credenciais

Abra o arquivo JSON baixado. Você verá algo assim:

\`\`\`json
{
  "type": "service_account",
  "project_id": "seu-projeto-123456",
  "private_key_id": "abc123...",
  "private_key": "-----BEGIN PRIVATE KEY-----\\nMIIEvQ...\\n-----END PRIVATE KEY-----\\n",
  "client_email": "calendario-sheets-reader@seu-projeto.iam.gserviceaccount.com",
  ...
}
\`\`\`

Você precisará de:
- **private_key**: A chave completa (mantendo os \`\\n\`)
- **client_email**: O email da service account

## Parte 2: Criar e Configurar a Planilha

### 2.1 Crie uma Nova Planilha

1. Acesse [Google Sheets](https://sheets.google.com/)
2. Clique em **Em branco** para criar nova planilha
3. Nomeie: \`Vernissages POA\` (ou nome de sua preferência)

### 2.2 Configure os Cabeçalhos (Linha 1)

Na primeira linha, adicione exatamente estes cabeçalhos:

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| titulo | data | horaInicio | local | endereco | descricao | linkEvento | artista |

**⚠️ IMPORTANTE**: 
- Use exatamente esses nomes (com acentos)
- Primeira letra minúscula
- Sem espaços

### 2.3 Adicione Eventos de Exemplo

A partir da linha 2, adicione eventos:

#### Exemplo de Evento 1:

- **A2** (titulo): \`Cores do Sul\`
- **B2** (data): \`2026-03-25\`
- **C2** (horaInicio): \`19:00\`
- **D2** (local): \`Galeria Mamute\`
- **E2** (endereco): \`Rua da República, 500 - Cidade Baixa\`
- **F2** (descricao): \`Uma celebração vibrante das cores e formas que definem a arte contemporânea gaúcha.\`
- **G2** (linkEvento): \`https://galeriamamute.com.br\` (opcional)
- **H2** (artista): \`Coletivo Artístico POA\` (opcional)

#### Exemplo de Evento 2:

- **A3** (titulo): \`Traços Urbanos\`
- **B3** (data): \`2026-04-01\`
- **C3** (horaInicio): \`18:30\`
- **D3** (local): \`Espaço Cultural CEEE\`
- **E3** (endereco): \`Rua dos Andradas, 1223 - Centro\`
- **F3** (descricao): \`Fotografias que capturam a essência das ruas de Porto Alegre.\`
- **G3** (linkEvento): (deixe vazio se não tiver)
- **H3** (artista): \`Marina Silva\`

### 2.4 Formatos Importantes

#### Data (coluna B)
- Formato: \`YYYY-MM-DD\`
- Exemplos: \`2026-03-25\`, \`2026-12-31\`
- ❌ Não use: \`25/03/2026\`, \`03-25-2026\`

#### Hora (coluna C)
- Formato: \`HH:MM\`
- Exemplos: \`19:00\`, \`18:30\`, \`20:15\`
- ❌ Não use: \`7pm\`, \`19h\`, \`19:00:00\`

### 2.5 Compartilhe com a Service Account

1. Clique em **Compartilhar** (canto superior direito)
2. Cole o **client_email** da service account (ex: \`calendario-sheets-reader@seu-projeto.iam.gserviceaccount.com\`)
3. Selecione permissão: **Leitor**
4. **DESMARQUE** "Notificar pessoas"
5. Clique em **Compartilhar**

### 2.6 Copie o ID da Planilha

Na URL da planilha, copie o ID:

\`\`\`
https://docs.google.com/spreadsheets/d/1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7/edit
                                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                                        Este é o SPREADSHEET_ID
\`\`\`

## Parte 3: Configure as Variáveis de Ambiente

### 3.1 Crie o arquivo .env.local

No diretório raiz do projeto:

\`\`\`bash
cp .env.local.example .env.local
\`\`\`

### 3.2 Edite o .env.local

\`\`\`env
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\\nSUA_CHAVE_AQUI\\n-----END PRIVATE KEY-----\\n"
GOOGLE_SHEETS_CLIENT_EMAIL="calendario-sheets-reader@seu-projeto.iam.gserviceaccount.com"
GOOGLE_SHEETS_SPREADSHEET_ID="1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7"
\`\`\`

**⚠️ ATENÇÃO na Private Key**:
- Copie exatamente como está no JSON
- Mantenha os \`\\n\` (quebras de linha)
- Use aspas duplas
- Inclua todo o conteúdo entre BEGIN e END

### 3.3 Verifique

Execute o projeto:

\`\`\`bash
npm run dev
\`\`\`

Acesse [http://localhost:3000](http://localhost:3000)

Se configurado corretamente, você verá os eventos da planilha!

## Dicas e Troubleshooting

### ✅ Checklist de Configuração

- [ ] Google Sheets API ativada no projeto
- [ ] Service Account criada
- [ ] Arquivo JSON baixado e guardado com segurança
- [ ] Planilha criada com cabeçalhos corretos
- [ ] Service Account tem acesso de leitura à planilha
- [ ] Variáveis de ambiente configuradas no .env.local
- [ ] Private key com \`\\n\` preservados
- [ ] Spreadsheet ID copiado corretamente

### ❌ Problemas Comuns

#### "Google Sheets credentials not configured"

**Causa**: Variáveis de ambiente não encontradas

**Solução**:
- Verifique se o arquivo \`.env.local\` existe
- Confirme os nomes das variáveis (copie exatamente)
- Reinicie o servidor de desenvolvimento

#### "Error: invalid_grant"

**Causa**: Private key inválida ou mal formatada

**Solução**:
- Recrie a chave no Google Cloud Console
- Copie a chave exatamente como está no JSON
- Mantenha os \`\\n\` (não substitua por quebras de linha reais)
- Use aspas duplas ao redor da chave

#### "The caller does not have permission"

**Causa**: Service Account não tem acesso à planilha

**Solução**:
- Compartilhe a planilha com o email da service account
- Dê permissão de Leitor
- Aguarde alguns segundos e tente novamente

#### "Unable to parse range"

**Causa**: Planilha vazia ou formato incorreto

**Solução**:
- Adicione os cabeçalhos na linha 1
- Adicione pelo menos um evento na linha 2
- Verifique se os nomes das colunas estão corretos

#### "Invalid date"

**Causa**: Formato de data incorreto

**Solução**:
- Use formato \`YYYY-MM-DD\`
- Exemplo: \`2026-03-25\`
- Não use barras ou formato brasileiro

### 🔄 Atualizando Eventos

1. Edite a planilha no Google Sheets
2. Adicione, remova ou modifique eventos
3. Salve (auto-save)
4. Aguarde até 1 hora para atualização automática (ISR)
5. Ou force: redeploy na Vercel ou reinicie o servidor local

### 🎯 Boas Práticas

- **Backup**: Mantenha uma cópia da planilha
- **Organização**: Use uma aba por tipo de evento (se expandir)
- **Datas futuras**: O sistema filtra automaticamente eventos passados
- **Ordem**: Eventos são ordenados por data crescente
- **Descrição**: Seja claro e conciso (100-200 caracteres ideal)
- **Links**: Sempre use HTTPS
- **Teste**: Adicione eventos de teste antes de produção

## Estrutura Completa de Exemplo

| titulo | data | horaInicio | local | endereco | descricao | linkEvento | artista |
|--------|------|------------|-------|----------|-----------|------------|---------|
| Cores do Sul | 2026-03-25 | 19:00 | Galeria Mamute | Rua da República, 500 | Celebração da arte gaúcha | https://example.com | Coletivo POA |
| Traços Urbanos | 2026-04-01 | 18:30 | Espaço Cultural CEEE | Rua dos Andradas, 1223 | Fotografia urbana | | Marina Silva |
| Memórias | 2026-04-08 | 20:00 | Atelier Livre | Praça Montevidéu | Instalação artística | https://example.com/memorias | João Guimarães |

---

Pronto! Sua integração com Google Sheets está configurada. 🎉

**Próximo passo**: [Deploy na Vercel](./DEPLOY.md)
