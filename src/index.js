// Bibtioticas
const express = require('express');
const morgan = require('morgan')
    // Inicializacion
const app = express();
// settings
app.set('port', process.env.POR || 4000);

//middleweres
app.use(morgan('dev'));
//Global variables

// Routas
app.use(require('./routes'))
    //Public

//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})