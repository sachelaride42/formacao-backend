// let num1 = 10;
// let num2 = num1;

// console.log(typeof num1);
// console.log(typeof num2);

// num1 += 15;
// num2 += 10;

// console.log(typeof num1);
// console.log(typeof num2);

// console.log(`Num1 é ${num1}. Num2 é ${num2}`);

// let numeroOriginal = 25;

// function alteraNumero (numero) {
//     numero = numero * 10;
//     console.log(`numero: ${numero}, e numeroOriginal: ${numeroOriginal}`);
// }

// alteraNumero(numeroOriginal);
// console.log(`numeroOriginal: ${numeroOriginal}`);

function alteraArray (array) {
    array.push(10);
    console.log(`Array original: ${arrayOriginal} e Array interno: ${array}`);
}

const arrayOriginal = [1, 3, 4];
alteraArray([...arrayOriginal]);