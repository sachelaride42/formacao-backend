const fatorial = function (n) {
    if(n <= 1) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

const resultado = fatorial(3);
console.log(resultado);