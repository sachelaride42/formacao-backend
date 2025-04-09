const animais = [
    { id: 1, nome: "Leão", especie: "Felino", idade: 5 },
    { id: 2, nome: "Elefante", especie: "Mamífero", idade: 10 },
    { id: 3, nome: "Pinguim", especie: "Ave", idade: 3 }
]

function funcaoComparacaoIdadeDecrescente (a, b) {
    if(a['idade'] < b['idade']) {
        return 1;
    } else if (a['idade'] > b['idade']) {
        return -1;
    } else {
        return 0;
    }
}

function ordenarAnimais(lista, funcaoComparativa) {
    return lista.sort(funcaoComparativa);
} 

console.log(ordenarAnimais(animais, funcaoComparacaoIdadeDecrescente));