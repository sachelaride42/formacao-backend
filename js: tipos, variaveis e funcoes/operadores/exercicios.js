// 2
const valor = 6;
const paridade = (valor % 2) === 0 ? 'par' : 'impar';
console.log(paridade);

// 3
const logado = false;
const admin = false;
if (logado && admin) {
    console.log('Acesso como administrador permitido');
} else {
    console.log('Acesso como administrador negado');
}

// 4
const variavel1 = false;
const variavel2 = false;
if (variavel1 || variavel2) {
    console.log('Pelo menos uma variável é verdadeira');
} else {
    console.log('Ambas as variáveis são falsas');
}

// 5
const idadeMinima = 14;
const idadeUsuario = 11;
if (idadeMinima <= idadeUsuario) {
    console.log('O usuário pode comprar o ingresso');
} else {
    console.log('O usuário não pode comprar o ingresso');
}