import { menu, cadastrar, listar, buscar, editar, alterarDisp, 
    remover, listarDisp, buscarAutor, filtrarGenero } from './biblioteca.js';

let opcao = -1;
while(opcao != 0){
    opcao = menu();
    switch (opcao){
        case 1:
            cadastrar();
            break;
        case 2:
            listar();
            break;
        case 3:
            buscar();
            break;
        case 4: 
            editar();
            break;
        case 5:
            alterarDisp();
            break;
        case 6:
            remover();
            break;
        case 7:
            listarDisp();
            break;
        case 8:
            buscarAutor();
            break;
        case 9:
            filtrarGenero();
            break;
    }
}
