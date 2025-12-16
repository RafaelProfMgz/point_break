
## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

# Point Break 🌊

**Point Break** é um sistema moderno de controle de ponto e gestão de jornada de trabalho (SaaS). Focado em eliminar a complexidade de planilhas e sistemas arcaicos, o projeto oferece uma interface **"Deep Dark"** com estética **Glassmorphism**, garantindo uma experiência de usuário fluida, sofisticada e intuitiva.

O projeto foi construído utilizando as melhores práticas do **Next.js 16 (App Router)**, totalmente tipado com **TypeScript** e componentizado com **Shadcn/ui**.

## 🚀 Funcionalidades

### 🌐 Área Pública (Landing Page)

- **Home:** Página de conversão com design imersivo, apresentando vantagens e funcionalidades.
- **Componentes Visuais:** Cards com efeito de vidro (`GlassCard`) e animações de entrada.
- **Navegação:** Navbar responsiva e transparente.

### 🔐 Autenticação (Auth)

- **Login & Registro:** Fluxos seguros para acesso de administradores e colaboradores.
- **Wizard de Criação:** No registro, o usuário cria sua conta e a **Company** simultaneamente.
- **Recuperação de Senha:** Fluxo de "Esqueceu a Senha" com etapas de verificação (Mock).
- **Layout Dedicado:** Layout limpo focado no formulário com background animado.

### 📊 Painel Administrativo (Dashboard)

O coração do sistema, protegido por autenticação:

- **Home (Ponto):**
  - Botão de Ponto Interativo ("Big Button") com estados visuais (Trabalhando/Parado).
  - Histórico de batidas do dia em tempo real.
  - Relógio digital sincronizado.
- **Gestão de Time (`/team`):**
  - Listagem de colaboradores com Avatares e Badges de status.
  - Filtros de busca e convite de novos membros.
- **Perfil do Usuário (`/profile`):**
  - Visão geral com estatísticas (Horas no mês, Pontualidade, Banco de Horas).
  - Edição de dados pessoais e configurações de segurança (`/config`).
- **Configurações da Empresa (`/settings`):**
  - Definição de regras de jornada (Geolocalização, Ponto Mobile, Tolerância).
  - Dados cadastrais da organização.

## 🛠️ Tecnologias Utilizadas

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Componentes:** [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Utilitários:** `clsx`, `tailwind-merge`

## 📂 Estrutura do Projeto

O projeto segue uma arquitetura modular baseada em **Route Groups** do Next.js para separar contextos de layout:

```bash
├── src
│   ├── app
│   │   ├── api
│   │   ├── (auth)
│   │   │   ├── forgot-password
│   │   │   │   └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── login
│   │   │   │   └── page.tsx
│   │   │   └── register
│   │   │       └── page.tsx
│   │   ├── (dashboard)
│   │   │   ├── home
│   │   │   │   └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── profile
│   │   │   │   ├── config
│   │   │   │   │   └── page.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── settings
│   │   │   │   └── page.tsx
│   │   │   └── team
│   │   │       └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── (public)
│   │       ├── layout.tsx
│   │       └── page.tsx
│   ├── components
│   │   ├── auth
│   │   ├── dashboard
│   │   │   ├── home
│   │   │   ├── profile
│   │   │   │   └── StatsCard.tsx
│   │   │   └── settings
│   │   ├── landing
│   │   │   └── GlassCard.tsx
│   │   └── ui
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── switch.tsx
│   │       └── table.tsx
│   ├── hooks
│   ├── lib
│   │   └── utils.ts
│   ├── provider
│   ├── service
│   └── types
└── tsconfig.json
```

## 🎨 Design System

O projeto utiliza um sistema de design personalizado no `globals.css`:

- **Tema:** Dark Mode nativo (Deep Void).
- **Cores Semânticas:** Uso de variáveis CSS (`--primary`, `--card`, `--background`) para fácil manutenção.
- **Efeitos:** Blur (Desfoque), Gradientes sutis e Sombras coloridas para profundidade.

---

### Como rodar localmente

1. Clone o repositório:

```bash
git clone https://github.com/RafaelProfMgz/point_break.git
```

2. Instale as dependências:

```bash
npm install
```

3. Rode o servidor de desenvolvimento:

```bash
npm run dev
```

4. Acesse `http://localhost:3000`.
