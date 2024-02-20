const cripButton = document.querySelector(".crip-button");
const resultContainer = document.querySelector(".result");
const resultSvgImage = document.querySelector(".svg-result");
cripButton.addEventListener("click", inputCripografar);

function inputCripografar() {
  const input = document.querySelector("#text-message");
  const textoCriptografado = criptografar(input);
  resultContainer.appendChild(createResultDiv(textoCriptografado));
  // console.log(textoCriptografado);
}

function criptografar(input) {
  const inputUsuario = input.value.split("");
  // console.log(inputUsuario);
  let result = "";
  for (let i = 0; i < inputUsuario.length; i++) {
    if (inputUsuario[i] == "a") {
      inputUsuario.splice(i, 1, "ai");
    } else if (inputUsuario[i] == "e") {
      inputUsuario.splice(i, 1, "enter");
    } else if (inputUsuario[i] == "i") {
      inputUsuario.splice(i, 1, "imes");
    } else if (inputUsuario[i] == "o") {
      inputUsuario.splice(i, 1, "omer");
    } else if (inputUsuario[i] == "u") {
      inputUsuario.splice(i, 1, "ufat");
    }
  }
  result = inputUsuario.join("");
  // console.log(result);
  return result;
}

//função para criar a div com o resultado da criptografia e com o botão copiar
function createResultDiv(textoCriptografado) {
  const showTextoCriptografado = document.createElement("div");
  showTextoCriptografado.textContent = textoCriptografado;
  showTextoCriptografado.className = "texto-criptografado";
  while (resultContainer.firstChild) {
    resultContainer.removeChild(resultContainer.firstChild);
  }
  showTextoCriptografado.appendChild(createCopyButton());
  return showTextoCriptografado;
}

//função para criar o botão de copiar
function createCopyButton() {
  const copyButton = document.createElement("button");
  copyButton.innerText = "Copiar";
  copyButton.className = "copy-button";
  return copyButton;
}
