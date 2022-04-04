// === PRATO DOWN ===

function selecionarPrato(prato) {
  const comidaEscolhida = document.querySelector(".selecionado-prato");
  if (comidaEscolhida !== null) {
    comidaEscolhida.classList.remove("selecionado-prato");
  }
  prato.classList.add("selecionado-prato");

  const pratoSelecionado = document
    .querySelector(".prato")
    .querySelector(".selecionado-prato");
  console.log(pratoSelecionado);
}
// === PRATO UP ===

// === BEBIDA DOWN  ===
function selecionarBebidas(bebida) {
  const comidaEscolhida = document.querySelector(".selecionado-bebida");
  if (comidaEscolhida !== null) {
    comidaEscolhida.classList.remove("selecionado-bebida");
  }
  bebida.classList.add("selecionado-bebida");

  const bebidaSelecionada = document
    .querySelector(".bebida")
    .querySelector(".selecionado-bebida");
  console.log(bebidaSelecionada);
}
// === BEBIDA UP ===

// === SOBREMESA DOWN ===
function selecionarSobremesa(sobremesa) {
  // qual botão foi clicado
  const comidaEscolhida = document.querySelector(".selecionado-sobremesa");

  if (comidaEscolhida !== null) {
    comidaEscolhida.classList.remove("selecionado-sobremesa");
  }
  sobremesa.classList.add("selecionado-sobremesa");

  const sobremesaSelecionada = document
    .querySelector(".sobremesa")
    .querySelector(".selecionado-sobremesa");
  console.log(sobremesaSelecionada);
}
// === SOBREMESA UP ===

function liberarBotao() {
  if (
    pratoSelecionado !== null &&
    bebidaSelecionada !== null &&
    sobremesaSelecionada !== null
  ) {
  }
}
