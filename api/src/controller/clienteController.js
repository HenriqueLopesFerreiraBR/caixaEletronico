const clienteModel = require('../model/clienteModel');


const getAll = async (req,res)=>{
    try {
        const clientes = await clienteModel.getAll();
        return res.status(200).json(clientes);
    } catch (error) {
        return res.status(400).json(error)
    }
}

const createCliente = async (req,res)=>{
    try {
        const user = req.body;

        const Cliente = await clienteModel.createCliente(user);
        return res.status(201).json({ mensage: "Cliente cadastrado com sucesso" });

    } catch (error) {
        return res.status(401).json({ mensage: error });
    }
}

module.exports = {
    getAll
}