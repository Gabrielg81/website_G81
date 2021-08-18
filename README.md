## Iniciando projetos com o NextJS + ESLint + Prettier. G81!

-   [x] Instalação do NextJS com TypeScript

> yarn create next-app --typescript

-   [x] Instalação e configuração do ESLint

> Instale em seu VSCode a Estenção ESLint

> Rode o comando abaixo em seu terminal

> `yarn add eslint --dev`

> Após instalação

> `yarn eslint --init`

-   To check syntax, find problems, and enfoce code style (checar sintaxe, problemas e forçar um estilo de código)

-   JavaScript modules (import/export)

-   React

-   Yes (Utilização do Typescript)

-   Selecionar Node e Browser usando a barra de espaço

-   Use a popular style guide (Utilizar o estilo popular)

-   Escolha o Airbnb ou outro se desejar

-   JSON

-   Yes

-   Apague o arquivo package-lock.json que foi criado e rode o comando yarn install

> Observe que agora temos o arquivo eslintrc.json criado. Rode o comando abaixo em seu terminal

> `yarn add -D eslint-plugin-import @typescript-eslint/parser eslint-import-resolver-typescript`

> Abra o arquivo eslintrc.json e insira devidamente nos campos

-   Em rules: "import/no-unresolved": "error"

-   e abaixo de rules, insira as configurações: "settings": {"import/resolver": {"typescript": {}}}

-   [x] Instalação e configuração do Prettier

> Rode o comando abaixo em seu terminal

> `yarn add --dev prettier eslint-config-prettier eslint-plugin-prettier`

> Edite o arquivo .eslintrc.json

-   Insira em extends: "plugin:@typescript-eslint/recommended","plugin:prettier/recommended", "prettier/react"

-   Insira em plugins: "@typescript-eslint", "prettier"

-   Em rules inserir: "prettier/prettier": "error", "space-before-function-paren": "off", react/"prop-types": "off"

> Crie o arquivo .eslintignore na raiz do projeto e insira:

> `node_modules .next /*.js`

> Crie o arquivo prettier.config.js e insira:

> `module.exports = {semi: false, singleQuote: true, arrowParens: 'avoid', traillingComma: 'none',endOfLine: 'auto'};`

> Crie a pasta/arquivo: .vscode/settings.json

> Informe ao VSCode para corrigir automaticamente os erros ao salvar inserindo no arquivo criado acima

`{ "editor.codeActionsOnSave":{"source.fixAll.eslint": true}, "editor.formatOnSave": true, //Formatar arquivos ao salvar "editor.defaultFormatter": "esbenp.prettier-vscode" //Informando o formatador de arquivo padrão } `

-   [x] Instalar a extensão EditorConfig for VSCode

> Clicar com o botão direito na raiz do projeto e gerar .editorconfig

> trocar as duas ultimas opções para true, inserir ou substituir end_of_line = lf

-   [x] Instalar o styled components e next image

> Rode o comando em seu terminal

> `yarn add styled-components next-images @types/styled-components --dev babel-plugin-inline-react-svg --dev`

> Crie/edite o arquivo next.config.js na raiz do projeto e inserindo

> `const withImages = require('next-images')module.exports = withImages({esModule: true,})`

> No arquivo insira next-env.d.ts insira

> `/// <reference types="next/types/global" />`

-   [x] Criar arquivos de configuração do Babel

> Crie o arquivo babel.config.js e insira:

> `module.exports = {presets: ["next/babel"],plugins: [["styled-components", { "ssr": true }],"inline-react-svg"]};`

-   [x] Criar um arquivo `_document.tsx` para coletar as estilizações da primeira página e aplica antes de chegar pronta para o cliente.

-   [ ] Extra! Instalando o Husky para correção antes de dar commit

> Execute para instalar o Husky

> `yarn add --dev husky`

> E para habilitar rode o comando

> `yarn husky install`

"Caso clone o projeto, precisará executar - yarn husky install - para habilitar o husky"

> Se já tiver adicionado ao Git/Github execute

> `yarn husky add .husky/pre-commit "yarn tsc --noEmit && yarn eslint --fix . && yarn prettier --write ."`
