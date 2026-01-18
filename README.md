# ☕ Coffee Cart - Testes E2E com Cypress + BDD

> Projeto de automação de testes end-to-end desenvolvido com Cypress, Cucumber (BDD) e Page Object Model (POM) para o site Coffee Cart.
 
## 👤 Autor

**Vitor Lopes de Oliveira**

Desenvolvido para o **Desafio Coffee Cart - Academia QE Accenture 2026**

---

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como parte do **Desafio Coffee Cart - Academia QE Accenture 2026**, implementando testes automatizados que validam o fluxo completo de compra de cafés, desde a seleção de produtos até a finalização do pedido.

### 💻 Funcionalidades Testadas

- ✅ Seleção de produtos (cafés) para obter uma oferta promocional
- ✅ Validação de modal de oferta promocional
- ✅ Validação de itens no carrinho de compras
- ✅ Remoção de item do carrinho
- ✅ Processo de checkout
- ✅ Validação de mensagens

## 🛠️ Tecnologias Utilizadas

- [**Cypress**](https://www.cypress.io/) `v15.9.0` - Framework de testes E2E
- [**Cucumber**](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor) `v4.3.1` - BDD (Behavior-Driven Development)
- [**Faker.js**](https://fakerjs.dev/) `v8.4.1` - Geração de dados fictícios
- **Node.js** - Ambiente de execução JavaScript

## 📁 Estrutura do Projeto

```
DESAFIO_COFFE_CART/
├── cypress/
│   ├── e2e/
│   │   └── comprarCafe.feature
│   │
│   ├── fixtures/
│   │   └── example.json
│   │
│   └── support/
│       ├── pages/
│       │   ├── carrinho.page.js
│       │   ├── home.page.js
│       │   ├── modalFinalizar.page.js
│       │   └── modalPromocional.page.js
│       │
│       ├── stepDefinitions/
│       │   ├── carrinho.cy.js
│       │   └── home.cy.js
│       │
│       ├── utils/
│       │   ├── armazenaDadosCafe.js
│       │   ├── geradorDeDados.js
│       │   ├── commands.js
│       │   └── e2e.js
│       │
│       ├── commands.js
│       └── e2e.js
│
├── node_modules/
├── .gitignore
├── cypress.config.js
├── package-lock.json
├── package.json
└── README.md
```

### 📂 Descrição das Pastas

- **`e2e/`** - Arquivo `.feature` com cenários escritos em Gherkin (BDD)
- **`fixtures/`** - Dados estáticos para os testes (arquivos JSON de exemplo)
- **`support/pages/`** - Classes Page Object Model para encapsular elementos e ações de cada tela
- **`support/stepDefinitions/`** - Implementação dos steps do Cucumber
- **`support/utils/`** - Utilitários como gerador de dados (Faker.js) e armazenamento de dados
- **`support/`** - Comandos customizados e configurações globais do Cypress

## ▶️ Como Executar o Projeto

### ☑️ Pré-requisitos

Certifique-se de ter instalado em sua máquina:

- **Node.js** (versão 16 ou superior) - [Download](https://nodejs.org/)
- **Git** - [Download](https://git-scm.com/)

### 🔧 Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/vloliveira/desafioCoffeCart.git
```

1. **Instale as dependências**

```bash
npm install

```

> 💡 Este comando irá instalar automaticamente o Cypress, Cucumber, Faker.js e todas as dependências necessárias listadas no package.json.
> 

### ▶️ Executando os Testes

### Modo Interativo (Cypress UI)

```bash
npx cypress open

```

- Selecione **E2E Testing**
- Escolha um navegador
- Clique no arquivo de feature para executar

### Modo Headless (Terminal)

```bash
npx cypress run

```

Para finalizar a execução utilize as teclas: "ctrl + c” no terminal.

## 🧪 Cenário de Teste

```gherkin
Feature: Compra de cafés no Coffee Cart

 Funcionalidade: Comprar café
    Cenario: Comprar café com desconto e edição do carrinho
    Dado que o usuario está na página menu do Coffee Cart
    Quando o usuario seleciona 3 tipos de cafés diferentes
    E o usuario aceita a oferta promocional de um Mocha
    E o usuario acessa a pagina de carrinho
    E o usuario remove um item do carrinho
    Então o usuario realiza o pagamento
    E mensagem de sucesso e exibida

```

## 🔡 Padrões Utilizados

### ✨ BDD (Behavior-Driven Development)

Os cenários são escritos em linguagem natural (Gherkin), facilitando a compreensão por todos os membros do time, técnicos ou não.

### ♻️ Page Object Model (POM)

Cada página/componente da aplicação possui sua própria classe, encapsulando seletores e ações, promovendo:

- **Reusabilidade** de código
- **Manutenibilidade** facilitada
- **Legibilidade** aprimoradac

### ✨ Boas Práticas Implementadas

- ✅ Prioridade para seletores estáveis (`data-test`, IDs)
- ✅ Ausência de esperas fixas (`cy.wait(tempo)`)
- ✅ Validações reativas
- ✅ Nomenclatura clara e padronizada
- ✅ Separação de responsabilidades

---

⭐ **Dica:** Se encontrar algum problema, verifique se todas as dependências foram instaladas corretamente com `npm install`.
