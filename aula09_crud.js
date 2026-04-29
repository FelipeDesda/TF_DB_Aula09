db = db.getSiblingDB("loja_virtual");

db.produtos.drop();
db.createCollection("produtos");

print("Exercicio 1 - Inserindo produtos");

db.produtos.insertOne({
  nome: "Smartphone Galaxy A15",
  categoria: "Eletronicos",
  preco: 1299.90,
  marca: "Samsung",
  armazenamento: "128GB",
  cor: "Azul"
});

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
]);

print("\nExercicio 2.1 - Todos os produtos");
printjson(db.produtos.find().toArray());

print("\nExercicio 2.2 - Produtos com preco maior que 100");
printjson(db.produtos.find({ preco: { $gt: 100 } }).toArray());

print("\nExercicio 2.3 - Produtos da categoria Eletronicos");
printjson(db.produtos.find({ categoria: "Eletronicos" }).toArray());

print("\nExercicio 2.4 - Apenas nome e preco");
printjson(db.produtos.find({}, { _id: 0, nome: 1, preco: 1 }).toArray());

print("\nExercicio 3.1 - Atualizando preco do smartphone");
printjson(
  db.produtos.updateOne(
    { nome: "Smartphone Galaxy A15" },
    { $set: { preco: 1199.90 } }
  )
);

print("\nExercicio 3.2 - Adicionando estoque em todos os produtos");
printjson(db.produtos.updateMany({}, { $set: { estoque: 50 } }));

print("\nExercicio 3.3 - Marcando roupas em promocao");
printjson(
  db.produtos.updateMany(
    { categoria: "Roupas" },
    { $set: { promocao: true } }
  )
);

print("\nProdutos depois das atualizacoes");
printjson(db.produtos.find().toArray());

print("\nExercicio 4.1 - Removendo Camiseta Basica");
printjson(db.produtos.deleteOne({ nome: "Camiseta Basica" }));

print("\nExercicio 4.2 - Removendo categoria Calcados");
printjson(db.produtos.deleteMany({ categoria: "Calcados" }));

print("\nConferencia final");
printjson(db.produtos.find().toArray());
print("Total final de produtos: " + db.produtos.countDocuments());
