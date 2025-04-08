const estudante = require('./estudante.json');

const stringEstudante = JSON.stringify(estudante);
console.log(stringEstudante, '\n');
console.log(typeof stringEstudante, '\n');

const objEstudante = JSON.parse(stringEstudante);
console.log(typeof objEstudante, '\n', objEstudante);