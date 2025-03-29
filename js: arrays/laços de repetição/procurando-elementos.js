const carnes = ['alcatra', 'cupim', 'patinho', 'contra-filé'];
const precos = [35, 30, 25, 38];

const lista = [carnes, precos];

const exibeCarneEPreco = function (nomeCarne) {
    if(lista[0].includes(nomeCarne)){
        const indice = lista[0].indexOf(nomeCarne);
        const precoCarne = lista[1][indice];
        console.log(`${nomeCarne} custa ${precoCarne}`);
    } else {
        console.log('Carne não se encontra na lista');
    }
}

exibeCarneEPreco('cupim');
exibeCarneEPreco('contra-filé');