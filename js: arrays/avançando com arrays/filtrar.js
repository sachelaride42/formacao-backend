const jogos = ['The witcher', `Assassin's creed`, 'Risk of Rain', 'Super Mario'];
const tamanho = [100, 30, 2, 20];

const jogosAComprar = jogos.filter((jogo, i) => {
    return tamanho[i] < 50;
});

console.log(jogosAComprar);