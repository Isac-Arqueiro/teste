const fs = require("fs");

const produtos = [
  "manteiga",
  "arroz",
  "feijão",
  "carne",
  "leite",
  "frango",
  "café"
];

function gerarResultados(produto){
  let resultados = [];

  for(let i = 0; i < 5; i++){
    resultados.push({
      produto: produto,
      preco: "Ver oferta",
      loja: "Buscar online",
      link: `https://www.google.com/search?q=${produto}+promoção+natal+rn`
    });
  }

  return resultados;
}

let dados = [];

produtos.forEach(p => {
  dados = dados.concat(gerarResultados(p));
});

fs.writeFileSync("dados.json", JSON.stringify(dados, null, 2));

console.log("Atualizado com múltiplas promoções!");
