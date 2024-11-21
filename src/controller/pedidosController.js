import * as db from '../repository/pedidosRepository.js';
import { Router } from 'express';
import { autenticar } from '../utils/jwt.js';

const endpoints = Router();

endpoints.get('/pedidos', async (req, resp) => {
    try {
        let registros = await db.consultarPedido();
        resp.send(registros);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/pedidos/', autenticar, async (req, resp) => {
    try {
        let pedido = req.body

        let id = await db.inserirPedido(pedido);

        resp.send({
            novoId: id
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.put('/pedidos/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id;
        let pedido = req.body;

        let linhasAfetadas = await db.alterarPedido(id, pedido)
        if (linhasAfetadas >= 1) {
            resp.send();
        }
        else {
            resp.status(400).send({ erro: 'Nenhum registro encontrado.' })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.delete('/pedidos/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id;

        let linhasAfetadas = await db.removerPedido(id);
        if (linhasAfetadas >= 1) {
            resp.send(`${linhasAfetadas}`);
        }
        else {
            resp.status(400).send({ erro: 'Nenhum registro encontrado.' })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints;