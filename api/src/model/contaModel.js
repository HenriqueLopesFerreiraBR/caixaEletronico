const connection = require('../../database/connection');

const getAll = async()=>{
    const [contas] = await connection.execute (`SELECT * FROM conta`);
    return contas;
}

const getNome = async(proprietario)=>{
    const {proprietario} = conta

    const query = `SELECT * FROM conta WHERE proprietario = ?`
    const select = await connection.execute(query,[proprietario])

    return select[0];
}
const getId = async(id)=>{
    const {codigo} = id

    const query = `SELECT * FROM conta WHERE codigo = ?`
    const select = await connection.execute(query,[id])

    return select[0];
}

const createConta = async(conta)=>{
    const {codigo,proprietario, tipo} = conta;
    

    const query = `INSERT INTO conta (codigo,proprietario, tipo) VALUES (?,?)`;

    return createdConta = await connection.execute (query, [ proprietario, tipo]);

   // return createdConta;
}

const updateConta = async(id)=>{

}

const deleteConta = async(id)=>{
    const {codigo} = id
    const query = `DELETE FROM conta WHERE codigo = ?`

    const removedConta = await connection.execute(query,[id])

    return removedConta;
}
module.exports={
    getAll,
    getId,
    createConta,
    updateConta,
    deleteConta
}