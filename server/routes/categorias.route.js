const express = require('express')
const categoriaCtrl = require('../controllers/categoria.controller');
const router = express.Router();

router.get('/', categoriaCtrl.getCategorias);
router.get('/categoria/:id', categoriaCtrl.getCategoria);

module.exports = router;