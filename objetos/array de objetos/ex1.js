const biblioteca = [
    { id: 1, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", anoPublicacao: 1954 },
    { id: 2, titulo: "Dom Quixote", autor: "Miguel de Cervantes", anoPublicacao: 1605 },
    { id: 3, titulo: "1984", autor: "George Orwell", anoPublicacao: 1949 }
]

function encontrarLivroPorId (lista, id) {
    const resultado = lista.find((livro) => {
        return livro.id === id;
    });
    return resultado ? resultado : null;
};

livroEncontrado = encontrarLivroPorId(biblioteca, 5);
if (livroEncontrado == true) {
    console.log(livroEncontrado);
} else {
    console.log('O livro não foi encontrado');
}
