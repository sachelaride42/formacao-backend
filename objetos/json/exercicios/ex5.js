const pessoaOriginal = {
    id: 1,
    nome: "Alice",
    idade: 30
}

function copiaObjeto (obj) {
    return JSON.parse(JSON.stringify(obj));
}

const novoObj = copiaObjeto(pessoaOriginal);
novoObj.genero = 'feminino';

console.log(pessoaOriginal, '\n');
console.log(novoObj);