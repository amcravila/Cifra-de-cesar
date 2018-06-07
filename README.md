# Cifra-de-cesar

*CIFRA DE CÉSAR - CRIPTOGRAFIA E DESCRIPTOGRAFIA*


**VARIÁVEIS:**

phrase: recebe a frase digitada pelo usuário para ser criptografada/descriptografada
option: recebe o número com a opção que o usuário deseja efetuar (1 - Criptografar OU 2 - Descriptografar)
numbers: string utilizada na validação da entrada do usuário, para bloquear frases que contenham números
character: variável auxiliar para guardar o número correspondente da tabela ASCII para cada letra
encrypted: string com as letras criptografadas
decrypted: string com as letras descriptografadas

**FUNÇÕES:**
caesarCipher: função principal para criptografia/descriptografia
cipher: função para criptografia
decipher: função para descriptografia


INÍCIO

Solicita ao usuário a digitação de uma FRASE

Efetua validação de entrada: o usuário não deve ser capaz de inserir um campo vazio ou que contenha números

Solicita ao usuário selecionar qual opção deseja realizar (1 - Criptografar OU 2 - Descriptografar)

Se selecionar 1, chama a função para Criptografia, se selecionar 2, chama a função para Descriptografia


**Função para Criptografia**:

Cria váriável "character" tipo String em branco

Executa método para identificar o número correspondente da tabela ASCII para cada letra e guarda na variável

Se a frase estiver em letras Maiúsculas, aplica a fórmula para criptografia das letras maiúsculas

Senão, considera-se que a frase está em letras Minúsculas e aplica a fórmula para criptografia das letras minúsculas

Exibe a frase Criptografada 

Fórmula criptografia para letras maiúsculas: ((character - 65 + 7) % 26 + 65)

Fórmula criptografia para letras minúsculas: ((character - 97 + 7) % 26 + 97)


**Função para Descriptografia**: 

Cria váriável "character" tipo String em branco

Executa método para identificar o número correspondente da tabela ASCII para cada letra e guarda na variável

Se a frase estiver em letras Maiúsculas, aplica a fórmula para criptografia das letras maiúsculas

Senão, considera-se que a frase está em letras Minúsculas e aplica a fórmula para criptografia das letras minúsculas

Exibe a frase Descriptografada 

Fórmula descriptografia para letras maiúsculas: ((character - 65 - 7 + 26) % 26 + 65)

Fórmula descriptografia para letras minúsculas: ((character - 97 - 7 + 26) % 26 + 97)


FIM


***FLUXOGRAMA***
![Fluxograma Cifra de César](https://github.com/amcravila/Cartao-de-credito/blob/master/Fluxograma-Cifra-de-Cesar.PNG)
