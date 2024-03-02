const cripButton = document.querySelector(".crip-button");
const descripButton = document.querySelector(".descrip-button");
const resultContainer = document.querySelector(".result");
const resultSvgImage = document.querySelector(".svg-result");
cripButton.addEventListener("click", inputCriptografar);
descripButton.addEventListener("click", inputDescriptografar);

//função para verificar se as foi escrito em minúsculo
function verificarMaiusculasAcentuacao(str) {
  return /[A-ZáàâãéèêíïóôõöúñÁÀÂÃÉÈÍÏÓÔÕÖÚÑ]/.test(str);
}

//capturar o input do usuário para criptografar
function inputCriptografar() {
  const input = document.querySelector("#text-message");
  const textoCriptografado = criptografar(input);
  if (
    textoCriptografado != "" &&
    !verificarMaiusculasAcentuacao(textoCriptografado)
  ) {
    resultContainer.appendChild(createResultDiv(textoCriptografado));
    resultContainer.append(createCopyButton());
  }

  // console.log(textoCriptografado);
}

//capturar o input do usuário para descriptografar
function inputDescriptografar() {
  const input = document.querySelector("#text-message");
  const textoCriptografado = descriptografar(input);
  if (
    textoCriptografado != "" &&
    !verificarMaiusculasAcentuacao(textoCriptografado)
  ) {
    resultContainer.appendChild(createResultDiv(textoCriptografado));
    resultContainer.append(createCopyButton());
  }

  // console.log(textoCriptografado);
}

//função para criptografar
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
  console.log(result);
  return result;
}

//função para descriptografar
function descriptografar(input) {
  const inputUsuario = input.value.split("");
  let result = "";
  for (let i = 0; i < inputUsuario.length; i++) {
    if (inputUsuario[i] == "a" && inputUsuario[i + 1] == "i") {
      inputUsuario.splice(i, 2, "a");
    } else if (
      inputUsuario[i] == "e" &&
      inputUsuario[i + 1] == "n" &&
      inputUsuario[i + 2] == "t" &&
      inputUsuario[i + 3] == "e" &&
      inputUsuario[i + 4] == "r"
    ) {
      inputUsuario.splice(i, 5, "e");
    } else if (
      inputUsuario[i] == "i" &&
      inputUsuario[i + 1] == "m" &&
      inputUsuario[i + 2] == "e" &&
      inputUsuario[i + 3] == "s"
    ) {
      inputUsuario.splice(i, 4, "i");
    } else if (
      inputUsuario[i] == "o" &&
      inputUsuario[i + 1] == "m" &&
      inputUsuario[i + 2] == "e" &&
      inputUsuario[i + 3] == "r"
    ) {
      inputUsuario.splice(i, 4, "o");
    } else if (
      inputUsuario[i] == "u" &&
      inputUsuario[i + 1] == "f" &&
      inputUsuario[i + 2] == "a" &&
      inputUsuario[i + 3] == "t"
    ) {
      inputUsuario.splice(i, 4, "u");
    }
  }
  result = inputUsuario.join("");
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
  return showTextoCriptografado;
}

//função para criar o botão de copiar
function createCopyButton() {
  const copyButton = document.createElement("button");
  copyButton.innerText = "Copiar";
  copyButton.className = "copy-button";
  copyButton.addEventListener("click", () => {
    //criando constante para armazenar o texto criptografado ou descriptografado
    const textoResultado = document.querySelector(
      ".texto-criptografado"
    ).innerText;
    console.log(textoResultado);
    //utilizando método assíncrono writeTexte() para copiar o texto para o clipboard
    navigator.clipboard.writeText(textoResultado).then(
      () => {
        console.log("Content copied to clipboard");
      },
      () => {
        console.error("faile to copy");
      }
    );
  });
  return copyButton;
}
