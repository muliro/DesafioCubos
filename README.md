# Desafio técnico web - processo seletivo da cubos

Presumindo-se que ja se tenham instalados as seguintes bibliotecas:<h2>
- node
- react
- yarn
## Objetivo

Implementar um web app responsivo que consuma a [API do The Movie DB]

***_Para confeccionar o web-app foi-se utilizado o comando: create-react-app movies, atrvés do terminal logado como administrador._


##Estrutura da pagina ao criar web app usando o create-react-app
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg

##Para conseguir compilar e executar 

o Web App é necessário instalar as seguintes dependencias:

 - React Router pelo comando:
 npm install --save react-router

 - React Redux pelo comando:
npm install --save react-redux

 - React Redux thunk pelo comando: 
  npm install --save redux-thunk

 - axios pelo comando:
  npm install axios  ou yarn add axio


_Ou simplesmente pode-se copiar as dependecias no package.json, abrir o terminal,buscar a pasta que detem o projeto e executar o comando npm i._

##O react router

 Utilizado para navegação entres a páginas através das tags "Link" importadas através da biblioteca:

import {link} from'react-router-dom'

_Note: Instead of href="/" we use Link to="/"_

##O react redux

 Utilizado para criação de uma store global que possa ser acessada de qualquer página e acelerando a renderização


##axios

Utilizado na aplicação para fazer requisições da api movie DB api, através de requisições tipo 'GET'e recebendo um Json como resposta.

## Compilando e Executando
Com App criado e dependencias instaladas, basta apenas copiar os arquivos e pastas e executar o comando _Yarn start_ ou _npm start_ e esperar compilação e execução do app.