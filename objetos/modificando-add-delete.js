const carro1 = {
    cor: 'prata',
    modelo: 'uno',
    marca: 'fiat',
    dataCompra: '10/03/2010'
};

// carro1.cor = 'azul';
// console.log(carro1.cor);
// console.log(carro1.dono);

// carro1['dono'] = 'Luiz';
// console.log(carro1);

delete carro1.marca;
delete carro1['cor'];
console.log(carro1);
carro1['marca'] = 'honda';
console.log(carro1);