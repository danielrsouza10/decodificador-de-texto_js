const cripButton = document.querySelector(".crip-button");
cripButton.addEventListener("click", inputCripografar);

function inputCripografar() {
  const input = document.querySelector("#text-message");
  criptografar(input);
}

function criptografar(input) {
  const inputUsuario = input.value.split("");
  console.log(inputUsuario);
  const novoInput = [];
  inputUsuario.forEach((letra) => {
    if (letra == "a" || letra == "e" || letra == "i") {
      console.log(letra);
      novoInput.push(letra);
    }
  });
  console.log(novoInput);
}
