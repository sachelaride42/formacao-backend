const array = ['macaco', 'macaco', 'girafa', 'macaco', 'godzilla', 'elefante', 'godzilla'];
const conjunto = new Set(array);
const arrayAtualizado = [...conjunto];

arrayAtualizado.push('joaninha');

console.log(conjunto);
console.log(arrayAtualizado);

