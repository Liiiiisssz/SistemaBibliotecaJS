import PromptSync from "prompt-sync";
export const sc = PromptSync();

const livro ={
    id: null,
    titulo: null,
    autor: null,
    anoPublicacao: null,
    genero: null,
    disponibilidade: null
};

const pessoa ={
    id: null,
    nome: null,
    telefone: null
};

const emprestimo ={
    id: null,
    idLivro: null,
    idPessoa: null,
    data: null,
    dataDevolucao: null
}

const livros = [];
const pessoas = [];
const emprestimos = [];

export function menu() {
    console.log('\n ___________________________')
    console.log('|        BIBLIOTECA         |')
    console.log('|---------------------------|')
    console.log('| 01. Cadastrar livro       |')
    console.log('| 02. Listar livros         |')
    console.log('| 03. Buscar livro          |')
    console.log('| 04. Editar livro          |')
    console.log('| 05. Alterar status        |')
    console.log('| 06. Remover livro         |')
    console.log('|---------------------------|')
    console.log('| 07. Listar livros disp.   |')
    console.log('| 08. Buscar por autor      |')
    console.log('| 09. Filtrar por gênero    |')
    console.log('| 10. Ordenar ano pub.      |')
    console.log('| 11. Listar disponíveis    |')
    console.log('| 12. Cadastrar usuário     |')
    console.log('| 13. Listar usuários       |')
    console.log('| 14. Registrar empréstimo  |')
    console.log('| 15. Relatório empréstimo  |')
    console.log('|---------------------------|')
    console.log('| 0. Sair                   |')
    console.log('|___________________________|')
    const opcao = sc('> ')
    return parseInt(opcao);
}

let i = 0;
export function cadastrar(){
    console.log('\n ________________________')
    console.log('|    CADASTRAR  LIVRO    |')
    console.log('|________________________|')
    let novoLivro = Object.create(livro);
    novoLivro.id = i;
    novoLivro.titulo = sc('Título: ');
    novoLivro.autor = sc('Autor: ');
    novoLivro.anoPublicacao = sc('Ano de publicação: ');
    novoLivro.genero = sc('Gênero: ');
    novoLivro.disponibilidade = true;

    let nTem = true;
    livros.forEach(livro =>{
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
    livros.forEach(livro => {
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
    livros.forEach(livro =>{
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
    livros.forEach(livro =>{
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
    livros.forEach(livro =>{
        if(livro.genero == genero){
            console.log('--------------------------')
            console.log(livro)
        }
    })
}

export function orderAnoPub(){
    console.log('\n ________________________')
    console.log('|  ORDENADO POR ANO DE   |')
    console.log('|       PUBLICAÇÃO       |')
    console.log('|________________________|')
    const ordenados = livros.sort((a, b) => a.anoPublicacao - b.anoPublicacao)
    ordenados.forEach(livro => console.log(livro))
}

export function livrosDisp(){
    console.log('\n ________________________')
    console.log('|   LIVROS DISPONÍVEIS   |')
    console.log('|________________________|')
    livros.forEach(livro =>{
        if(livro.disponibilidade == true){
            console.log(livro)
        }
    })
}

let j = 0
export function cUser(){
    console.log('\n ________________________')
    console.log('|   CADASTRAR  USUÁRIO   |')
    console.log('|________________________|')
    let novaPessoa = Object.create(pessoa)
    novaPessoa.id = j;
    novaPessoa.nome = sc('Nome: ')
    novaPessoa.telefone = sc('Telefone: ')

    pessoas.push(novaPessoa)
    j++
}

export function listUser(){
    console.log('\n ________________________')
    console.log('|  USUÁRIOS CADASTRADOS  |')
    console.log('|________________________|')
    pessoas.forEach(p =>{
        console.log(p)
    })
}

export function rEmprestimo(){
    console.log('\n ________________________')
    console.log('|  REGISTRAR EMPRÉSTIMO  |')
    console.log('|________________________|')

    let novoEmprestimo = Object.create(emprestimo)

    let valido = false;
    let c = false;
    while(!valido){
        let idLivro = parseInt(sc('ID do livro: '))
        const livro = livros.find(livro => livro.id === idLivro)
        if(livro.disponibilidade == false){
            console.log('\nLivro indisponível!')
            console.log('Empréstimo não pode ser realizado.')
        } else {
            livro.disponibilidade = false;
            livros.forEach(livro =>{
                if(livro.id == idLivro){
                    novoEmprestimo.idLivro = idLivro;
                    valido = true;
                    c = true;
                }
            })
            if(!valido){
                console.log('\nLivro inválido!')
            }
        }
        
    }
    if(c){
        valido = false;
        while(!valido){
            let idPessoa = parseInt(sc('ID do usuário: '))
            pessoas.forEach(pessoa =>{
                if(pessoa.id == idPessoa){
                    novoEmprestimo.idPessoa = idPessoa
                    valido = true;
                }
            })
            if(!valido){
                console.log('\nUsuário inválido!')
            }
        }
        novoEmprestimo.data = (new Date(Date.now())).toLocaleDateString('pt-BR')
        novoEmprestimo.dataDevolucao = sc('Data de devolução: ')
        emprestimos.push(novoEmprestimo)
    }
}

export function relatorio(){
    console.log('\n __________________________')
    console.log('| RELATÓRIO DE EMPRÉSTIMOS |')
    console.log('|__________________________|')
    emprestimos.forEach(e =>{
        console.log('Data: ' + e.data)
        console.log('Data de devolução: ' + e.dataDevolucao)
        pessoas.forEach(p =>{
            if(e.idPessoa == p.id){
                console.log('Usuário: ' + p.nome)
            }
        })
    })
}