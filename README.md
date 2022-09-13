# Node.js-MySQL-App
Node.js MySQL App

# Requisitos Packages
1-Abre el terminal de visual studio code, sin olvidar de descargar la aplicaccion de Node.js si tu OS es windows or Linux

    npm i express express-handlebars express session mysql express-mysql-session morgan bcryptjs passport passport-local timeago.js connect-flash express-validator  

2-Package Nodemon es un modulo de dessarollo 

    npm i nodemon -D
# Instalaciones

## Crear Carpitas en el terminal:

    mkdir src
    cd src
    mkdir lib,public,routes,views

Despues crear 3  archivos en src/ son: 
    index.js 
    database.js 
    keys.js

despues vamos a crear nuestro servidor, llamamos a express y morgan y escribimos el codigo seguiente:

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

    //Public

    //Starting the server
    app.listen(app.get('port'), () => {
        console.log('Server on port', app.get('port'));
    })


despues valor a la carpita principal con la funccion

    cd ..

Despues vamos a  arancar el sevidor, pero tenemos que difinir la funccion de start se llama "dev", en package.json cambiamos  el scripts test al seguiente:

    "dev": "nodemon src/index.js"

Ahora en el terminal nos ponemos 

    npm run dev

Enlace del Servidor [Localhost:4000](http://localhost:4000/)

![image](https://github.com/sifaqes/Node.js-MySQL-App/blob/main/figura1.GIF)
