# 🎯 Candidate Manager: Explorando os Fundamentos do Angular

Este projeto consiste em um Sistema de Gerenciamento de Candidatos desenvolvido durante meus estudos de **Angular 8**. O objetivo principal foi consolidar o entendimento sobre o ciclo de vida de componentes, fluxo de dados (Input/Output) e manipulação dinâmica de listas, simulando um cenário real de um fluxo de RH.

---

## 👤 Autor
- **Desenvolvedor:** Raoni Silla (raoni-silla)
- **Foco:** Desenvolvimento Front-end / Estágio & Júnior

---

## 🚀 O Projeto
O sistema permite que um recrutador gerencie candidatos em um processo seletivo, controlando desde o cadastro inicial até a aprovação ou exclusão, com regras de negócio que garantem a integridade dos dados.

### 📋 Principais Funcionalidades
- **Gestão de Cadastro:** Interface para adição de novos candidatos com validação contra nomes vazios e prevenção de duplicidade.
- **Visualização em Cards:** Renderização de componentes dinâmicos para cada candidato, facilitando a leitura e interação.
- **Fluxo de Status:** Sistema de transição de estado onde o candidato inicia como "Em Análise" e pode ser promovido a "Aprovado".
- **Filtros Inteligentes:** Opção de filtragem rápida para visualizar todos os perfis ou focar apenas nos candidatos aprovados.
- **Interface Reativa:** Bloqueio automático de ações (botão de aprovação) para candidatos que já concluíram o processo.

---

## 🛠️ Stack Técnica
Este projeto foi desenvolvido respeitando restrições específicas de ambiente para garantir compatibilidade:

- **Framework:** Angular 8.3.29
- **Gerenciador de Pacotes:** npm
- **Ambiente:** Node 12.22.12
- **Linguagem:** TypeScript / RxJS (v6.4.0)

---

## 🧠 Aprendizados e Desafios (Technical Insights)
Construir este projeto "modo raiz" me permitiu dominar conceitos que são a base de qualquer aplicação Angular profissional:

1.  **Arquitetura de Componentes:** Separação entre o componente "Cérebro" (Container) e o componente "Card" (Presentational), aplicando o padrão de responsabilidade única.
2.  **Comunicação Pai-Filho:** Uso prático de `@Input()` para enviar dados aos cards e `@Output()` com `EventEmitter` para notificar o componente pai sobre exclusões e mudanças de status.
3.  **Renderização Condicional e Listas:** Implementação de diretivas estruturais (`*ngIf` e `*ngFor`) para controle de UI e feedback visual ao usuário (ex: exibir mensagem quando a lista está vazia).
4.  **Manipulação de Estado:** Lógica em TypeScript para filtragem de arrays e controle de propriedades booleanas para desativar elementos de interface.

---

## ⚙️ Instalação e Uso

1. **Clonar o repositório:**
   ```bash
   git clone [https://github.com/raoni-silla/nome-do-repositorio.git](https://github.com/raoni-silla/nome-do-repositorio.git)
   ```

2. **Instalar dependências (Node 12):**
   ```bash
   npm install
   ```

3. **Executar o ambiente de desenvolvimento:**
   ```bash
   ng serve
   ```
4. **Acessar o sistema:** Navegue para `http://localhost:4200/`

---

## 🎯 Objetivo de Carreira
"Meu foco é transformar lógica complexa em interfaces intuitivas. Este projeto reflete meu compromisso em aprender a base sólida do Angular para construir aplicações escaláveis e performáticas."

---
*Este é um projeto de aprendizado prático.*