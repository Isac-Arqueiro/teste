const fs = require("fs");

function gerarLink(produto){
  return `https://www.google.com/search?q=${produto}+promoção+natal+rn+preço`;
}

function gerarPreco(){
  return (Math.random() * 10 + 5).toFixed(2);
}

const produtos = [
  "manteiga",
  "arroz",
  "feijão",
  "carne",
  "leite",
  "frango",
  "café",
  "açúcar"
];

let dados = [];

produtos.forEach(produto => {

  for(let i = 0; i < 3; i++){ // gera vários resultados
    dados.push({
      produto: produto,
      preco: "R$ " + gerarPreco(),
      loja: "Oferta encontrada",
      link: gerarLink(produto)
    });
  }

});

fs.writeFileSync("dados.json", JSON.stringify(dados, null, 2));

console.log("Promoções atualizadas!");
