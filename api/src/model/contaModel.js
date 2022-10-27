const connection = require('../../database/connection');

//Listar todas as contas bancaria do banco de dados
const getAll = async()=>{
    const [contas] = await connection.execute (`SELECT * FROM conta`);
    return contas;
}

//Buscar uma conta pelo nome 
const getNome = async(conta)=>{
    const {proprietario} = conta
    const query = `SELECT * FROM bd_caixa.conta WHERE proprietario = ?`
    const select = await connection.execute(query,[proprietario])

    return select;
}

//Metodo para buscar uma conta pelo id
const getId = async(id)=>{
    const {codigo} = id

    const query = `SELECT * FROM conta WHERE codigo = ?`
    const select = await connection.execute(query,[id])

    return select[0];
}

//Metodo para criação uma conta bancaria
const createConta = async(conta)=>{
    const {proprietario, tipo} = conta;
    

    const query = `INSERT INTO conta (codigo,proprietario, tipo) VALUES (?,?)`;

    return createdConta = await connection.execute (query, [ proprietario, tipo]);

}

//Metodo para atualizar uma conta bancaria 
const updateConta = async(id, conta)=>{

    const {codigo,proprietario, tipo} = conta;

    const query = `UPDATE conta SET proprietario = ?, tipo = ? WHERE codigo = ?`
    
    return updatedConta = await connection.execute(query,[proprietario,tipo,codigo])
}

//Metodo para deletar uma conta bancaria 
const deleteConta = async(id)=>{
    const {codigo} = id
    const query = `DELETE FROM conta WHERE codigo = ?`

    const removedConta = await connection.execute(query,[id])

    return removedConta;
}
module.exports={
    getAll,
    getId,
    getNome,
    createConta,
    updateConta,
    deleteConta

}