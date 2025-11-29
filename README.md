# 🐾 AdotaPet - Frontend

![AdotaPet Logo](src/assets/logo.png)

> Conectando corações e patas! Uma plataforma web para facilitar a adoção de animais, permitindo que usuários cadastrem pets e encontrem novos amigos.

## 📱 Sobre o Projeto

O **AdotaPet** é uma aplicação Single Page Application (SPA) desenvolvida em **Angular** que serve como interface para um sistema de adoção. O projeto foca em uma experiência de usuário fluida, com cadastro de usuários, feed de adoção interativo e gerenciamento de perfil.

Este projeto foi desenvolvido como trabalho final da disciplina de **Front End Frameworks**.

### ✨ Funcionalidades Principais

* **Autenticação:** Login e Cadastro de usuários com validação de formulários e integração JWT.
* **Feed de Adoção:** Visualização de pets disponíveis em um layout de cards interativo.
* **Contato Direto:** Botão de WhatsApp integrado nos cards para contato imediato com o doador.
* **Perfil do Usuário:** Gerenciamento de dados do usuário e visualização dos pets cadastrados por ele.
* **Cadastro de Pets:** Formulário para adicionar novos animais para adoção.
* **Design Responsivo:** Interface adaptada para dispositivos móveis e desktop.

## 🛠️ Tecnologias Utilizadas

* **Frontend:** [Angular 19+](https://angular.io/) (Standalone Components)
* **Linguagem:** TypeScript
* **Estilização:** CSS3 (Grid/Flexbox, Variáveis CSS)
* **Consumo de API:** HttpClient, RxJS (Observables)
* **Gerenciamento de Rotas:** Angular Router com Guards de Autenticação

## 🔗 Integração com Backend (.NET)

Este frontend consome uma API RESTful desenvolvida em **.NET / C#** com banco de dados **SQLite**. A comunicação é feita via HTTP, utilizando tokens JWT para rotas protegidas (como criar pets ou ver perfil).

**Repositório da API:**
👉 [Acesse o Backend do AdotaPet aqui](https://github.com/JanGustavo/AdotaPet-Api)

*Certifique-se de ter a API rodando localmente (porta padrão 5293) para que o frontend funcione corretamente.*

## 🎥 Demonstração

Confira o projeto rodando no ambiente mobile:

[![Assista ao vídeo de demonstração](https://www.youtube.com/shorts/V7zmutKx530/0.jpg)](https://www.youtube.com/shorts/V7zmutKx530)

*(Clique na imagem acima para assistir ao vídeo completo)*

## 🚀 Como Rodar o Projeto

### Pré-requisitos
* Node.js instalado (v18 ou superior recomendado)
* Angular CLI (`npm install -g @angular/cli`)

### Passo a passo

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/lucaas-d3v/adotapet.git](https://github.com/lucaas-d3v/adotapet.git)
    cd adotapet
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Execute o servidor de desenvolvimento:**
    ```bash
    ng serve
    ```
    *Para testar no celular (mesma rede Wi-Fi):*
    ```bash
    ng serve --host 0.0.0.0
    ```

4.  **Acesse:**
    Abra o navegador em `http://localhost:4200/`

## 📂 Estrutura do Projeto

A arquitetura foi organizada para facilitar a manutenção e escalabilidade:

* `src/app/services`: Serviços para comunicação com API (`pet.service`, `user.service`) e controle de estado.
* `src/components/auth`: Componentes de Login e Registro.
* `src/components/feed`: Componentes do Feed principal e Cards.
* `src/components/profile`: Componentes de Perfil, Header e Grid de Pets.
* `src/components/shared`: Componentes reutilizáveis (Header, Footer, SearchBar).
* `src/app/guards`: Proteção de rotas (AuthGuard).
* `src/app/interceptors`: Interceptor para adicionar Token JWT automaticamente.

## 🤝 Colaboradores

* **Lucas Dev** - *Frontend & Design*
* **Jan Gustavo** - *Backend & Integração*

---
Feito por devs com dedicação.
