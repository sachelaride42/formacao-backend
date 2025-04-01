const salarios = [1000, 950, 850, 720];

// const salariosAtualizados = salarios.map((salario) => {
//     if (salario * 1.1 >= 1000) {
//         return 1000;
//     } else {
//         return salario * 1.1;
//     }
// });


// const salariosAtualizados = salarios.map(salario => salario * 1.1 >= 1000 ? 1000 : salario * 1.1);

// console.log(salariosAtualizados);
// console.log(salarios);

const resultado = salarios.map(salario => console.log(salario));
console.log(resultado);