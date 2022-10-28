const connection = require('../../database/connection');

const getAll =async ()=>{
    const query = `SELECT * FROM cliente`;
    
    const [clientes] = await connection.execute(query);
    return clientes;

}

const createCliente = async (cliente)=>{
    try {
        const { nome, data_nasc, cpf, endereco} = cliente;

        const query = `INSERT INTO cliente (nome, data_nasc, cpf, endereco) VALUES (?,?,?,?)`;
    
        return createdCliente = await connection.execute(query,[nome, data_nasc, cpf, endereco]);
    } catch (error) {
        console.log(error)
    }


}

const getId = async (id) => {
    

    const query1 = `SELECT * FROM bd_caixa.cliente where id = ?`

    const selectId = await connection.execute(query,[id]);

    return selectId[0];
}

const updateCliente = async(id,cliente)=> {
    const { nome, data_nasc, cpf, endereco} = cliente;

    const query = `UPDATE bd_caixa.cliente SET nome = ?, data_nasc = ?, cpf = ?, endereco = ? WHERE (id = ?);`
    const updatedCliente = await connection.execute(query,[nome,data_nasc,cpf,endereco, id]);

    return updatedCliente;
}

const deleteCliente = async(id)=>{
    const query1 = `SELECT id FROM bd_caixa.cliente where id = ?`

    const selectId = await connection.execute(query1,[id]);

    if (selectId =! "") {
        try {
            const query = `DELETE FROM cliente WHERE id = ?`;
    
            const deletedCliente = await connection.execute(query,[id])
        
            return deletedCliente;
        } catch (error) {
            console.log(error);
        }
    } else {
        console.log('esse cliente não existe');
    }




}
module.exports = {
    getAll,
    getId,    
    createCliente,
    updateCliente,
    deleteCliente
}