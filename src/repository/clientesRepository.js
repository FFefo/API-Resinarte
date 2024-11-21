import con from './connections.js'

export async function inserirCliente(cliente) {
    const comando = `
    insert into tb_produtos(nome, idade, telefone, email, cep)
                     values(?, ?, ?, ?, ?);
    `;

    let resposta = await con.query(comando, [cliente.nome, cliente.idade, cliente.telefone, cliente.email, cliente.cep]);
    let info = resposta[0];

    return info.insertId;
}

export async function consultarCliente() {
    const comando = `
        select id_cliente       id,
               nome             nome,
               idade            idade,
               telefone         telefone,
               email            email,
               cep              cep
         from tb_clientes
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}

export async function alterarCliente(id, cliente) {
    const comando = `
    update tb_clientes
    set nome = ?,
        idade = ?,
        telefone = ?,
        email = ?,
        cep = ?,
    where id_cliente = ?
    `;

    let resposta = await con.query(comando, [cliente.nome, cliente.idade, cliente.telefone, cliente.email, cliente.cep, id]);

    let info = resposta[0];

    return info.affectedRows;

}

export async function removerCliente(id) {
    const comando = `
    delete from tb_clientes
    where id_cliente = ?
    `;

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}