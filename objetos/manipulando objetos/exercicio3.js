const pessoas = [];
const pessoa1 = {
    nome: 'Marcos',
    idade: 43,
    cidade: 'Dourados'
};

const pessoa2 = {
    nome: 'Mateus',
    idade: 25,
    cidade: 'Ponta'
};

const pessoa3 = {
    nome: 'Luiz',
    idade: 22,
    cidade: 'Dourados'
};

pessoas.push(pessoa1, pessoa2, pessoa3);

function mostrarListaPessoas(lista) {
    lista.forEach((pessoa) => {
        console.log(`nome: ${pessoa.nome}, idade: ${pessoa.idade} e cidade: ${pessoa.cidade}`);
    });
}

function filtrarPorCidade (nomeCidade, lista) {
    const listaPessoasCidade = lista.filter((pessoa) => {
        if (pessoa.cidade === nomeCidade) {
            return true;
        } else {
            return false;
        }
    });
    return listaPessoasCidade.map((pessoa) => pessoa.nome);
}


pessoas.push({
    nome: 'Ucraniano',
    idade: 38,
    cidade: 'Campo Grande'
})

console.log(filtrarPorCidade('Dourados', pessoas));