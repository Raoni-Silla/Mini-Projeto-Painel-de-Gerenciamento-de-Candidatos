# 🎯 Sistema de Gerenciamento de Candidatos

Este projeto é um mini sistema de RH desenvolvido para fins de aprendizado técnico em **Angular 8**. O objetivo é gerenciar o fluxo de candidatos em um processo seletivo, aplicando conceitos fundamentais de comunicação entre componentes, estados e renderização condicional.

## 👤 Autor
- **Usuário:** raoni-silla
- **Versão do Angular:** 8.3.29
- **Node:** 12.22.12

---

## 📋 Funcionalidades Principais

O sistema contempla as seguintes operações:

1.  **Adição de Candidatos:**
    * Input de texto e botão para cadastro.
    * Regra de validação: Proibido nomes vazios.
    * Desafio: Verificação de nomes duplicados na lista.
2.  **Listagem Dinâmica:**
    * Exibição de candidatos em formato de "Cards".
    * Arquitetura de componentes: Lista (Pai) e Card (Filho).
3.  **Gestão de Status:**
    * Todo candidato inicia como "Em análise".
    * Botão para Aprovar (muda status visualmente).
    * Bloqueio de ação: Candidatos aprovados têm o botão de aprovação desativado.
4.  **Remoção:**
    * Exclusão de candidatos da lista através de eventos disparados pelo card.
5.  **Filtros Avançados:**
    * Visualização de "Todos" os candidatos.
    * Visualização filtrada apenas por "Aprovados".

---

## 🧠 Conceitos Angular Aplicados

Para a construção deste projeto "Modo Raiz", foram explorados:

- **Input/Output Decorators:** Comunicação para o filho avisar o pai sobre deleções ou aprovações.
- **Diretivas Estruturais:** `*ngFor` para listas e `*ngIf` para renderização condicional de status e mensagens.
- **Data Binding:** Utilização de `[(ngModel)]` para formulários e `(click)` para eventos.
- **Pipes/Logic:** Filtros de array em TypeScript para manipulação da exibição.

---

## 🛠️ Tecnologias Utilizadas

```text
     / \   _ __   __ _ _   _| | __ _ _ __      / ___| |   |_ _|
    / △ \ | '_ \ / _` | | | | |/ _` | '__|    | |   | |    | |
   / ___ \| | | | (_| | |_| | | (_| | |       | |___| |___ | |
  /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|        \____|_____|___|
                 |___/

Angular CLI: 8.3.29
Node: 12.22.12
OS: linux x64
RxJS: 6.4.06
```

---

## 🚀 Como rodar o projeto

1.  Certifique-se de estar usando o **Node 12**.
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Inicie o servidor de desenvolvimento:
    ```bash
    ng serve
    ```
4.  Acesse `http://localhost:4200/` no seu navegador.

---

## 🧩 Desafios Implementados (Extra)

- [x] Mensagem de "Nenhum candidato cadastrado" quando a lista está vazia.
- [x] Contador dinâmico de candidatos aprovados.
- [x] Estilização diferenciada para candidatos aprovados.
- [x] Edição de nomes de candidatos já existentes.

---

> **Regra de Ouro:** "O que eu já sei que pode resolver isso?" - Foco na resolução de problemas e entendimento real da ferramenta.