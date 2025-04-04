const aluno = {
    nome: 'Mathias',
    idade: 24,
    bolsista: true,
    telefones: ['556788888888', '5567978788989'],
    enderecos: [{
        cidade: 'Dourados',
        rua: 'Rua Vargas',
        numero: '45'
    }]
};

aluno.enderecos.push({
    cidade: 'Campo Grande',
    rua: 'Av. Marcelino',
    numero: null
})

console.log(aluno.enderecos.filter((endereco) => {
    return endereco.numero == null;
}));
