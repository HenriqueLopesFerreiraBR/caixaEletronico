const express = require('express');
const router = express.Router()

const contaController = require('./controller/contaController');

router.get('/conta', contaController.getAll);

router.get('/conta/:id', contaController.getId);

router.get('/conta-user', contaController.getNome);

router.post('/conta',contaController.createConta); 

router.delete('/conta/:id',contaController.deleteConta);


module.exports = router;