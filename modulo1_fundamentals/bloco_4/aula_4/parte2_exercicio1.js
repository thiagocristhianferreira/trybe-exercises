function verificaPalindrome(palavra) {
    palavraRevertida = palavra.split("").reverse().join("");
    //Aqui split converte cada letra em um caractere da String, o reverse inverte a string (string[n-1]=string[0]) e o join une novamente a string em 1 elemento apenas (string[0])
    
    return (palavra == palavraRevertida) ? true : false;
    // aqui ocorre a comparação se eh palindromo ou não
}

console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));