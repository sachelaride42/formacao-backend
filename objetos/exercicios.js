// 2
const dataAtual = new Date().getFullYear();
const livro1 = {
    nome: 'Fundação',
    autor: 'Isaac Asimov',
    dataPublicacao: 1950,
    genero: 'Ficção-científica'
};

// console.log(typeof dataAtual);
// console.log(livro1);

livro1.idadePublicacao = dataAtual - livro1.dataPublicacao;

// const mostrarDetalhes = `nome: ${livro1.nome}, autor: ${livro1.autor}, data publicação: ${livro1.dataPublicacao}, gênero: ${livro1.genero} e idade de publicacao: ${livro1.idadePublicacao}`;
// console.log(mostrarDetalhes);

// // 3
// const algunsDetalhes = `nome: ${livro1['nome']} e gênero: ${livro1['genero']}`;
// console.log(algunsDetalhes);

// // 4
// livro1['genero'] = 'Aventura';
// console.log(livro1);

// 5
console.log(delete livro1['nome']);
console.log(livro1);