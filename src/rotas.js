import produtosController from './controller/produtosController.js';
import usuarioController from './controller/usuarioController.js'

export default function adicionarRotas(servidor){
    servidor.use(produtosController),
    servidor.use(usuarioController);
}