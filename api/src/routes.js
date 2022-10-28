const express = require('express');
const router = express.Router()

const contaController = require('./controller/contaController');
const clienteController = require('./controller/clienteController');
const bancoController = require('./controller/bancoController');

const bancoMiddleware = require('./middleware/bancoMiddleware');

// Classes das contas Bancárias 
router.get('/conta', contaController.getAll);
router.get('/conta/:id', contaController.getId);
router.get('/conta-user', contaController.getNome);
router.post('/conta',contaController.createConta); 
router.put('/conta/:id',contaController.updateConta); 
router.delete('/conta/:id',contaController.deleteConta);


//Rotas dos Clientes

router.get('/cliente',clienteController.getAll);
router.get('/cliente/:id',clienteController.getId);
router.post('/cliente',clienteController.createCliente);
router.put('/cliente/:id',clienteController.updateCliente);
router.delete('/cliente/:id',clienteController.deleteCliente);


//Rotas dos bancos 
router.get('/banco',bancoController.getAll)
router.get('/banco/:id',bancoController.getId)
router.post('/banco', bancoMiddleware.validateCreateBanco, bancoController.createbanco);
router.put('/banco/:id',bancoMiddleware.validateUpdatebanco,bancoController.updatebanco);
router.delete('/banco/id',bancoController.deletebanco);

module.exports = router;