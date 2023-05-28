
function encriptar() {
    var inputText = document.querySelector('.textarea').value.toLowerCase();
    var outputText = '';
  
    for (var i = 0; i < inputText.length; i++) {
      var char = inputText.charAt(i);
      var encryptedChar = char;
  
      switch (char) {
        case 'e':
          encryptedChar = 'enter';
          break;
        case 'i':
          encryptedChar = 'imes';
          break;
        case 'a':
          encryptedChar = 'ai';
          break;
        case 'o':
          encryptedChar = 'ober';
          break;
        case 'u':
          encryptedChar = 'ufat';
          break;
      }
  
      outputText += encryptedChar;
    }
  
    document.querySelector('.texto_resultado').textContent = outputText;
  }
  
  function desencriptar() {
    var inputText = document.querySelector('.textarea').value.toLowerCase();
    var outputText = '';
  
    for (var i = 0; i < inputText.length; i++) {
      var char = inputText.charAt(i);
      var decryptedChar = char;
  
      switch (char) {
        case 'e':
          if (inputText.substr(i, 5) === 'enter') {
            decryptedChar = 'e';
            i += 4;
          }
          break;
        case 'i':
          if (inputText.substr(i, 4) === 'imes') {
            decryptedChar = 'i';
            i += 3;
          }
          break;
        case 'a':
          if (inputText.substr(i, 2) === 'ai') {
            decryptedChar = 'a';
            i += 1;
          }
          break;
        case 'o':
          if (inputText.substr(i, 4) === 'ober') {
            decryptedChar = 'o';
            i += 3;
          }
          break;
        case 'u':
          if (inputText.substr(i, 4) === 'ufat') {
            decryptedChar = 'u';
            i += 3;
          }
          break;
      }
  
      outputText += decryptedChar;
    }
  
    document.querySelector('.textarea').value = outputText;
  }
  
  function copiarTexto() {
    var outputText = document.querySelector('.texto_resultado').textContent;
    document.querySelector('.textarea').value = outputText;
  }
  
  document.querySelector('.boton_encriptador').addEventListener('click', encriptar);
  document.querySelector('.boton_desencriptador').addEventListener('click', desencriptar);
  document.querySelector('.boton_copiar').addEventListener('click', copiarTexto);
  