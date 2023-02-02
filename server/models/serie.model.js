const mongoose = require('mongoose');
const {Schema} = mongoose;

const serieSchema = new Schema({
    nombre: {type: String, required: true},
    url: {type: String, required: true},
    numeroCapitulos: {type: String, required: true},
    sinopsis: {type: String, required: true},
    puntacion: {type: Float32Array, required: true},
    year: {type: Number, required: true},
    generos: [{type: String, required: true, default: null}]
});

module.exports = mongoose.model('Serie', serieSchema, 'series');