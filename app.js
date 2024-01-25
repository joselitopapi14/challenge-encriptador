function encriptarTexto() {
    let texto = document.querySelector("#texto").value;
    texto = texto.replace(/[aeiou]/g, function(letra) {
      switch (letra) {
        case 'a':
          return 'ai';
        case 'e':
          return 'enter';
        case 'i':
          return 'imes';
        case 'o':
          return 'ober';
        case 'u':
          return 'ufat';
        default:
          return letra;
      }
    });
    document.querySelector("#texto").value = texto;
  }

  function desencriptarTexto() {
    let texto = document.querySelector("#texto").value;
    texto = texto.replace(/ai/g, 'a')
                 .replace(/enter/g, 'e')
                 .replace(/imes/g, 'i')
                 .replace(/ober/g, 'o')
                 .replace(/ufat/g, 'u');
    document.querySelector("#texto").value = texto;
  }
  
