const connection = require('../../database/connection');

//Listar todas as bancos bancaria do banco de dados
const getAll = async()=>{
    const [bancos] = await connection.execute (`SELECT * FROM banco`);
    return bancos;
}


//Metodo para buscar uma banco pelo id
const getId = async(id)=>{

    const query = `SELECT * FROM banco WHERE id = ?`
    const select = await connection.execute(query,[id])

    return select[0];
}

//Metodo para criação uma banco bancaria
const createbanco = async(banco)=>{
    const {endereco} = banco;
    

    const query = `INSERT INTO banco (endereco) VALUES (?)`;

    return createdbanco = await connection.execute (query, [endereco]);

}

//Metodo para atualizar uma banco bancaria 
const updatebanco = async(id, banco)=>{

    const {endereco} = banco;

    const query = `UPDATE banco SET endereco = ? WHERE id = ?`
    
    return updatedbanco = await connection.execute(query,[endereco,id])
}

//Metodo para deletar uma banco bancaria 
const deletebanco = async(id)=>{
    const query = `DELETE FROM banco WHERE id = ?`

    const removedbanco = await connection.execute(query,[id])

    return removedbanco;
}
module.exports={
    getAll,
    getId,
    createbanco,
    updatebanco,
    deletebanco

}