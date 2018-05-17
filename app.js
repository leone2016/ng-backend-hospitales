// requires (importa librerias de terceros para que funcione)

var express = require ('express');
var mongoose = require ('mongoose');
var bodyParser = require('body-parser');
//=====================
// inicializar variables
//=====================

var app = express();


//=====================
// body parser
//=====================

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//=====================
// Escuchar peticion
//=====================
app.listen(3000,() => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m',' online');

});


//============================
// conexion a la base de datos
//============================
// aunque no exista la base, mongo la crea
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (error, res )=>{
    if(error) throw error;

    console.log('BASE DE DATOS : \x1b[32m%s\x1b[0m',' online !');
});


//=====================
//=====================
// Importar Rutas
//=====================
//=====================
var appRoutes = require('./routes/app.js');
var usuarioRoutes = require('./routes/usuario.js');
var loginRoutes = require('./routes/login.js');
app.use('/',appRoutes); // http://localhost:3000
app.use('/usuario',usuarioRoutes);// http://localhost:3000/usuario
app.use('/login',loginRoutes);// http://localhost:3000/login

