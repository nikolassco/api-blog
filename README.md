<h1 align="center">Blog - API</h1>

Este projeto consiste em uma `API` `REST`, feita como `NodeJS` e com integração com banco de dados relacional (SQL)  `Postgres`, para fazer cadastro e login de usuários, e `CRUD` de posts (criar, ler, atualizar e deletar).

<hr/>

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: [Node.js](https://nodejs.org/en/), [Postgres](https://www.postgresql.org/download/) e [Beekeeper](https://www.beekeeperstudio.io/get).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)


## Como Rodar

- Clonar o repositório na pasta dejesada;

- Renomear o arquivo `.env.example` para `.env` e preencher com as configurações. Isto é essencial para que a aplicação possa rodar.
```
PORT=3001
JWTKEY=minhasenha
DB_HOST=localhost
DB_PORT=5432
DB_USER='your_database_user'
DB_PASS='your_database_password'
DB_NAME=blog
```
- Criar no Beekeeper (gerenciador de banco de dados) um `banco de dados (database)` com nome `blog`;
- Copiar o conteúdo do arquivo `dump.sql` e rodar no Beekeeper com o banco de dados `blog` aberto;
- Rodar o comando para instalar as dependências do projeto:
```
npm install
```
- Rodar o comando para expor a aplicação na porta:
```
npm run dev
```

<hr/>

### Alguns exemplos de requisição:
Para cadastrar usuário:
```
curl --request POST \
  --url http://localhost:3001/signup \
  --header 'Content-Type: application/json' \
  --data '{
  "name": "Batman",
  "email": "batman@dc.com",
  "password": "morcego"
}'
```
Para fazer login:
```
curl --request POST \
  --url http://localhost:3001/signin \
  --header 'Content-Type: application/json' \
  --data '{
  "email": "batman@dc.com",
  "password": "morcego"
}'
```

A partir daqui é necessário copiar o token devolvido em Login e colar depois da palavra Bearer.

Para criar um post:
```
curl --request POST \
  --url http://localhost:3001/user/1/post \
  --header 'Authorization: Bearer
  colar_token_aqui
  ' \
  --header 'Content-Type: application/json' \
  --data '{
  "title": "titulo",
  "subtitle": "bla bla bla",
  "post": "esse é um post"
}'
```
Para visualizar um post:
```
curl --request GET \
  --url http://localhost:3001/post/1 \
  --header 'Authorization: Bearer
  colar_token_aqui
  '
```
Para editar um post:
```
curl --request PUT \
  --url http://localhost:3001/post/1 \
  --header 'Authorization: Bearer
  colar_token_aqui
  ' \
  --header 'Content-Type: application/json' \
  --data '{
  "title": "novo titulo",
  "subtitle": " novo subtitulo",
  "post": "novo post"
}'
```
Para deletar um post:
```
curl --request DELETE \
  --url http://localhost:3001/post/1 \
  --header 'Authorization: Bearer
  colar_token_aqui
  '
```


# Autor

Nikolas Santa Clara

[LinkedIn](https://www.linkedin.com/in/nikolas-desenvolvedor/) ,
[GitHub](https://github.com/nikolassco)

<!-- ## Utilize o projeto [Blog - FE](https://portfolionikolas.vercel.app) para ter toda a experiência. -->





Titulo
Breve descrição
Como Rodar
(se tiver)
Caveats
Referências
