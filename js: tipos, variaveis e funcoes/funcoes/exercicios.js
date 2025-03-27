// 3
const ePalindromo = function (palavra) {
    let palavraArray = palavra.split('');
    let inverso = palavraArray.toReversed();
    return palavraArray.toString() === inverso.toString();
}

console.log(ePalindromo('roro'));

// 4
function maiorNumero (num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}

console.log(maiorNumero(11, 12, 11));

// 5
const calculaPotencia =  (base, expoente) => base ** expoente;
console.log(calculaPotencia(2, 3));