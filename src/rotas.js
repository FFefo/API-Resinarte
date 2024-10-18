import produtosController from './controller/produtosController.js';
import usuariosController from './controller/usuarioController.js';

export default function adicionarRotas(servidor) {
    servidor.use(produtosController);
    servidor.use(usuariosController);
}
