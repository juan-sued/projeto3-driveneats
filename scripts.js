function selecionado(card) {
  const elemento = document
    .querySelector("." + card)
    .classList.toggle("selecionado");
}
