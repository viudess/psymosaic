const url = 'http://localhost:3000/produtos'
fetch(url)
 .then((req) => req.json())
 .then((data) => mostraProdutos(data));

function mostraProdutos(produtos){
 const htmlProdutos = produtos.map(
 (produto) =>`
 <div class="produto">
 <img src=${produto.imagem} width=100 height=100><br>
 <h2>${produto.descricao}</h2>
 <h4>Valor : ${produto.valor}</h4>
 </div>`
 );
 document.getElementById('app').innerHTML = htmlProdutos;
}
