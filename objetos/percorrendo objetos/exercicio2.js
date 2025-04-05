const carro = {
    marca: 'Chevrolet',
    modelo: 'Corsa',
    ano: 2014,
    cor: 'prata'
};

for (let chave in carro) {
    console.log(chave + ': ' + carro[chave]);
}

carro.numeroPassageiros = 4;

for (let chave in carro) {
    console.log(chave + ': ' + carro[chave]);
}