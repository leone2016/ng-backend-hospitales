
var express = require ('express');
var app = express();

//=====================
// Rutas aqui se especifica la ruta principal
//=====================

// .get porque es la peticion qe se necesita Cannot GET /
app.get('/',(req,res,next)=>{

    res.status(200).json({
    ok:true,
    mensaje:'peticion realizada correctamente'
})
});
// importante para utilizar fuera de un archivo en particular ** module.exports
module.exports = app;