const animais = require('./animais.json');
// console.log(animais);

animais.animais.push({
    id: (animais.animais.length + 1),
    nome: 'Cachorro',
    tipo: 'Mamífero',
    habitat: 'casas'
});

animais.animais[1].habitat = 'Geladeiras';
animais.animais.splice(0, 1);
stringAnimais = JSON.stringify(animais);

console.log(stringAnimais);