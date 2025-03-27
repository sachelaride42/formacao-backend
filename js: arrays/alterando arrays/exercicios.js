// // 1
// function concatenar(array1, array2) {
//     return array1.concat(array2);
// }

// const resultado = concatenar([10, 20, 50], ['azul', 'red', 'preto']);
// console.log(resultado);

// // 2
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const parteNumeros = numeros.slice(3, 8);
// console.log(parteNumeros);

// // 3
// const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];
// frutas.splice(2, 2, 'Kiwi', 'Pêssego');
// console.log(frutas);

// // 4
// const menuPrincipal = ['Frango frito', 'Pé de frango', 'Peixe frito'];
// const menuSobremesas = ['Jujuba', 'Sacolé', 'Alecrim'];
// const cardapio = menuPrincipal.concat(menuSobremesas);

// console.log(cardapio);

// 5
const matriz1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const matrizA = [['a', 'a', 'a'], ['a', 'a', 'a'], ['a', 'a', 'a']];
const matriz2 = [];
matriz2[0] = [];
matriz2[1] = [];
matriz2[2] = [];
console.log(matriz2);

for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
        matriz2[i][j] = matriz1;
    }
}

console.log(matriz2);
console.log(matriz2[1][2]);

matriz2[2][1] = 15;
console.log(matriz2);

for(let i = 0; i < 3; i++) {
    console.log(matriz1[i]);
}
