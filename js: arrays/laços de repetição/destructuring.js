const carnes = ['alcatra', 'cupim', 'patinho', 'contra-filé'];
const precos = [35, 30, 25, 38];

const lista = [carnes, precos];

const [meat] = lista;
const [prices] = lista;
console.log(lista);
console.log(meat);
console.log(prices);

const numbers = [];
const obj = { a: 1, b: 2 };
({ a: numbers[0], b: numbers[1] } = obj);
console.log(numbers);
// The properties `a` and `b` are assigned to properties of `numbers`
