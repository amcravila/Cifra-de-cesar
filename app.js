$(document).ready(function() {
  $("#submit-btn").click(caesarCipher);
  $('#input-text').keyup(blockNumber);
});

function blockNumber(event){
    const regex = new RegExp("^[a-z]+$");
    let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)){
        event.preventDefault();
        return false;
    }
}

function caesarCipher(text) {
  //
  // for(i=0; i < phrase.length; i++){
  //   let numbers = '0123456789';
  //   if (numbers.indexOf(phrase.charAt(i),0) !== -1){
  //     return alert ('Digite uma frase utilizando apenas letras!');
  //   }
  // }

  var option = parseInt(prompt("O que deseja fazer? \n1- Criptografar \n2- Descriptografar"));

  if (option === 1) {
    cipher();
  } else if (option === 2) {
    decipher();
  } else {
    alert ('Selecione opção 1 ou 2');
  }

  function cipher() {
    let encrypted = '';
    for (var i in phrase) {
      let character = phrase.charCodeAt(i);
      if (phrase.toUpperCase() === phrase) {
        encrypted += String.fromCharCode((character - 65 + 7) % 26 + 65);
      } else {
        encrypted += String.fromCharCode((character - 97 + 7) % 26 + 97);
      }
    }
    alert ('Frase Criptografada: ' + encrypted);
  }

  function decipher() {
    let decrypted = '';
    for (var i in phrase) {
      let character = phrase.charCodeAt(i);
      if (phrase.toUpperCase() === phrase) {
        decrypted += String.fromCharCode((character - 65 - 7 + 26) % 26 + 65);
      } else {
        decrypted += String.fromCharCode((character - 97 - 7 + 26) % 26 + 97);
      }
    }
    alert ('Frase Descriptografada: ' +  decrypted);
  }

};
