const clienteModel = require('../model/clienteModel');

const getAll = async (req,res)=>{
    try {
        const clientes = await clienteModel.getAll();
        return res.status(200).json(clientes);
    } catch (error) {
        return res.status(400).json(error)
    }
}

const getId = async (req, res) =>{
    try {
        //const id = { "id" : req.params.id}

        const cliente = await clienteModel.getId(req.params.id);

        return res.status(201).json(cliente);

    } catch (error) {
        return res.status(401).json(error);
        
    }
}

const createCliente = async (req,res)=>{
    try {
        const cliente = await clienteModel.createCliente(req.body);

        return res.status(202).json(cliente);
        //return res.status(201).json(user);

    } catch (error) {
        return res.status(402).json({ mensage: error });
    }
}

const updateCliente = async (req,res)=>{

    try {
        const id = req.params.id

        const cliente = await clienteModel.updateCliente(id,req.body);
        
        return res.status(203).json({message:"Cliente atualizado com sucesso"});
    } catch (error) {
        return res.status(403).json(error);
    }
}

const deleteCliente = async (req,res)=>{
    try {
        const cliente = clienteModel.deleteCliente(req.params.id);

        return res.status(205).json({message:`cliente deletado`});
    } catch (error) {
        return res.status(405).json(error);
    }
}

module.exports = {
    getAll,
    getId,
    createCliente,
    updateCliente,
    deleteCliente
}