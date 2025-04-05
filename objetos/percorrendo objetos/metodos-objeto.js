const aluno = {
    nome: 'Jose',
    idade: 24,
    cpf: '00099922232',
    matriculado: true,
    telefones: ['99990000', '99991111'],
    enderecos: [{
        rua: 'Av Presidente Prudente',
        numero: 560
    },
    {
        rua: 'Rua do Paulista',
        numero: 1098
    }],
}

aluno.nomePai = undefined;

console.log(aluno);
const chaves = Object.keys(aluno);
console.log(chaves);

if (!chaves.includes('nomePai')) {
    console.log('Erro, não possui campo nomePai');
} else {
    console.log('Possui propriedade nome pai');
}

console.log(Object.entries(aluno)[5]);