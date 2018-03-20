// requires (importa librerias de terceros para que funcione)

var express = require ('express');
var mongoose = require ('mongoose');
//=====================
// inicializar variables
//=====================

var app = express();

//=====================
// Escuchar peticion
//=====================
app.listen(3000,() => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m',' online');

});

//=====================
// Rutas
//=====================

// .get porque es la peticion qe se necesita Cannot GET /
app.get('/',(req,res,next)=>{

    res.status(200).json({
       ok:true,
        mensaje:'peticion realizada correctamente'
    })
});


//============================
// conexion a la base de datos
//============================
// aunque no exista la base, mongo la crea
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (error, res )=>{
    if(error) throw error;

    console.log('BASE DE DATOS : \x1b[32m%s\x1b[0m',' online !');
})

