// 1
// const lista = ['mateus', 'extremamente', 'estar'];
// let i = 0;

// lista.forEach(elemento => {
//     console.log(`${i++}: ${elemento}`);
// });

// // 2
// function executaOperacaoEmArray (array, funcao) {
//     array.forEach(funcao);
// }

// function callback (elemento) {
//     elemento = elemento * 10;
//     console.log(elemento);
// }

// const exemploArray = [1, 3, 10, 4];
// executaOperacaoEmArray(exemploArray, callback);
// console.log(exemploArray);

// // 3
// function verificaPresenca (arrayNumeros, numero) {
//     return arrayNumeros.includes(numero) ? arrayNumeros.indexOf(numero) : -1;
// }

// console.log(verificaPresenca([1, 2, 5, 6], 19));

// // 4
// const nomesTurmaA = [
//     'João Silva',
//     'Maria Santos',
//     'Pedro Almeida'
//   ];
  
//   const nomesTurmaB = [
//     'Carlos Oliveira',
//     'Ana Souza',
//     'Lucas Fernandes'
//   ];

// const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);
// console.log(todasAsTurmas);

// function procurarAluno (aluno) {
//     console.log(aluno);
//     const resposta = todasAsTurmas.find(estudante => aluno === estudante) ? 'Aluno existe' : 'Aluno não encontrado';
//     console.log(resposta);
// }

// procurarAluno('Jordana');

// 5
const numeros = [6, 9, 12, 15, 18, 21];

numeros.forEach(elemento => {
    elemento = elemento * 3;
    console.log(elemento);
});

const i = numeros.indexOf(15);
console.log(i);

