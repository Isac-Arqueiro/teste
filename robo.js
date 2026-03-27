const fs = require("fs");

function gerarPreco(min, max){
  return (Math.random() * (max - min) + min).toFixed(2);
}

async function atualizar() {

  const dados = [
    {
      produto: "manteiga",
      preco: "R$ " + gerarPreco(4,8),
      loja: "Supermercado RN",
      link: "https://www.google.com/search?q=manteiga+promoção+natal+rn"
    },
    {
      produto: "arroz",
      preco: "R$ " + gerarPreco(18,30),
      loja: "Atacadão",
      link: "https://www.google.com/search?q=arroz+promoção+natal+rn"
    },
    {
      produto: "carne",
      preco: "R$ " + gerarPreco(20,50),
      loja: "Assaí",
      link: "https://www.google.com/search?q=carne+promoção+natal+rn"
    }
  ];

  fs.writeFileSync("dados.json", JSON.stringify(dados, null, 2));
  console.log("Atualizado!");
}

atualizar();
