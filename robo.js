const fs = require("fs");
const fetch = require("node-fetch");
const cheerio = require("cheerio");

async function buscarProduto(produto){

  const url = `https://www.google.com/search?q=${produto}+promoção+natal+rn&hl=pt-BR`;

  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0"
    }
  });

  const html = await res.text();
  const $ = cheerio.load(html);

  let resultados = [];

  $("a").each((i, el) => {
    const texto = $(el).text();

    if(texto.toLowerCase().includes(produto.toLowerCase()) && texto.length > 30){
      resultados.push({
        produto: produto,
        preco: "Ver oferta",
        loja: "Internet",
        link: $(el).attr("href")
      });
    }
  });

  return resultados.slice(0, 5);
}

async function atualizar(){

  const produtos = ["manteiga", "arroz", "carne", "leite"];

  let dados = [];

  for(let p of produtos){
    let res = await buscarProduto(p);
    dados = dados.concat(res);
  }

  fs.writeFileSync("dados.json", JSON.stringify(dados, null, 2));

  console.log("Promoções reais atualizadas!");
}

atualizar();
