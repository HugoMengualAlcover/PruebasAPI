const mongoose = require('mongoose');
const {Schema} = mongoose;

const serieSchema = new Schema({
    nombre: {type: String, required: true},
    url: [{type: String, required: false}],
    numeroCapitulos: {type: Number, required: true},
    sinopsis: {type: String, required: true},
    puntuacion:[
        {
            email: {type:String, required: false},
            puntuacion: {type: Number, required: false}
        }
    ],
    year: {type: Number, required: true},
    categorias: [{type:String, required: true}]
});

module.exports = mongoose.model('Serie', serieSchema, 'series');