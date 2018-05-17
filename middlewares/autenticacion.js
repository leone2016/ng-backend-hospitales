
var jwt = require ('jsonwebtoken');
var SEED = require('../config/config').SEED;

//===========================
// verificar token
//===========================
// el token se puede enviar por los url o por el header
exports.verficaToken = function (req,res,next){

    var token = req.query.token;
    jwt.verify( token, SEED, (err, decode )=>{
        if(err){
            return res.status(401).json({
                ok:false,
                mensaje:'Unauthorize,  ivalid Token ',
                errors:err
            });
        }

        req.usuario = decode.usuario;
         next(); // continua a las siguientes funciones de abajo
        // return res.status(200).json({
        //     ok:true,
        //     decode:decode
        // });

} );
}




