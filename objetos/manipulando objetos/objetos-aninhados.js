const aluno = {
    nome: 'Mathias',
    idade: 24,
    bolsista: true,
    telefones: ['556788888888', '5567978788989'],
};

aluno.endereco = {
    cidade: 'Dourados',
    rua: 'Rua Vargas',
    numero: '45'
}

console.log(aluno.endereco['rua']);