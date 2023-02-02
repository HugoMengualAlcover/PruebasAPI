const mongoose = require('mongoose');
const {Schema} = mongoose;

const categoriaSchema = new Schema({
    nombre: {type: String, required: true},
    url: {type: String, required: true}
});

module.exports = mongoose.model('Categoria', categoriaSchema, 'categorias');