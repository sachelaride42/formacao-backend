notas = [10, 6, 10, 6];
somaNotas = 0;

function somarNotas (nota) {
    somaNotas = somaNotas + nota;
}

console.log(somarNotas);

notas.forEach(somarNotas);

console.log(`a média é: ${somaNotas / notas.length}`);