const mongoose = require('mongoose');
const {Schema} = mongoose;

const serieSchema = new Schema({
    nombre: {type: String, required: true},
    url: [{type: String, required: true}],
    numeroCapitulos: {type: Number, required: true},
    sinopsis: {type: String, required: true},
    puntuacion:[
        {
            email: {type:String, required: true},
            puntuacion: {type: Number, required: true}
        }
    ],
    year: {type: Number, required: true},
    categorias: [{type:String, required: true}]
});

module.exports = mongoose.model('Serie', serieSchema, 'series');