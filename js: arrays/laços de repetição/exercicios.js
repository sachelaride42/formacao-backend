// 1
// const array = [1, 2, 3, 6];

// function imprimirElementos() {
//     for(elemento of array) {
//         console.log(elemento);
//     }
// }

// imprimirElementos();

// // 2
// function listarIndiceEElementos(array) {
//     for(let i = 0; i < array.length; i++) {
//         console.log(`${i}: ${array[i]}`);
//     }
// }

// listarIndiceEElementos([23, 'abelha', true]);

// // 3
// const calcularMenorEMaiorVaLor = function (array) {
//     let maiorValor = array[0];
//     let menorValor = array[0];
//     for(let i = 0; i < array.length; i++) {
//         maiorValor = maiorValor > array[i] ? maiorValor : array[i];
//         menorValor = menorValor > array[i] ? array[i] : menorValor;
//     }
//     console.log(`Maior valor: ${maiorValor}; menor valor: ${menorValor}`);
// }

// calcularMenorEMaiorVaLor([2, -6, 30, 6]);

// 5
const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
for(let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 === 0) {
        console.log(numeros[i]);
    }
}