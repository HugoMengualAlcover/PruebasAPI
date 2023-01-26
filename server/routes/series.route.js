const express = require('express')
const serieCtrl = require('../controllers/movie.controller');
const router = express.Router();

router.get('/', serieCtrl.getSeries);
router.get('/movie/:id', serieCtrl.getSerie);
router.get('/movie/:id', serieCtrl.updateSerie);

router.get('/genres', serieCtrl.getGenres);

module.exports = router;