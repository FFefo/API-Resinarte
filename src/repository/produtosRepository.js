import con from './connections.js'

export async function inserirProduto(produto) {
    const comando = `
    insert into tb_produtos(nm_produto, ds_produto, ds_categoria, qtd_produto, vl_preco, img_produto, id_usuario)
                     values(?, ?, ?, ?, ?, ?, ?);
    `;

    let resposta = await con.query(comando, [produto.nome, produto.descricao, produto.categoria, produto.quantidade, produto.preco, produto.imagem, produto.idUsuario]);
    let info = resposta[0];

    return info.insertId;
}

export async function consultarProdutos() {
    const comando = `
        select id_produto       id,
               nm_produto       nome,
               ds_produto       descricao,
               ds_categoria     categoria,
               qtd_produto      quantidade,
               vl_preco         preco,
               img_produto      imagem,
               id_usuario       usuario
         from tb_produtos
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}

export async function consultarProdutosPorID(id) {
    const comando = `
        select id_produto       id,
               nm_produto       produto,
               ds_produto       descricao,
               ds_categoria     categoria,
               qtd_produto      quantidade,
               vl_preco         preco,
               img_produto      imagem,
               id_usuario       usuario
         from tb_produtos
         where id_produto = ?;
    `

    let resposta = await con.query(comando, [id]);
    let registros = resposta[0][0];

    if (registros.imagem != null) {
        registros.imagem = registros.imagem.toString();
    }

    return registros;
}


export async function consultarProdutosPorCategoria(categoria) {
    const comando = `
        select id_produto       id,
               nm_produto       produto,
               ds_produto       descricao,
               ds_categoria     categoria,
               qtd_produto      quantidade,
               vl_preco         preco,
               img_produto      imagem,
               id_usuario       usuario
         from tb_produtos
         where ds_categoria = ?;
    `

    let resposta = await con.query(comando, [categoria]);
    let registros = resposta[0][0];

    if (registros.imagem != null) {
        registros.imagem = registros.imagem.toString();
    }

    return registros;
}

export async function alterarProduto(id, produto) {
    const comando = `
    update tb_produtos
    set id_produto = ?,
        nm_produto = ?,
        ds_produto = ?,
        ds_categoria = ?,
        qtd_produto = ?,
        vl_preco = ?,
        img_produto = ?,
        id_usuario = ?
    where id_produto = ?
`;

    let resposta = await con.query(comando, [produto.nome, produto.descricao, produto.categoria, produto.quantidade, produto.preco, produto.imagem, id]);

    let info = resposta[0];

    return info.affectedRows;

}

export async function removerProduto(id) {
    const comando = `
    delete from tb_produtos
    where id_produto = ?
    `;

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}