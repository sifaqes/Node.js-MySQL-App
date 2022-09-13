# Node.js-MySQL-App
Aplicaccion de web Backend Node.js con base de datos Mysql 

# Requisitos Packages
1-Abre el terminal de visual studio code, sin olvidar de descargar la aplicaccion de Node.js si tu OS es windows or Linux

    npm i express express-handlebars express session mysql express-mysql-session morgan bcryptjs passport passport-local timeago.js connect-flash express-validator  

2-Package Nodemon es un modulo de dessarollo 

    npm i nodemon -D
# Instalaciones

1 Crear Carpitas en el terminal:

    mkdir src
    cd src
    mkdir lib,public,routes,views

2 Despues crear 3  archivos en src/ son: 
    index.js 
    database.js 
    keys.js

3 despues vamos a crear nuestro servidor, llamamos a express y morgan y escribimos el codigo seguiente:

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


4 despues valor a la carpita principal con la funccion

    cd ..

5 Despues vamos a  arancar el sevidor, pero tenemos que difinir la funccion de start se llama "dev", en package.json cambiamos  el scripts test al seguiente:

    "dev": "nodemon src/index.js"

6 Ahora en el terminal nos ponemos 

    npm run dev

Enlace de  arrancar el Servidor [Localhost:4000](http://localhost:4000/)

![image](https://github.com/sifaqes/Node.js-MySQL-App/blob/main/figura1.GIF)

7 despues creamos en "src/router" un archivo "index.js", y colocamos el codego seguiente:

### /src/routes/index.js
    // Bibtioticas
    const express = require('express');

    const router = express.Router();
    router.get('/', (req, res) => {
        res.send('Hola Mundo, Salam Alikum');
    });
    module.exports = router;

### /src/index.js

    // Routas
    app.use(require('./routes'))

Resultado que nos sale un mensaje de hola mundo, pero  en nuestro caso vamos a programar con html pero no puro, por eso necesitamos uzar handlebars.

![image](https://github.com/sifaqes/Node.js-MySQL-App/blob/main/figura2.GIF)







