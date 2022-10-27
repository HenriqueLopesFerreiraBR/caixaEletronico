const express = require('express');
const router = express.Router()

const contaController = require('./controller/contaController');
const clienteController = require('./controller/clienteController');

// Classes das contas Bancárias 
router.get('/conta', contaController.getAll);

router.get('/conta/:id', contaController.getId);

router.get('/conta-user', contaController.getNome);

router.post('/conta',contaController.createConta); 

router.put('/conta/:id',contaController.updateConta); 

router.delete('/conta/:id',contaController.deleteConta);


//Rotas dos Clientes

router.get('/cliente',clienteController.getAll);


module.exports = router;