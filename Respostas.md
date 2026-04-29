# Respostas - Aula 09

Este arquivo contem os comandos para resolver os exercicios da aula 09 usando `mongosh`.

Para executar tudo automaticamente, suba o ambiente da pasta `Aula09` e rode:

```bash
docker compose up -d
docker exec -it aula09_mongo mongosh -u admin -p admin123 --authenticationDatabase admin /tmp/aula09_crud.js
```

## Exercicio 1: Criacao e colecoes

```javascript
use loja_virtual

db.createCollection("produtos")

db.produtos.insertOne({
  nome: "Smartphone Galaxy A15",
  categoria: "Eletronicos",
  preco: 1299.90,
  marca: "Samsung",
  armazenamento: "128GB",
  cor: "Azul"
})

db.produtos.insertMany([
  {
    nome: "MongoDB na Pratica",
    categoria: "Livros",
    preco: 79.90,
    autor: "Joao Silva",
    editora: "Tech Books",
    paginas: 320
  },
  {
    nome: "Camiseta Basica",
    categoria: "Roupas",
    preco: 49.90,
    tamanho: "M",
    cor: "Preta",
    material: "Algodao"
  },
  {
    nome: "Notebook Ultra X",
    categoria: "Eletronicos",
    preco: 3899.90,
    marca: "Lenovo",
    memoria_ram: "16GB",
    processador: "Intel i7"
  },
  {
    nome: "Tenis Runner Pro",
    categoria: "Calcados",
    preco: 299.90,
    tamanho: 42,
    cor: "Branco",
    marca: "Olympikus"
  }
])
```

## Exercicio 2: Consultas e filtros

### 1. Listar todos os produtos

```javascript
db.produtos.find().pretty()
```

### 2. Buscar produtos com preco superior a 100

```javascript
db.produtos.find({ preco: { $gt: 100 } }).pretty()
```

### 3. Listar produtos da categoria Eletronicos

```javascript
db.produtos.find({ categoria: "Eletronicos" }).pretty()
```

### 4. Retornar apenas nome e preco

```javascript
db.produtos.find(
  {},
  { _id: 0, nome: 1, preco: 1 }
).pretty()
```

## Exercicio 3: Atualizacao dinamica

### 1. Atualizar o preco de um produto especifico

```javascript
db.produtos.updateOne(
  { nome: "Smartphone Galaxy A15" },
  { $set: { preco: 1199.90 } }
)
```

### 2. Adicionar estoque para todos os produtos

```javascript
db.produtos.updateMany(
  {},
  { $set: { estoque: 50 } }
)
```

### 3. Marcar produtos da categoria Roupas como promocao

```javascript
db.produtos.updateMany(
  { categoria: "Roupas" },
  { $set: { promocao: true } }
)
```

## Exercicio 4: Exclusao de dados

### 1. Remover um produto especifico

```javascript
db.produtos.deleteOne({ nome: "Camiseta Basica" })
```

### 2. Remover todos os produtos de uma categoria

```javascript
db.produtos.deleteMany({ categoria: "Calcados" })
```

## Conferencia final

Depois das exclusoes, rode:

```javascript
db.produtos.find().pretty()
db.produtos.countDocuments()
```
