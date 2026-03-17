# 🎨 Calendário Cultural POA

Landing page mobile-first para divulgação de vernissages e exposições de arte em Porto Alegre, desenvolvida com Next.js 14+ e integrada com Google Sheets.

## ✨ Funcionalidades

- 📅 **Listagem de eventos** - Visualize próximas vernissages em Porto Alegre
- 🔄 **Sincronização automática** - Dados atualizados via Google Sheets
- 📱 **Adicionar ao calendário** - Baixe arquivo .ics ou abra no Google Calendar
- 🎯 **Mobile-first** - Design responsivo otimizado para dispositivos móveis
- ⚡ **Performance** - ISR (Incremental Static Regeneration) com revalidação a cada 1 hora
- 🎨 **Design artístico** - Paleta de cores vibrante inspirada na cultura gaúcha
- ♿ **Acessível** - Semântica HTML5, ARIA labels e navegação por teclado
- 🔍 **SEO otimizado** - Metadata completa, Open Graph e PWA-ready

## 🚀 Stack Tecnológica

- **Framework**: [Next.js 14+](https://nextjs.org/) com App Router
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Fonte de dados**: [Google Sheets API](https://developers.google.com/sheets/api)
- **Calendário**: Biblioteca [ics](https://www.npmjs.com/package/ics)
- **Deploy**: [Vercel](https://vercel.com)

## 📋 Pré-requisitos

- Node.js 18.17 ou superior
- npm ou yarn
- Conta no Google Cloud Platform (para Google Sheets API)
- Conta na Vercel (para deploy)

## 🔧 Configuração

### 1. Clone o repositório

\`\`\`bash
git clone https://github.com/seu-usuario/calendario-cultural.git
cd calendario-cultural
\`\`\`

### 2. Instale as dependências

\`\`\`bash
npm install
\`\`\`

### 3. Configure o Google Sheets

#### 3.1 Crie um projeto no Google Cloud Console

1. Acesse [Google Cloud Console](https://console.cloud.google.com/)
2. Crie um novo projeto ou selecione um existente
3. Habilite a **Google Sheets API**
4. Vá em **Credenciais** → **Criar Credenciais** → **Conta de Serviço**
5. Preencha o nome e clique em "Criar e Continuar"
6. Pule as permissões opcionais e clique em "Concluir"
7. Clique na conta de serviço criada
8. Vá na aba **Chaves** → **Adicionar Chave** → **Criar Nova Chave**
9. Escolha o formato **JSON** e baixe o arquivo

#### 3.2 Crie a planilha do Google Sheets

1. Crie uma nova planilha no [Google Sheets](https://sheets.google.com/)
2. Configure a primeira linha com os cabeçalhos:

| titulo | data | horaInicio | local | endereco | descricao | linkEvento | artista |
|--------|------|------------|-------|----------|-----------|------------|---------|

3. Adicione eventos nas linhas seguintes:
   - **titulo**: Nome da vernissage/exposição
   - **data**: Data no formato YYYY-MM-DD (ex: 2026-03-25)
   - **horaInicio**: Horário no formato HH:MM (ex: 19:00)
   - **local**: Nome do local
   - **endereco**: Endereço completo (opcional)
   - **descricao**: Descrição do evento
   - **linkEvento**: URL para mais informações (opcional)
   - **artista**: Nome do artista (opcional)

4. Compartilhe a planilha com o email da Service Account (encontrado no JSON baixado)
   - Dê permissão de **Leitor**

5. Copie o ID da planilha (está na URL):
   \`https://docs.google.com/spreadsheets/d/[ESTE_É_O_ID]/edit\`

#### 3.3 Configure as variáveis de ambiente

1. Copie o arquivo de exemplo:

\`\`\`bash
cp .env.local.example .env.local
\`\`\`

2. Edite o arquivo \`.env.local\` com as credenciais:

\`\`\`env
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nSUA_CHAVE_PRIVADA_AQUI\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_CLIENT_EMAIL="seu-service-account@seu-projeto.iam.gserviceaccount.com"
GOOGLE_SHEETS_SPREADSHEET_ID="ID_DA_SUA_PLANILHA"
\`\`\`

**Importante**: A chave privada deve manter os \`\\n\` para as quebras de linha.

### 4. Execute o projeto localmente

\`\`\`bash
npm run dev
\`\`\`

Acesse [http://localhost:3000](http://localhost:3000)

## 📦 Build e Deploy

### Build local

\`\`\`bash
npm run build
npm start
\`\`\`

### Deploy na Vercel

#### Via Dashboard (Recomendado)

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em **Add New** → **Project**
3. Importe o repositório do GitHub
4. Configure as variáveis de ambiente:
   - \`GOOGLE_SHEETS_PRIVATE_KEY\`
   - \`GOOGLE_SHEETS_CLIENT_EMAIL\`
   - \`GOOGLE_SHEETS_SPREADSHEET_ID\`
5. Clique em **Deploy**

#### Via CLI

\`\`\`bash
npm install -g vercel
vercel login
vercel
\`\`\`

## 🏗️ Estrutura do Projeto

\`\`\`
calendario-cultural/
├── app/
│   ├── api/events/         # API route para eventos
│   ├── globals.css         # Estilos globais e tema
│   ├── layout.tsx          # Layout raiz com metadata
│   └── page.tsx            # Página principal
├── components/
│   ├── CalendarButton.tsx  # Botão com dropdown para calendário
│   ├── EventCard.tsx       # Card de evento individual
│   ├── EventsList.tsx      # Grid de eventos
│   └── Hero.tsx            # Seção hero da landing page
├── lib/
│   ├── calendar.ts         # Utilitários de calendário (.ics e Google)
│   ├── sheets.ts           # Cliente Google Sheets API
│   └── types.ts            # Interfaces TypeScript
├── public/
│   ├── manifest.json       # PWA manifest
│   └── robots.txt          # SEO robots
└── .env.local.example      # Exemplo de variáveis de ambiente
\`\`\`

## 🎨 Design System

### Paleta de Cores

- **Primary**: \`#E63946\` (Vermelho vibrante)
- **Primary Dark**: \`#D62828\` (Vermelho escuro)
- **Secondary**: \`#F77F00\` (Laranja)
- **Secondary Light**: \`#FCBF49\` (Amarelo)
- **Accent**: \`#06AED5\` (Azul turquesa)

### Tipografia

- **Display**: Bebas Neue (títulos)
- **Body**: Inter (texto corrido)

## 📱 Responsividade

O design segue a abordagem mobile-first:

- **Mobile**: 1 coluna de eventos
- **Tablet** (768px+): 2 colunas
- **Desktop** (1024px+): 3 colunas

Touch targets seguem o mínimo de 44x44px para acessibilidade.

## ⚡ Performance

- **ISR**: Revalidação a cada 1 hora (3600s)
- **Static Generation**: Páginas pré-renderizadas no build
- **Otimização de fontes**: Google Fonts com \`display=swap\`
- **Tree shaking**: Tailwind JIT mode
- **Code splitting**: Automático via Next.js

## 🔒 Segurança

- Variáveis de ambiente nunca expostas no client-side
- API routes com tratamento de erros
- Content Security Policy via Next.js headers
- Validação de dados do Google Sheets

## 🧪 Testes

Para testar a responsividade:

1. Abra o DevTools (F12)
2. Ative o modo de dispositivo móvel
3. Teste em diferentes resoluções:
   - iPhone SE (375px)
   - iPhone 12 Pro (390px)
   - iPad Air (820px)
   - Desktop (1280px+)

## 📝 Dados Mock

Se as credenciais do Google Sheets não estiverem configuradas, o sistema retorna 3 eventos mock para demonstração. Isso permite testar a interface sem configurar a API.

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature (\`git checkout -b feature/MinhaFeature\`)
3. Commit suas mudanças (\`git commit -m 'Adiciona MinhaFeature'\`)
4. Push para a branch (\`git push origin feature/MinhaFeature\`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto é open source e está disponível sob a [Licença MIT](LICENSE).

## 🎯 Roadmap (Melhorias Futuras)

- [ ] Filtros por data, local e tipo de arte
- [ ] Página de detalhes de cada evento
- [ ] Notificações push (PWA)
- [ ] Modo escuro
- [ ] Multi-idioma (PT/EN)
- [ ] Integração com Instagram
- [ ] Mapa de localização dos eventos
- [ ] Sistema de favoritos (local storage)
- [ ] Newsletter de eventos
- [ ] Sistema de comentários

## 👥 Autores

Desenvolvido com ❤️ em Porto Alegre

## 🙏 Agradecimentos

- Comunidade artística de Porto Alegre
- Next.js e Vercel pela excelente plataforma
- Google pela Google Sheets API
- Todas as galerias e artistas que tornam a cena cultural de POA vibrante

---

**Calendário Cultural POA** - Descubra a arte na capital gaúcha 🎨
