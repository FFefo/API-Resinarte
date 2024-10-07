import * as db from '../repository/produtosRepository.js';

import { Router } from 'express';
const endpoints = Router();

endpoints.get('/produtos/', async (req, resp) => {
    try{
        let registros = await db.consultarProdutos();
        resp.send(registros);
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/produtos/:id', async (req, resp) =>{
    try {
        let id = req.params.id

        let registros = await db.consultarProdutosPorID(id);
        resp.send(registros);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/produtos/', async (req, resp) => {
    try{
        let produto = req.body
        let id = await db.inserirProduto(produto);

        resp.send({
            novoId: id
        })
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.put('/produtos/:id', async (req, resp) => {
    try{
        let id = req.params.id;
        let produto = req.body;

        let linhasAfetadas = await db.alterarProduto(id, produto)
        if (linhasAfetadas >= 1){
            resp.send();
        }
        else{
            resp.status(400).send({erro: 'Nenhum registro encontrado.'})
        }
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.delete('/produtos/:id', async (req, resp) => {
    try{
        let id = req.params.id;

        let linhasAfetadas = await db.removerProduto(id);
        if (linhasAfetadas >= 1){
            resp.send();
        }
        else{
            resp.status(400).send({erro:'Nenhum registro encontrado.'})
        }
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints;