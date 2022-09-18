<p align="center">
  <img src="https://github.com/cognocoder/cap.ammo/blob/main/public/banner.jpg?raw=true" max-height="150px" width="100%" alt="Projeto cap.ammo" />
</p>

# cap.ammo

![Badge](https://img.shields.io/github/package-json/v/cognocoder/cap.ammo)
![Badge](https://img.shields.io/github/languages/code-size/cognocoder/cap.ammo)

Software licensed by <br>
![Badge](https://img.shields.io/github/license/cognocoder/cap.ammo)

## Protótipo de aplicação Web para varejo

Utilizou-se **Node.js** versão **16.16** para o desenvolvimento deste projeto.

```bash
node --version  # v16.16.0
```

### Instalação de Dependências

```bash
npm install
```

### Execução Local

```bash
npm run dev
```

### Variáveis de Ambientes

Desenvolvimento

```dotenv
HOST=http://localhost:3000
DB=sqlite.db
```

- A variável `HOST` é referente à configuração de _End Point_ para o _Front End_
- A variável `DB` configura a conexão com a o sistema de gerência Base de Dados

Por padrão, utilizou-se base arquivo _sqlite.db_, persistido na raiz do projeto.
Para descartar dados cadastrados, basta descartar o arquivo.

### Dependências

Ambiente <br>
![badge](https://img.shields.io/badge/node-16.16-%23902?style=flat) <br>
![badge](https://img.shields.io/badge/typescript-4.8.2-%23555?style=flat)

Front End <br>
![Badge](https://img.shields.io/badge/immer-^9.0.15-%23249?style=flat)
![Badge](https://img.shields.io/badge/zustand-^4.1.1-%23249?style=flat) <br>
![badge](https://img.shields.io/badge/react-18.2.0-%23942?style=flat)
![badge](https://img.shields.io/badge/react--dom-18.2.0-%23942?style=flat) <br>
![badge](https://img.shields.io/badge/react--hook--form-^7.34.2-%23279?style=flat)
<br>
![badge](https://img.shields.io/badge/styled--components-^5.3.5-%23929?style=flat)

Back End <br>
![badge](https://img.shields.io/badge/next-12.2.5-%23942?style=flat) <br>
![badge](https://img.shields.io/badge/sequelize-^6.21.4-%23249?style=flat)
![badge](https://img.shields.io/badge/sqlite3-^5.0.11-%23249?style=flat)
