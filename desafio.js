const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lapis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

Array.prototype.meuFilter = function (fn) {
  const filtered = [];
  for (let item of this) {
    if (fn(item)) {
      filtered.push(item);
    }
  }
  return filtered;
};

Array.prototype.meuMap = function (fn) {
  const mapped = [];
  for (let item of this) {
    mapped.push(fn(item));
  }
  return mapped;
};

Array.prototype.meuReduce = function (fn, reduced) {
  for (let item of this) {
    if (reduced === undefined) {
      reduced = item;
    } else {
      reduced = fn(reduced, item);
    }
  }
  return reduced;
};

const maiorQueZero = (item) => item.qtde > 0;
const valorTotal = (item) => item.qtde * item.preco;
const soma = (a, b) => a + b;
const resultado = carrinho
  .meuFilter(maiorQueZero)
  .meuMap(valorTotal)
  .meuReduce(soma)
  .toFixed(2);

console.log(resultado);
