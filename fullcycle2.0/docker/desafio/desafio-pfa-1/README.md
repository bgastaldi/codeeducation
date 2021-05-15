# FullCycle 2.0 - Docker
## Desafio PFA - 1

- Crie um programa utilizando sua linguagem de programação favorita que faça uma listagem simples do nome de alguns módulos do curso Full Cycle os trazendo de um banco de dados MySQL. 
- Gere a imagem desse container e a publique no DockerHub.
- Gere uma imagem do nginx que seja capaz que receber as solicitações http e encaminhá-las para o container.
- Crie um repositório no github com todo o fonte do programa e das imagens geradas.
- Crie um arquivo README.md especificando quais comandos precisamos executar para que a aplicação funcione recebendo as solicitações na porta 8080 de nosso computador. Lembrando que NÃO utilizaremos Docker-compose nesse desafio.

## Setup

Lista de imagens no DockerHub.
- bgastaldi/pfa1-mysql:latest
- bgastaldi/pfa1-node:latest
- bgastaldi/pfa1-nginx:latest

## Comandos utilizados

Criando a Network:
``` bash
$ docker network create pfa1_net
```

Executando a Imagem do Banco de Dados MySQL:
``` bash
$ docker run --rm -d --name pfa1-mysql --network=pfa1_net bgastaldi/pfa1-mysql
```

Executando a Imagem da Aplicação NodeJs:
``` bash
 $ docker run --rm -d --name pfa1-node --network=pfa1_net bgastaldi/pfa1-node
```

Executando a Imagem da Nginx (Proxy Reverso)
``` bash
$ docker run --rm -d --name pfa1-nginx -p 8080:80 --network=pfa1_net bgastaldi/pfa1-nginx
```

## Testando
``` http
http://localhost:8080
```

