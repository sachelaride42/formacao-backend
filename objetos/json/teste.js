// const obj = {
//   nome: 'Alice',
//   idade: 32
// };

// const copiaProfunda = JSON.parse(JSON.stringify(obj));

// copiaProfunda.nome = 'mateus';

// console.log(obj, copiaProfunda);
const typeCheck = (type) => {
  const typeString = Reflect.apply(Object.prototype.toString, type, [])
  return typeString.slice(
    typeString.indexOf(' ') + 1,
    typeString.indexOf(']')
  ).toLowerCase()
}

const novoLivro = {
  "titulo": "Node.js: Guia Prático",
  "autor": "Alice Coder",
  "genero": "Tecnologia",
  "ano_publicacao": 2022
};

const biblioteca = require("./biblioteca.json");
biblioteca.push(novoLivro);
console.log(typeCheck(biblioteca));

const bibliotecaString = JSON.parse(JSON.stringify(biblioteca));

console.log(typeCheck(bibliotecaString)) 
console.log(bibliotecaString)