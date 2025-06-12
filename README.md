💻 Desafio Técnico - Tela de Login e Navegação
Este projeto é parte de um desafio técnico para a vaga de Front-End e tem como objetivo demonstrar conhecimentos em React ou Next.js, estilização com Styled Components ou SCSS, implementação de rotas e simulação de um fluxo de login.

🚀 Tecnologias utilizadas
React (ou Next.js)

Styled Components (ou SCSS)

React Router DOM (se React puro)

Vite ou Create React App (caso React)

TypeScript (opcional, se utilizado)

📦 Funcionalidades
✅ Tela de login funcional (fluxo simulado, sem autenticação real)

✅ Estilização com Styled Components ou SCSS

✅ Rotas protegidas (páginas acessíveis apenas após login simulado)

✅ Redirecionamento automático com base no status de autenticação

✅ Responsividade básica para dispositivos móveis

🔐 Fluxo de Login Simulado
O usuário insere um e-mail e senha fictícios (validação simples no front-end)

Ao clicar em Entrar, o sistema armazena um token simulado no localStorage ou context

O usuário é redirecionado para a página interna protegida

Ao clicar em Sair, o token é removido e o usuário volta para a tela de login

📂 Estrutura de Pastas (exemplo)
css
Copiar
Editar
src/
├── assets/
├── components/
├── pages/
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   └── ProtectedRoute.jsx
├── routes/
│   └── AppRoutes.jsx
├── styles/
│   └── globalStyles.js
└── App.jsx
▶️ Como rodar o projeto localmente
bash
Copiar
Editar
# 1. Clone o repositório
git clone https://github.com/seu-usuario/seu-projeto.git
cd seu-projeto

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
Certifique-se de ter o Node.js e o npm/yarn instalados na máquina.

📝 Considerações
O projeto tem foco apenas no front-end.

O login não consome uma API externa; o fluxo é simulado internamente.

O código segue princípios de componentização e separação de responsabilidades.

📄 Licença
Este projeto é apenas para fins de avaliação técnica.
