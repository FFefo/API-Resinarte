import * as db from '../repository/clientesRepository.js';
import { Router } from 'express';
import { autenticar } from '../utils/jwt.js';

const endpoints = Router();

endpoints.get('/clientes', async (req, resp) => {
    try {
        let registros = await db.consultarCliente();
        resp.send(registros);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/clientes/', autenticar, async (req, resp) => {
    try {
        let cliente = req.body

        let id = await db.inserirCliente(cliente);

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

endpoints.put('/clientes/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id;
        let cliente = req.body;

        let linhasAfetadas = await db.alterarCliente(id, cliente)
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

endpoints.delete('/clientes/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id;

        let linhasAfetadas = await db.removerCliente(id);
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