
var express = require ('express');
var bcrypt = require ('bcryptjs');

var mdAutenticacion = require('../middlewares/autenticacion');
var app = express();

var Usuario = require ('../models/usuario.js');
//=====================
// Rutas
//=====================

// .get porque es la peticion qe se necesita Cannot GET /
// 'nombre email img role' carga todos los datos menos contraseña
//===========================
// obtener todos los usuarios
//===========================
app.get('/',(req,res,next)=>{
    Usuario.find({ },'nombre email img role')
    .exec( (error, objUsuarios)=>{
                if(error){
                    return res.status(500).json({
                        ok:false,
                        mensaje:'Error en la carga de Usuarios X ',
                        errors:error
                    });
                }
                res.status(200).json({
                ok:true,
                mensaje:'Get de Usuarios !! ',
                usuario:objUsuarios
                });
    }); // esto busca todos los datos del mongo

});


//===========================
// crear un nuevo usuarios
//===========================
//-npm install body-parser --save


app.post('/',mdAutenticacion.verficaToken,(req,res)=>{
        //1.- extraemos el body
        var body = req.body;

        //guardar en mogoose
        //2.- creamos un obj usuario
        var usuario = new Usuario({
            nombre:body.nombre,
            email:body.email,
            password: bcrypt.hashSync(body.password, 10),
            img:body.img,
            role:body.role

        });

        usuario.save( (error,usuarioGuardado)=>{
            if(error){
                return res.status(400).json({
                    ok:false,
                    mensaje:'Error al crear usuario ',
                    errors:error
                });
            }


            res.status(201).json({
            ok:true,
            usuario:usuarioGuardado,
            usuarioToken: req.usuario
            });

        });

});

//================================
// actualizar usario (PUT - PATCH)
//================================

app.put('/:id', (req,res)=> {
    var id= req.params.id;
    var body = req.body;
    Usuario.findById( id,(err,usuario)=>{


        if(err){
            return res.status(500).json({
                ok:false,
                mensaje:'Error al buscar usuario',
                errors:error
            });
        }
        if(!usuario){
            return res.status(400).json({
                ok:false,
                mensaje:'el usario con el Id '+ id +  " no existe !!",
                errors:{ message:'no existe un usuario con ese id'}
            });
        }
        //obtener la data
        usuario.nombre = body.nombre;
        usuario.email = body.email;
        usuario.role = body.role;

        usuario.save ((err,usuarioGuardado)=>{
            if(err){
                return res.status(500).json({
                    ok:false,
                    mensaje:'Error al actualizar usuario',
                    errors:err
                });
            }
            usuarioGuardado.password = ":-)";
            res.status(200).json({
            ok:true,
            usuario:usuarioGuardado
        });
        });


    });
    // res.status(200).json({
    //     ok:true,
    //     id:id
    // });
});

//================================
// eliminar usuario por el id
//================================
app.delete('/:id_uss', (req,res)=>{
    var id= req.params.id_uss;
    Usuario.findByIdAndRemove(id, (err,usuarioBorrado)=>{
        if(err){
            return res.status(500).json({
                ok:false,
                mensaje:'Error al borrar usuario ',
                errors:err
            });
        }

        if(!usuarioBorrado){
            return res.status(400).json({
                ok:false,
                mensaje:'No existe un usuario con ese Id ',
                errors:{message:"not info"}
            });
        }

            res.status(200).json({
                ok:true,
                usuario:usuarioBorrado
            });
    });
});
module.exports = app;