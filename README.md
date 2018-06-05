# Cifra-de-cesar

function caesarCipher (n) {

var phrase = prompt ("Digite uma frase para ser criptografada:");

  if (phrase !== '' && isNaN(phrase)) {
    // return 'ok';

alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
indices  0 a 25 / circulo entre 65 e 90

módulo 26 a partir do T para dar a volta (T = 84 (Ascii) - 65 = 19 + 7 = 26 %26 = 0)
(formula = x - 65 + 7 % 26 + 65)

indice (a partir do 65) subtrai 65 depois soma 7 = letra pra frente  (usar a formula do video)


Exemplo: ABACATE
transformar em um array ['A', 'B', 'A', 'C', 'A', 'T', 'E']
pegar os numeros correspondentes a tabela Ascii (65, 66, 65, 67, 65, 84, 69)

usar a formula x - 65 (onde vai transformar para indice de 0 a 25) e soma 7 , depois modulo 26

(x - 65 + 7) % 26 + 65

MINUSCULA:
toUpperCase
e compara com o que tinha antes,
se for igual é maiusculo, senao é minusculo

if x.toUpperCase() === x
 formula do 65

 else 
 formula do 97


DESCRIPTOGRAFAR

formula inversa (se atentar como vai fazer o contrario do modulo)

ESPAÇO
se tiver espaço, converte para espaço e desconverte para espaço OU bloqueia



    phrase.charCodeAt(0); (criptografa)


    phrase.fromCharCode(0); (descriptografa)


  } return alert ('Digite uma frase utilizando letras');
}

caesarCipher(33);





// function cipher () {

// (x - n) % 26


// }





// function decipher () {

// }


// } else {
//   return "Digite apenas letras."
// }
