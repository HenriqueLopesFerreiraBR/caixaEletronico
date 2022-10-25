const contaModel = require("../model/contaModel");

const getAll = async (req, res) => {
  try {
    const contas = await contaModel.getAll();

    return res.status(200).json(contas);
  } catch (error) {
    return res.status(401).json({ mensage: error });
  }
};

// Pegar um conta pelo Id
const getId = async (req, res) => {
  const { id } = req.params;

  const conta = await contaModel.getId(req.params.id);

  return res.status(200).json(conta);
};

const getNome = async (req, res) => {
    const {proprietario} = req.body;

    const conta = await contaModel.getNome(req.body);
  
  return res.status(200).json(conta);
};

const createConta = async (req, res) => {
  try {
    const conta = await contaModel.createConta(req.body);

    return res.status(201).json(conta);
  } catch (error) {
    return res.status(401).json({ mensage: error });
  }
};

const updateConta = async (req, res) => {};

const deleteConta = async (req, res) => {
  const { id } = req.params;

  const conta = await contaModel.deleteConta(id);

  return res.status(202).json({ message: "usuario deletado" });
};

module.exports = {
  getAll,
  getId,
  getNome,
  createConta,
  deleteConta,
};
