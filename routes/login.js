var express = require ('express');
var bcrypt = require ('bcryptjs');
var jwt = require ('jsonwebtoken');
var app = express();
var Usuario = require ('../models/usuario.js');
var SEED = require('../config/config').SEED;
//las rutas de la url se declaran en app.js
app.post('/',(req,res)=>{

    var body = req.body;
    Usuario.findOne({email:body.email},(err,usuarioDB)=>{
        if(err){
            return res.status(500).json({
                ok:false,
                mensaje:'Error al buscar usuarios ',
                errors:err
            });
        }
        if(!usuarioDB){
            return res.status(400).json({
                ok:false,
                mensaje:'Credenciales no validas -email',
                errors:{message:"not info"}
            });
        }

        if(!bcrypt.compareSync( body.password, usuarioDB.password )){
            return res.status(500).json({
                ok:false,
                mensaje:'Credenciales no validas -pss ',
                errors:err
            });
        }
        // crear un token
        usuarioDB.password=":-)"
        var token = jwt.sign({usuario:usuarioDB},SEED,{ expiresIn: 14400 });//4 horas

        res.status(200).json({
            ok:true,
            usuario:usuarioDB,
            token:token,
            id:usuarioDB._id
        });
    });
    // test
    // res.status(200).json({
    // ok:true,
    // body:body
    // });
});




module.exports = app;