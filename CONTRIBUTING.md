# Contribuindo com o Calendário Cultural POA

Obrigado pelo interesse em contribuir! Este documento fornece diretrizes para contribuir com o projeto.

## 🎯 Como Contribuir

Existem várias formas de contribuir:

1. 🐛 **Reportar bugs**
2. 💡 **Sugerir novas funcionalidades**
3. 📝 **Melhorar a documentação**
4. 💻 **Contribuir com código**
5. 🎨 **Melhorar o design**
6. 🌍 **Traduzir para outros idiomas**

## 🐛 Reportando Bugs

Antes de reportar um bug, verifique se já não existe uma issue aberta sobre ele.

Ao criar uma issue de bug, inclua:

- **Descrição clara** do problema
- **Passos para reproduzir** o comportamento
- **Comportamento esperado** vs **comportamento atual**
- **Screenshots** (se aplicável)
- **Ambiente**: Browser, versão, sistema operacional
- **Console errors**: Se houver erros no console do navegador

### Template de Bug Report

\`\`\`markdown
## Descrição
[Descrição clara e concisa do bug]

## Passos para Reproduzir
1. Vá para '...'
2. Clique em '...'
3. Role até '...'
4. Observe o erro

## Comportamento Esperado
[O que deveria acontecer]

## Comportamento Atual
[O que está acontecendo]

## Screenshots
[Se aplicável]

## Ambiente
- Browser: [ex: Chrome 120]
- OS: [ex: Ubuntu 22.04]
- Device: [ex: iPhone 12]
\`\`\`

## 💡 Sugerindo Funcionalidades

Sugestões de novas funcionalidades são bem-vindas!

Ao criar uma issue de feature request, inclua:

- **Descrição clara** da funcionalidade
- **Problema que resolve** ou caso de uso
- **Solução proposta** (se tiver em mente)
- **Alternativas consideradas**
- **Mockups ou wireframes** (se aplicável)

## 💻 Contribuindo com Código

### Setup do Ambiente de Desenvolvimento

1. **Fork o repositório**

2. **Clone seu fork**
\`\`\`bash
git clone https://github.com/seu-usuario/calendario-cultural.git
cd calendario-cultural
\`\`\`

3. **Adicione o repositório original como upstream**
\`\`\`bash
git remote add upstream https://github.com/original-owner/calendario-cultural.git
\`\`\`

4. **Instale as dependências**
\`\`\`bash
npm install
\`\`\`

5. **Configure o ambiente**
\`\`\`bash
cp .env.local.example .env.local
# Edite .env.local com suas credenciais
\`\`\`

6. **Crie uma branch para sua feature**
\`\`\`bash
git checkout -b feature/minha-feature
\`\`\`

### Diretrizes de Código

#### Estilo de Código

- Use **TypeScript** para type safety
- Siga as convenções do **ESLint** configurado
- Use **Tailwind CSS** para estilização (evite CSS inline ou styled-components)
- Componentes devem ser **function components** com hooks
- Use **nomes descritivos** para variáveis e funções

#### Estrutura de Componentes

\`\`\`typescript
// ✅ Bom
export default function EventCard({ event }: EventCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Lógica do componente
  
  return (
    <article className="...">
      {/* JSX */}
    </article>
  );
}

// ❌ Evite
const EventCard = (props) => {
  // ...
}
\`\`\`

#### Commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/):

\`\`\`bash
# Tipos de commit
feat: Nova funcionalidade
fix: Correção de bug
docs: Documentação
style: Formatação, ponto e vírgula, etc
refactor: Refatoração de código
test: Testes
chore: Tarefas de build, CI, etc

# Exemplos
git commit -m "feat: adiciona filtro por local"
git commit -m "fix: corrige formato de data no EventCard"
git commit -m "docs: atualiza README com instruções de deploy"
\`\`\`

#### Testes

Antes de enviar o PR:

- ✅ Build passa: \`npm run build\`
- ✅ Sem erros de TypeScript
- ✅ Testado em mobile e desktop
- ✅ Acessibilidade verificada

### Processo de Pull Request

1. **Atualize sua branch com a main**
\`\`\`bash
git fetch upstream
git rebase upstream/main
\`\`\`

2. **Push para seu fork**
\`\`\`bash
git push origin feature/minha-feature
\`\`\`

3. **Crie o Pull Request**
- Vá ao GitHub e clique em "New Pull Request"
- Preencha o template (veja abaixo)
- Descreva claramente as mudanças
- Referencie issues relacionadas (#123)

4. **Aguarde review**
- Responda aos comentários
- Faça ajustes se necessário
- Seja paciente e respeitoso

### Template de Pull Request

\`\`\`markdown
## Descrição
[Descrição clara das mudanças]

## Tipo de mudança
- [ ] Bug fix (non-breaking change)
- [ ] Nova funcionalidade (non-breaking change)
- [ ] Breaking change (altera funcionalidade existente)
- [ ] Documentação

## Como foi testado?
[Descreva os testes realizados]

## Checklist
- [ ] Meu código segue o style guide do projeto
- [ ] Realizei self-review do código
- [ ] Comentei código complexo
- [ ] Atualizei a documentação
- [ ] Minhas mudanças não geram warnings
- [ ] Build passa localmente
- [ ] Testei em diferentes dispositivos/browsers

## Screenshots (se aplicável)
[Adicione screenshots]

## Issues relacionadas
Closes #123
\`\`\`

## 📝 Contribuindo com Documentação

Documentação é crucial! Você pode contribuir:

- Corrigindo typos
- Melhorando explicações
- Adicionando exemplos
- Traduzindo para outros idiomas
- Atualizando guias desatualizados

Arquivos de documentação:
- \`README.md\` - Visão geral do projeto
- \`GOOGLE_SHEETS_SETUP.md\` - Setup do Google Sheets
- \`DEPLOY.md\` - Guia de deploy
- \`CONTRIBUTING.md\` - Este arquivo

## 🎨 Contribuindo com Design

Melhorias de design são bem-vindas!

Ao propor mudanças de design:

1. Crie um issue explicando o problema de UX/UI
2. Forneça mockups ou wireframes
3. Considere acessibilidade (contraste, touch targets)
4. Mantenha consistência com o design existente
5. Teste em diferentes tamanhos de tela

## 🌍 Tradução

Interessado em traduzir para outro idioma?

1. Crie uma issue propondo a tradução
2. Aguarde aprovação
3. Siga a estrutura de internacionalização
4. Traduza todos os textos visíveis
5. Teste a tradução no contexto

## 🤝 Código de Conduta

### Nossos Valores

- **Respeito**: Trate todos com respeito e empatia
- **Inclusão**: Seja acolhedor com pessoas de todos os backgrounds
- **Colaboração**: Trabalhe em conjunto, compartilhe conhecimento
- **Profissionalismo**: Mantenha discussões construtivas e profissionais

### Comportamentos Inaceitáveis

- Linguagem ofensiva ou discriminatória
- Assédio de qualquer tipo
- Trolling ou comentários depreciativos
- Publicar informações privadas de outros
- Conduta não profissional

### Reportando Violações

Se você presenciar ou for vítima de comportamento inadequado, reporte para os mantenedores do projeto.

## 📋 Roadmap

Funcionalidades planejadas para o futuro:

### Curto Prazo
- [ ] Sistema de busca/filtros
- [ ] Modo escuro
- [ ] Página de detalhes do evento
- [ ] Compartilhamento social

### Médio Prazo
- [ ] PWA com notificações
- [ ] Favoritos (local storage)
- [ ] Multi-idioma (PT/EN)
- [ ] Mapa de localização

### Longo Prazo
- [ ] Backend próprio (opcional)
- [ ] Sistema de usuários
- [ ] Newsletter
- [ ] Integração com redes sociais

## 💬 Dúvidas?

Se tiver dúvidas sobre como contribuir:

1. Verifique a documentação existente
2. Procure em issues fechadas
3. Abra uma issue com a tag "question"
4. Entre em contato com os mantenedores

## 🙏 Reconhecimento

Todos os contribuidores serão creditados no README do projeto.

Obrigado por contribuir para tornar o cenário cultural de Porto Alegre mais acessível! 🎨

---

**Desenvolvido com ❤️ pela comunidade**
