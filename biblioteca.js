import PromptSync from "prompt-sync";
export const sc = PromptSync();

export const livro ={
    id: null,
    titulo: null,
    autor: null,
    anoPublicacao: null,
    genero: null,
    disponibilidade: null
};

const livros = [];

export function menu() {
    console.log('\n ___________________________')
    console.log('|        BIBLIOTECA         |')
    console.log('|---------------------------|')
    console.log('| 01. Cadastrar livr        |')
    console.log('| 02. Listar livros         |')
    console.log('| 03. Buscar livro          |')
    console.log('| 04. Editar livro          |')
    console.log('| 05. Alterar status        |')
    console.log('| 06. Remover livro         |')
    console.log('|---------------------------|')
    console.log('| 07. Listar livros disp.   |')
    console.log('| 08. Buscar por autor      |')
    console.log('| 09. Filtrar por gênero    |')
    console.log('| 10. Filtrar por gênero    |')
    console.log('|---------------------------|')
    console.log('| 0. Sair                   |')
    console.log('|___________________________|')
    const opcao = sc('> ')
    return parseInt(opcao);
}

let i = 0;
export function cadastrar(){
    console.log('\n--- CADASTRAR LIVRO ---');
    let novoLivro = Object.create(livro);
    novoLivro.id = i;
    novoLivro.titulo = sc('Título: ');
    novoLivro.autor = sc('Autor: ');
    novoLivro.anoPublicacao = sc('Ano de publicação: ');
    novoLivro.genero = sc('Gênero: ');
    novoLivro.disponibilidade = true;

    let nTem = true;
    livros.forEach((livro) =>{
        if(livro.titulo.toLowerCase() === novoLivro.titulo.toLowerCase()){
            nTem = false;
            console.log('\nLivro já está cadastrado!')
        }
    })
    if(nTem){
        livros.push(novoLivro);
        console.log('\nLivro cadastrado com sucesso!')
    }
    
    i++;
}

export function listar(){
    console.log('\n ________________________')
    console.log('|   LIVROS CADASTRADOS   |')
    console.log('|________________________|')
    livros.forEach((livro) => {
        console.log('--------------------------')
        console.log(livro)
    });
}

export function buscar(){
    console.log('\n ________________________')
    console.log('|    BUSCAR  LIVRO       |')
    console.log('|________________________|')
    let titulo = sc('Título do livro: ');
    
    console.log(livros.find(livro => livro.titulo.toLowerCase() === titulo.toLowerCase()))
}

export function editar(){
    console.log('\n ________________________')
    console.log('|    EDITAR  LIVRO       |')
    console.log('|________________________|')
    listar();
    console.log('--------------------------')
    let id = parseInt(sc('\nID do livro para edição: '))
    
    const livro = livros.find(livro => livro.id === id)
    livro.titulo = sc('Novo titulo: ')
    livro.autor = sc('Novo autor: ')
    livro.anoPublicacao = sc('Novo ano de publicação: ')
    livro.genero = sc('Novo gênero: ')
}

export function alterarDisp(){
    console.log('\n _________________________')
    console.log('| ALTERAR DISPONIBILIDADE |')
    console.log('|_________________________|')
    listar();
    console.log('--------------------------')
    let id = parseInt(sc('\nID do livro: '))

    const livro = livros.find(livro => livro.id === id);
    if(livro.disponibilidade == true){
        livro.disponibilidade = false;
    } else {
        livro.disponibilidade = true;
    }
    console.log('Disponibilidade alterada com sucesso!')
}

export function remover(){
    console.log('\n ________________________')
    console.log('|     REMOVER  LIVRO     |')
    console.log('|________________________|')
    listar();
    console.log('--------------------------')
    let id = parseInt(sc('\nID do livro para remoção: '))

    livros.splice(id, id + 1)
    console.log('Livro removido com sucesso!')
}

export function listarDisp(){
    console.log('\n ________________________')
    console.log('|   LIVROS DISPONÍVEIS   |')
    console.log('|________________________|')
    livros.forEach((livro) =>{
        if(livro.disponibilidade === true){
            console.log('--------------------------')
            console.log(livro)
        }
    })
}

export function buscarAutor(){
    console.log('\n ________________________')
    console.log('|    BUSCAR POR AUTOR    |')
    console.log('|________________________|')
    const autor = sc('Nome do autor: ')
    livros.forEach((livro) =>{
        if(livro.autor == autor){
            console.log('--------------------------')
            console.log(livro)
        }
    })
}

export function filtrarGenero(){
    console.log('\n ________________________')
    console.log('|   FILTRAR POR GÊNERO   |')
    console.log('|________________________|')
    const genero = sc('Gênero: ')
    livros.forEach((livro) =>{
        if(livro.genero == genero){
            console.log('--------------------------')
            console.log(livro)
        }
    })
}

export function orderAnoPub(){

}