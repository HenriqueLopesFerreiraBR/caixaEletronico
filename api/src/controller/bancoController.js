const bancoModel = require('../model/bancoModel');

const getAll = async (req,res)=>{
    try {
        const bancos = await bancoModel.getAll();
        return res.status(200).json(bancos);
    } catch (error) {
        return res.status(400).json(error)
    }
}

const getId = async (req, res) =>{
    try {
        const banco = await bancoModel.getId(req.params.id);

        return res.status(201).json(banco);

    } catch (error) {
        return res.status(401).json(error);
        
    }
}

const createbanco = async (req,res)=>{
    try {
        const banco = await bancoModel.createbanco(req.body);

        return res.status(202).json(banco);

    } catch (error) {
        return res.status(402).json( error);
    }
}

const updatebanco = async (req,res)=>{
    try {
        const id = req.params.id

        const banco = await bancoModel.updatebanco(id,req.body);
        
        return res.status(203).json({message:"banco atualizado com sucesso"});
    } catch (error) {
        return res.status(403).json(error);
    }
}

const deletebanco = async (req,res)=>{
    try {
        const banco = bancoModel.deletebanco(req.params.id);

        return res.status(205).json({message:`banco deletado`});
    } catch (error) {
        return res.status(405).json(error);
    }
}

module.exports = {
    getAll,
    getId,
    createbanco,
    updatebanco,
    deletebanco
}