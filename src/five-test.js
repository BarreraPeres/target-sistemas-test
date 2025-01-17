function fiveFunction(palavra) {

    const letras = palavra.split("")
    let palavraInvertida = ""
    for (let i = letras.length - 1; i >= 0; i--) {
        palavraInvertida += letras[i]
    }
    return palavraInvertida
}

console.log(fiveFunction("palavras"))