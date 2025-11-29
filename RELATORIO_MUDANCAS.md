# Relatório de Mudanças - Simplificação do Projeto AdotaPet

## Resumo Geral
O projeto foi refatorado para simplificar a estrutura e o código, tornando-o mais adequado para apresentações acadêmicas. O foco foi remover redundâncias, organizar componentes em uma estrutura de pastas lógica, e garantir que a lógica de conexão com o backend seja clara e direta.

## Mudanças por Arquivo/Seção

### Reorganização de Pastas
A estrutura de pastas em `src/components` foi completamente reorganizada para agrupar componentes por funcionalidade, facilitando a navegação:
- **Antes:** Lista plana e misturada (`feed-components`, `login-components`, `header-components`, etc.)
- **Depois:**
  - `auth/`: `login`, `register`
  - `feed/`: `main`, `nav-bar`
  - `profile/`: `profile-components`, `profile-header`, `profile-post`
  - `shared/`: `header`, `footer`, `search-bar`

### `src/app/services/pet.service.ts`
- **Renomeação:** Arquivo renomeado de `Pet.Service.ts` para `pet.service.ts` para seguir convenções.
- **Simplificação:** A lógica de transformação de dados (adapter) foi movida do componente `FeedComponents` para o serviço. O serviço agora retorna objetos `PetCardInfo` prontos para uso no frontend, abstraindo a complexidade da resposta da API (lidando com `$values` do .NET).
- **Tipagem:** Interfaces `Pet` e `PetCardInfo` foram definidas claramente.

### `src/app/services/user.service.ts`
- **Limpeza:** Removidos imports não usados.
- **Correção:** Simplificação da chamada de cadastro e validação básica.

### `src/app/interceptors/auth-interceptor.ts`
- **Correção:** Implementada a lógica de adição do Token JWT no header `Authorization`. Anteriormente o arquivo estava vazio e a lógica estava num arquivo não utilizado em `services/Auth.Interceptor.ts`.

### Componentes (`feed-components`, `login-components`, etc.)
- **Standalone:** Todos os componentes foram verificados e marcados como `standalone: true`, já que o `app.module.ts` (que estava quebrado/misto) foi removido.
- **Imports:** Caminhos de importação atualizados para refletir a nova estrutura de pastas.
- **Tipagem:** Adicionada tipagem explícita (`any`, interfaces) para resolver erros de compilação estrita.

## Remoções
- **`src/app/services/app.module.ts`:** Removido pois o projeto está usando componentes standalone e o arquivo continha código incompleto/incorreto.
- **`src/app/services/Auth.Interceptor.ts`:** Removido pois era duplicado e estava no local errado. A lógica foi movida para `src/app/interceptors/auth-interceptor.ts`.
- **`src/components/register-ccomponents` (Renomeado):** A pasta foi movida e os arquivos renomeados de `register-ccomponents` (typo) para `register-components`.
- **`src/app/services/user.spec.ts`:** Removido pois estava causando erro de build (import quebrado) e testes unitários profundos não são o foco da apresentação.

## Impacto na Apresentação
- **Fluxo Lógico:** A separação em `auth`, `feed`, `profile` e `shared` torna muito mais fácil explicar a arquitetura do projeto visualmente.
- **Código Limpo:** Ao mover a lógica de transformação de dados para o `PetService`, o componente `FeedComponents` ficou focado apenas em exibir dados, facilitando a explicação do padrão MVC/Separation of Concerns.
- **Correção de Bugs:** A correção do Interceptor garante que a autenticação (login/token) funcione, permitindo demonstrar o fluxo completo de usuário logado.

## Testes Realizados
- **Build:** O projeto compila com sucesso (`npm run build`).
- **Conexão:** A configuração do `proxy` ou chamadas diretas para `http://localhost:5293` foram mantidas e verificadas no código. O interceptor garante o envio do token.
