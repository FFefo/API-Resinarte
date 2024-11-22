import con from './connections.js'

export async function inserirPedido(pedido) {
    const comando = `
    insert into tb_pedidos(cliente_id, produto_id, quantidade, preco, data_entrega, entregue)
                     values(?, ?, ?, ?, ?, ?);
    `;

    let resposta = await con.query(comando, [pedido.clienteId, produto.produtoId, pedido.quantidade, pedido.preco, pedido.dataEntrega, pedido.entregue]);
    let info = resposta[0];

    return info.insertId;
}

export async function consultarPedido() {
    const comando = `
        select id_pedido        id,
               cliente_id       clienteID,
               produto_id       produtoID,
               quantidade       quantidade,
               preco            preço,
               data_entrega     DataDeEntrega,
               entregue         pedidoEntregue
         from tb_pedidos
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}

export async function alterarPedido(id, pedido) {
    const comando = `
    update tb_pedidos
    set cliente_id = ?,
        produto_id = ?,
        quantidade = ?,
        preco = ?,
        data_entrega = ?,
        entregue = ?,
    where id_pedido = ?
    `;

    let resposta = await con.query(comando, [pedido.clienteId, produto.produtoId, pedido.quantidade, pedido.preco, pedido.dataEntrega, pedido.entregue, id]);

    let info = resposta[0];

    return info.affectedRows;

}

export async function removerPedido(id) {
    const comando = `
    delete from tb_pedidos
    where id_pedido = ?
    `;

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}