const express = require('express')
const seriesCtrl = require('../controllers/serie.controller')
const router = express.Router();

//EndPoints
router.get('/',seriesCtrl.getSeries);
router.get('/serie/:id', seriesCtrl.getSerie);
router.put('/update/:id',seriesCtrl.updateSerie);
router.post('/', seriesCtrl.addSerie);
router.delete("/:id", seriesCtrl.deleteSerie);

module.exports = router;