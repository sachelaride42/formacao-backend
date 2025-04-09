const estudantes = require('./estudantes.json');

function buscarPrimeiroEstudante (lista, chave, valor) {
    return lista.find((estudante) => {
        return estudante[chave] === valor || estudante[chave].includes(valor);
    });
}

const estudanteEscontrado = buscarPrimeiroEstudante(estudantes, 'telefone', '5896279799');
console.log(estudanteEscontrado);