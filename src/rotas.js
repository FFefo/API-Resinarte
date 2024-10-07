import produtosController from './controller/produtosController.js';

export default function adicionarRotas(servidor){
    servidor.use(produtosController);
}
