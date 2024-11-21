import produtosController from './controller/produtosController.js';
import usuariosController from './controller/usuarioController.js';
import clientesController from './controller/clientesController.js';
import pedidosController from './controller/pedidosController.js';

export default function adicionarRotas(servidor) {
    servidor.use(produtosController);
    servidor.use(usuariosController);
    servidor.use(clientesController);
    servidor.use(pedidosController);
}