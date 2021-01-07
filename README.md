# Serviço de notas

Esta é uma aplicação feita em Angular 11, com o intuito simples de fazer uma aplicação web que produza um CRUD a partir de dados de uma API REST, no caso desta aplicação, com o uso do [JSON-SERVER](https://www.npmjs.com/package/json-server).

## Execução

Primeiro execute o JSON-SERVER no arquivo db.json localizado dentro da pasta inicial do projeto.
```bash
json-server --watch db.json
```

Após o server estar em execução, execute o comando para servir o projeto.
Com a linha de comando dentro no projeto execute:
```bash
ng serve
```

Após a conclusão do bundle, abra no navegador o link:
http://localhost:4200/
