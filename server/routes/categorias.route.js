const express = require('express')
const categoriaCtrl = require('../controllers/categoria.controller');
const router = express.Router();

router.get('/', categoriaCtrl.getCategorias);

module.exports = router;