// 1
// const unirArrays = function (array1, array2, array3) {
//     return [...array1, ...array2, ...array3];
// };

// console.log(unirArrays([1, 3, 5], [10, 20], [1]));

// const unirArrays = function (...arrays) {
//     let uniao = [];
//     for(let i = 0; i < arrays.length; i++) {
//         uniao = uniao.concat(arrays[i]);
//     }
//     return uniao;
// };

// console.log(unirArrays([1, 3, 5], [10, 20], [1]));

// // 2
// const valores = [1, 4, 3, 3];
// const resultado = valores.reduce((acumulador, elemento) => acumulador + elemento, 0);
// console.log(resultado);

// // 3
// const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
// const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

// const conjunto1 = new Set(coresLista1);
// const conjunto2 = new Set(coresLista2);

// const conjuntosUnidos = conjunto1.union(conjunto2);

// const arrayResultado = [...conjuntosUnidos];

// console.log(arrayResultado);

function retornaPares (array) {
    return array.filter((elemento) => elemento % 2 === 0 ? true : false);
}

console.log(retornaPares([2, 4, 5, 6, 7]));

function multiplosTresMaioresCinco (array) {
    return array.filter(elemento => elemento > 5 && elemento % 3 === 0);
}

console.log(multiplosTresMaioresCinco([6, 9, 11, 15, 43]));