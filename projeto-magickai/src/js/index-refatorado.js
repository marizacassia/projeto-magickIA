// Passo 1 - Pega o botão de aplicar filtros
const botaoFiltrar = document.querySelector(".btn-filtrar");

botaoFiltrar.addEventListener("click", aplicarFiltros);

// Função que filtra as cartas com base nos filtros de categoria e preço
function aplicarFiltros() {
  const categoriaSelecionada = pegarCategoriaSelecionada();
  const precoMaximoSelecionado = pegarPrecoMaximoSelecionado();
  const cartas = pegarCartas();

  cartas.forEach(function (carta) {
    const categoriaValida = verificarCategoria(carta, categoriaSelecionada);
    const precoValido = verificarPreco(carta, precoMaximoSelecionado);

    const deveMostrarCarta = categoriaValida && precoValido;

    mostrarOuEsconderCarta(carta, deveMostrarCarta);
  });
}

// Função para pegar o valor do campo de categoria
function pegarCategoriaSelecionada() {
  return document.querySelector("#categoria").value;
}

// Função para pegar o valor do campo de preço
function pegarPrecoMaximoSelecionado() {
  return document.querySelector("#preco").value;
}

// Função para pegar todas as cartas
function pegarCartas() {
  return document.querySelectorAll(".carta");
}

// Função para verificar se a carta corresponde ao filtro de categoria
function verificarCategoria(carta, categoriaSelecionada) {
  const categoriaCarta = carta.dataset.categoria;
  return categoriaSelecionada === "" || categoriaSelecionada.toLowerCase() === categoriaCarta.toLowerCase();
}

// Função para verificar se a carta corresponde ao filtro de preço
function verificarPreco(carta, precoMaximoSelecionado) {
  const precoCarta = carta.dataset.preco;
  return precoMaximoSelecionado === "" || parseFloat(precoCarta) <= parseFloat(precoMaximoSelecionado);
}

// Função para mostrar ou esconder a carta
function mostrarOuEsconderCarta(carta, deveMostrar) {
  if (deveMostrar) {
    carta.classList.add("mostrar");
    carta.classList.remove("esconder");
  } else {
    carta.classList.remove("mostrar");
    carta.classList.add("esconder");
  }
}