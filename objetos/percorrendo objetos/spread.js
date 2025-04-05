const aluno = {
    nome: 'Jose',
    idade: 24,
    cpf: '00099922232',
    matriculado: true,
    telefones: ['99990000', '99991111', '22222222'],
    enderecos: [{
        rua: 'Av Presidente Prudente',
        numero: 560
    },
    {
        rua: 'Rua do Paulista',
        numero: 1098
    }]
}

function mostrarTelefones (telefone1, telefone2) {
    console.log(telefone1);
    console.log(telefone2);
}

mostrarTelefones(...aluno.telefones);

const carta = {
    destinatario: aluno.nome,
    ...aluno.enderecos[0]
};

console.log(carta);
console.log();

const copia = {...aluno};
console.log(copia);
copia.cpf = '111';

console.log(copia.cpf, aluno.cpf);