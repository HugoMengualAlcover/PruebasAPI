const mongoose = require('mongoose');
const URI = 'mongodb+srv://casa:casa@cluster0.z8lawej.mongodb.net/test';

mongoose.connect(URI)
.then(db => console.log('DB connected'))
.catch(err => console.log(err));

module.exports = mongoose;
