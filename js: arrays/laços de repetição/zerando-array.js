const lista = [21, 23, 34, 14, 12];
let soma = 0;

for(let i = 0; i < lista.length; i++) {
    soma += lista[i];
}

for(let i = 0; i < lista.length; i++) {
    lista.pop();
}

console.log(lista);
console.log(`A soma é: ${soma}`);