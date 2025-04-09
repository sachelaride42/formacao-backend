const estudantes = require('./estudantes.json');

const listaOrdenada = estudantes.sort((a, b) => {
    if (a.nome < b.nome) return -1;
    if (a.nome > b.nome) return 1;
    return 0;
});

console.log(listaOrdenada);