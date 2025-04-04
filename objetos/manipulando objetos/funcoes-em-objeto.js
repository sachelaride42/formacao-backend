const aluno = {
    nome: 'Mathias',
    idade: 24,
    bolsista: true,
    telefones: ['556788888888', '5567978788989'],
    eMaiorDeIdade: function (idadeBase) {
        return this.idade >= idadeBase;
    },
    eBolsista: function () {
        console.log(this.bolsista);
    },
};

aluno.eBolsista();
console.log(aluno.eMaiorDeIdade(18));