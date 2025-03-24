if (0 == false) {
    console.log('aprovado');
} else {
    console.log('reprovado');
}

if (0 === false){ 
    console.log('aprovado');
} else {
    console.log('reprovado');
}


function verificaDia(dia) {
    return (dia <= 31) && (dia >= 1) ? true : false;
}
console.log(verificaDia(-9));