# Aula 09 - CRUD com MongoDB

Esta pasta contem a resolucao dos exercicios de CRUD da Aula09.

## Arquivos

- `Exercicios.md`: enunciado da atividade.
- `Respostas.md`: comandos separados por exercicio.
- `aula09_crud.js`: script executavel com todos os comandos.
- `docker-compose.yml`: ambiente MongoDB local para testar a pratica.

## Subir o MongoDB

Na pasta `Aula09`, execute:

```bash
docker compose up -d
```

## Entrar no mongosh

```bash
docker exec -it aula09_mongo mongosh -u admin -p admin123 --authenticationDatabase admin
```

Depois, os comandos do arquivo `Respostas.md` podem ser executados manualmente.

## Executar tudo de uma vez

```bash
docker exec -it aula09_mongo mongosh -u admin -p admin123 --authenticationDatabase admin /tmp/aula09_crud.js
```

## Parar o ambiente

```bash
docker compose down
```

Para apagar tambem os dados salvos no volume:

```bash
docker compose down -v
```
