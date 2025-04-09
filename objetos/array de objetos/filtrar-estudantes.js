function filtrarPorPropriedade (lista, propriedade) {
    return lista.filter((estudante) => {
        return !estudante.endereco[propriedade];
    });
}

const estudantes = require('./estudantes.json');
const lista = filtrarPorPropriedade(estudantes, 'cep');
console.log(lista);