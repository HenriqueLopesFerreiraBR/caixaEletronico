const connection = require('../../database/connection');

const getAll =async ()=>{
    const query = `SELECT * FROM cliente`;
    
    const [clientes] = await connection.execute(query);
    return clientes;

}

const createCliente = async (cliente)=>{
    const {nome, data_nasc, cpf, endereco} = cliente;

    const query = `INSERT INTO cliente (nome, data_nasc, cpf, endereco) VALUES (?,?,?,?)`;

    return createdCliente = await (query,[nome, data_nasc, cpf, endereco]);

}


module.exports = {
    getAll,
    createCliente
}