const departamentos = [
    {
        id: 1,
        nome: "Vendas",
        funcionarios: [
            { id: 101, nome: "Ana", cargo: "Vendedor" },
            { id: 102, nome: "Carlos", cargo: "Gerente de vendas" }
        ]
    },
    {
        id: 2,
        nome: "TI",
        funcionarios: [
            { id: 201, nome: "Maria", cargo: "Desenvolvedor" },
            { id: 202, nome: "João", cargo: "Analista de sistemas" }
        ]
    }
]

function encontrarFuncionarioPorId(lista, idFuncionario) {
    const objetoDepartamentoDoFuncionario = lista.find((departamento) => {
        return departamento.funcionarios.find(funcionario => {
            return funcionario.id === idFuncionario;
        });
    });
    return objetoDepartamentoDoFuncionario ? objetoDepartamentoDoFuncionario.funcionarios.find((funcionario) => {
        return funcionario.id == idFuncionario;
    }) : null;
}

console.log(encontrarFuncionarioPorId(departamentos, 202));