let carrinho = [];

function adicionarCarrinho(produto, preco) {
  carrinho.push({ produto, preco });
  atualizarCarrinho();
  abrirCarrinho();
}

function atualizarCarrinho() {
  const lista = document.getElementById("lista-carrinho");
  const total = document.getElementById("total-carrinho");

  lista.innerHTML = "";
  let soma = 0;

  carrinho.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.produto} - R$ ${item.preco.toFixed(2)}`;
    lista.appendChild(li);
    soma += item.preco;
  });

  total.textContent = soma.toFixed(2);
}

function abrirCarrinho() {
  document.getElementById("carrinho").style.display = "block";
}

function fecharCarrinho() {
  document.getElementById("carrinho").style.display = "none";
}

function filtrarCategoria(categoria) {
  const produtos = document.querySelectorAll(".produto");
  produtos.forEach((p) => {
    if (p.dataset.categoria === categoria || categoria === "todos") {
      p.style.display = "block";
    } else {
      p.style.display = "none";
    }
  });
}
