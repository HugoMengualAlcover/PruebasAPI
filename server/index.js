const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const {mongoose} = require('./database');
const {json} = require('express');

app.set('port', process.env.PORT || 3000);

//Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/series', require('./routes/series.route'));
app.use('/api/categorias', require('./routes/categorias.route'));
app.use('/', (req,res) => res.send('API in /api/series'));



//Start the server
app.listen(app.get('port'), () =>{
    console.log('Server on port: ', app.get('port'));
})