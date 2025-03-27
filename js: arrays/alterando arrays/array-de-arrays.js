const consoles = ['PlayStation', 'Xbox', 'Switch'];
const valores = [3200, 2400, 2000];
const listaProdutos = [consoles, valores, [true, false]];
listaProdutos[2].push(false);

console.log(listaProdutos);