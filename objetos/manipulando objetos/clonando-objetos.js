const carro1 = {
    nome: 'Lancer',
    marca: 'Mitsubishi',
    ano: 2014
}

const carro2 = Object.create(carro1);
carro1.ano = 2020;

console.log(carro2);