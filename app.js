function encriptarTexto() {
  let texto = document.querySelector("#texto").value;

  if (/[A-Z]/.test(texto) || /[^a-z0-9\s]/.test(texto)) {
    alert("Solo se deben usar letras minúsculas sin acentos ni caracteres especiales.");
    return; 
  }

  texto = texto.replace(/[aeiou]/g, function (letra) {
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

  document.querySelector("#onlyRead").value = texto;
}

function desencriptarTexto() {
  let texto = document.querySelector("#texto").value;

  if (/[A-Z]/.test(texto) || /[^a-z0-9\s]/.test(texto)) {
    alert("Solo se deben usar letras minúsculas sin acentos ni caracteres especiales.");
    return;
  }

  texto = texto.replace(/ai/g, 'a')
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');

  document.querySelector("#onlyRead").value = texto;
}

hola bibiana chao bibiana gg no team report belex manca


  
