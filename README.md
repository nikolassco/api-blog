# Blog - API

Este projeto consiste em uma `API` `REST`, feita como `NodeJS` e com integração com banco de dados relacional (SQL)  `Postgres`, para fazer cadastro e login de usuários, e `CRUD` de posts (criar, ler, atualizar e deletar).

## Como Rodar

- Clonar o repositório na pasta dejesada;

- Garantir que tenha `node` e `npm` instalados:
```
node -v
npm -v
```
- Garantir que tenha `postgres` instalado;

- Copiar o arquivo `.env.example`, renomear para `.env` e preencher com as configurações.
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

Exemplo de requisição para cadastrar usuário:
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
Exemplo de requisição para fazer login:
```
curl --request POST \
  --url http://localhost:3001/signin \
  --header 'Content-Type: application/json' \
  --data '{
  "email": "batman@dc.com",
  "password": "morcego"
}'
```

<!-- ## Utilize o projeto [Blog - FE](https://portfolionikolas.vercel.app) para ter toda a experiência. -->





Titulo
Breve descrição
Como Rodar
(se tiver)
Caveats
Referências
