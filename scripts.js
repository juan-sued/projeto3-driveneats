let nomePrato = "";
let nomeBebida = "";
let nomeSobremesa = "";
let precoPrato = 0;
let precoBebida = 0;
let precoSobremesa = 0;
let valorFinal = 0;

// === PRATO DOWN ===

function selecionarPrato(prato) {
  const comidaEscolhida = document.querySelector(".selecionado-prato");
  if (comidaEscolhida !== null) {
    comidaEscolhida.classList.remove("selecionado-prato");
  }
  prato.classList.add("selecionado-prato");
  precoPrato = prato.children[3].innerHTML;
  nomePrato = prato.children[1].innerHTML;
  liberarBotao();
}
// === PRATO UP ===

// === BEBIDA DOWN  ===
function selecionarBebidas(bebida) {
  const comidaEscolhida = document.querySelector(".selecionado-bebida");
  if (comidaEscolhida !== null) {
    comidaEscolhida.classList.remove("selecionado-bebida");
  }
  bebida.classList.add("selecionado-bebida");
  precoBebida = bebida.children[3].innerHTML;
  nomeBebida = bebida.children[1].innerHTML;
  liberarBotao();
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
  precoSobremesa = sobremesa.children[3].innerHTML;
  nomeSobremesa = sobremesa.children[1].innerHTML;
  liberarBotao();
}
// === SOBREMESA UP ===

// === LIBERAR BOTÃO ===
function liberarBotao() {
  if (
    document.querySelector(".selecionado-prato") !== null &&
    document.querySelector(".selecionado-bebida") !== null &&
    document.querySelector(".selecionado-sobremesa") !== null
  ) {
    document.querySelector(".select-3-button").classList.add("pedido-pronto");
    document.querySelector(".pedido-pronto").innerHTML = "<p>Fechar pedido</p>";
  }
}

function mostrarFundo() {
  if (document.querySelector(".pedido-pronto") !== null) {
    document.querySelector(".fundo").classList.remove("no-visibility");
  }
}
function cancelar() {
  document.querySelector(".fundo").classList.add("no-visibility");
}

// === CONVERSÃO DE DADOS ===
valorFinal =
  parseFloat(precoPrato.replace("R$", " ").replace(",", ".")) +
  parseFloat(precoBebida.replace("R$", " ").replace(",", ".")) +
  parseFloat(precoSobremesa.replace("R$", " ").replace(",", "."));
valorFinal = valorFinal.toFixed(2).replace(".", ",");

// === RESUMO DO PEDIDO ===

let resumoNomePrato = (document.querySelector(
  "items-prato"
).innerHTML = `<p> ${nomePrato} </p>`);
let resumoPrecoPrato = (document.querySelector(
  "precoPrato"
).innerHTML = `<p> ${precoPrato} </p>`);
let resumoNomeBebida = (document.querySelector(
  "items-bebida"
).innerHTML = `<p> ${nomeBebida} </p>`);

let resumoPrecoBebida = (document.querySelector(
  "precoBebida"
).innerHTML = `<p> ${precoBebida} </p>`);

let resumoNomeSobremesa = (document.querySelector(
  "items-sobremesa"
).innerHTML = `<p> ${nomeSobremesa} </p>`);

let resumoPrecoSobremesa = (document.querySelector(
  "precoSobremesa"
).innerHTML = `<p> ${precoSobremesa} </p>`);
let resumoPrecoTotal = (document.querySelector(
  "precoTotal"
).innerHTML = `<p> ${valorFinal} </p>`);

function whatsappPedido() {
  const name = prompt("Qual o seu nome?");
  const rua = prompt("Qual seu endereço ?");

  const textofinal = encodeURIComponent(`Olá, gostaria de fazer o pedido:\n
- Prato: ${nomePrato}\n
- Bebida: ${nomeBebida}\n
- Sobremesa: ${nomeSobremesa}\n
Total: R$ ${valorFinal}\n
Nome: ${name}\n
Endereço: ${rua}\n`);

  window.open(
    `https://api.whatsapp.com/send?phone=5521984980723&text=${textofinal}`,
    "_blank"
  );

  document.querySelector("a").href = url;
}
