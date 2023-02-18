# Github API

Um projeto simples que permite pesquisar usuários do Github usando seu nome de usuário e visualizar seus detalhes de perfil.

## Descrição

O usuário é capaz de pesquisar usuários do Github pelo nome de usuário na barra de pesquisa, listando resultados da consulta e permitindo visualizar mais detalhes em um modal personalizado através de requisições feitas pela biblioteca HTTP chamada Axios com o Github API.

O sistema possui testes de automatização, utilizando a ferramenta Cypress (e2e), tem-se como exemplo um teste automatizado para a barra de pesquisa, quando o usuário digita um valor para pesquisar e clica no botão da lupa para gerar resultados.

## Arquitetura & Design

* Cada módulo da aplicação foi divida em componentes e aplicada na página principal 'App.tsx';
* 2 tipos de requisições (Usuário Individual e Lista de Usuários);
* Otimizado para mobile;
* Tratamento de erros nas requisições das consultas.

A aplicação foi feita com o objetivo de ser minimalista com cores escuras e detalhes de verde vibrante que dá uma sensação mais moderna, possui também algumas animações suaves na barra de pesquisa e no logo principal.


## Tecnologias

* React.js
* TypeScript
* Biblioteca HTTP Axios
* Github API
* Cypress

## Instalação

1. `git clone https://github.com/brunadalessio/githubapi-brunadalessio.git`
2. `npm install`
3. `cd frontend`
4. `npm start`
5. `Happy Coding!`