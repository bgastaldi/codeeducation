# FullCycle 2.0 - Docker
## Desafio Go Lang

Criar uma aplicação Go Lang rodando em docker que retorne a mensagem "Code.education Rocks!" sendo que a imagem precisa ter menos de 2MB.

## Setup

Baixe a pasta `golang` do repositório e entre na mesma.
``` bash
$ cd golang
```

## Comandos utilizados para gerar a imagem

Build da imagem:
``` bash
$ docker build -t bgastaldi/codeeducation .
```

Execução:
``` bash
 $ docker run bgastaldi/codeeducation
```

Verificando o tamanho da imagem pela coluna SIZE:
``` bash
$ docker images
```

Subindo para o Dockerhub:
``` bash
$ docker push bgastaldi/codeeducation:latest
```

## Testando a imagem do Dockerhub

Tendo a certeza da utilização da imagem do Dockerhub:

Excluindo todos os processos/serviços do computador local:
``` bash
$ docker rm $(docker ps -a -q) -f  
```

Excluindo todas as imagens do computador local:
``` bash
$ docker rmi $(docker images -a -q) -f
```

Testando a imagem:
``` bash
$ docker run bgastaldi/codeeducation:latest
```
