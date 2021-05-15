# FullCycle 2.0 - Docker
## Desafio Nginx / Node / MySQL

A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser: "Full Cycle Rocks!" - Lista de nomes cadastrada no banco de dados.

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

## Setup

Baixe a pasta `nginx-node-mysql` do repositório e entre na mesma.
``` bash
$ cd nginx-node-mysql
```

## Comandos utilizados

Execução:
``` bash
 $ docker-compose up -d
```

## Testando
``` http
http://localhost:8080
```
