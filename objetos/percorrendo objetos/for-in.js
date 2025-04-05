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
    }]
}

for (let chave in aluno) {
    console.log(`${chave}: ${aluno[chave]}`);
}