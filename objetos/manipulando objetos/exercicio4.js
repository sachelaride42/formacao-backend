const calculadora = {
    soma: function (num1, num2) {
        return num1 + num2;
    },
    subtracao: function (num1, num2) {
        return num1 - num2;
    },
    multiplicacao: function (num1, num2) {
        return num1 * num2;
    },
    divisao: function (num1, num2) {
        if (num2 === 0) {
            return 'Erro, divisão por zero';
        } else {
            return num1 / num2;
        }
    }
}

console.log(calculadora.multiplicacao(11, 2));
console.log(calculadora.divisao(11, 0));

calculadora.calcularMedia = function (array) {
    const somaElementos = array.reduce((acumulador, elemento) => acumulador + elemento, 0);
    return somaElementos / array.length;
}

console.log(calculadora['calcularMedia']([2, 4]));