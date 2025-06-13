# 💻 Desafio Técnico - Tela de Login e Navegação

Este projeto foi desenvolvido como parte de um desafio técnico para a vaga de Desenvolvedor(a) Front-End. O objetivo é demonstrar conhecimentos em **React**, estilização com **Styled Components**, uso de **rotas protegidas** e **simulação de autenticação**.

---

## 🚀 Tecnologias Utilizadas

- ⚛️ React
- 🎨 Styled Components 
- 🔁 React Router DOM 
- ⚒️ Create React App
- 🟦 TypeScript

---

## 📦 Funcionalidades

- ✅ Tela de **login funcional** (fluxo simulado)
- ✅ **Estilização** com Styled Components 
- ✅ **Rotas protegidas**: acesso apenas após login simulado (Para acessar podem digitar qualquer usuario e senha para ter acesso a outras rotas)
- ✅ **Redirecionamento automático** baseado no status de autenticação
- ✅ **Responsividade básica** para dispositivos móveis

---

## 🔐 Fluxo de Login Simulado

1. Usuário insere um e-mail e senha fictícios (validação simples no front-end)
2. Ao clicar em **Entrar**, o controle de autenticação está sendo feito apenas via estado (useState) no contexto (AuthContext),
3. O usuário é redirecionado para uma **página interna protegida**
4. Ao clicar em **Sair**, o usuário é deslogado apenas no estado do React (contexto) e o usuário é redirecionado para a tela de login.

---

## 📁 Estrutura de Pastas (Exemplo)
```
src/
├── assets/              # Imagens e ícones
├── components/          # Componentes reutilizáveis
├── context/             # Contextos de autenticação
├── pages/               # Páginas principais
│   ├── Dashboard/       # Tela interna protegida
│   └── Login/           # Tela de login
├── App.css              # Estilos globais
├── App.test.tsx         # Testes do componente App
├── App.tsx              # Componente principal da aplicação
├── index.css            # Estilos base
├── index.tsx            # Ponto de entrada da aplicação
├── react-app-env.d.ts   # Tipagens para o React
├── reportWebVitals.ts   # Métricas de performance
├── setupTests.ts        # Configuração de testes

```
---

## ▶️ Como Rodar o Projeto Localmente

```bash
# 1. Clone o repositório
git clone https://github.com/DeboraLara1/tropa-digital.git
cd seu-projeto

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```
---

## 📝 Considerações
- O projeto tem foco exclusivo no front-end

- O fluxo de login é simulado, sem integração com APIs externas

- O código segue boas práticas de componentização e organização

- A responsividade foi aplicada para garantir uma boa experiência mobile
