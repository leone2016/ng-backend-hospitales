## NOTAS PARA EL SERVIDOR BACKEND 

* CREAR UNA CARPETA 
* LUEGO DE INGRESAR A LA MISMA DIGITAR npm init
* seguir los pasos que se muestran para la inicializacion
* instalar express  js http://expressjs.com/es/starter/installing.html 
** npm install express --save 
** npm install express

## para ejecutar la apliccacion node
* $ node app
* instalar la libreria nodemon (funciona para no tener que bajar el servidor cada que se realiza un cambio)
* agregar en package.js "scripts": {  "start": "nodemon app.js",


## Configuracion de mongodb
* instalar mongo db (mongod.exe en consola )
* instalar robo 3t  (similar a mongo compass)
* npm install mongoose --save ****  - http://mongoosejs.com/docs/index.html (para conectarse a mongo db)
* crea conexion a la base de datos en app.js

## validar email con mongoose (mas info de estos plung-in en la paguina de mongoose)

(consola) $ npm install mongoose-unique-validator --save
(models) importar en usuario.js

## Encriptar contrase?a de una sola via

https://github.com/dcodeIO/bcrypt.js
npm install bcryptjs --save

## crear un token (jsonwebToken);
* https://github.com/auth0/node-jsonwebtoken
* Install $ npm install jsonwebtoken --save
* https://jwt.io/ (visitar esta pagina, muestra como utilizar el token);

## Levantar Express
* primero levantar mongodb
** ingresar a C:\MongoDB\Server\3.4\bin
** en cmd digitar $ mongod.exe
* en el IED de desarrollo o consola digitar $ npm start

npm install body-parser --save

* ====================================================================================================================
Colores para la consola
Reset = "\x1b[0m"

Bright = "\x1b[1m"

Dim = "\x1b[2m"

Underscore = "\x1b[4m"

Blink = "\x1b[5m"

Reverse = "\x1b[7m"

Hidden = "\x1b[8m"

FgBlack = "\x1b[30m"

FgRed = "\x1b[31m"

FgGreen = "\x1b[32m"

FgYellow = "\x1b[33m"

FgBlue = "\x1b[34m"

FgMagenta = "\x1b[35m"

FgCyan = "\x1b[36m"

FgWhite = "\x1b[37m"

BgBlack = "\x1b[40m"

BgRed = "\x1b[41m"

BgGreen = "\x1b[42m"

BgYellow = "\x1b[43m"

BgBlue = "\x1b[44m"

BgMagenta = "\x1b[45m"

BgCyan = "\x1b[46m"

BgWhite = "\x1b[47m"



Ejemplo:
console.log('Node/Express: \x1b[36m%s\x1b[0m', 'online');


# HTTP/1.1 Status Codes
## Code Name Notes
* 100 Continue
* 101 Switching Protocols
## Successful
* 200 OK Everything is normal
* 201 Created
* 202 Accepted
* 203 Non-Authoritative Information
* 204 No Content
* 205 Reset Content
* 206 Partial Content
## Redirection
* 300 Multiple Choices
* 301 Moved Permanently Update your URL, this has moved for good.
* 302 Found
* 303 See Other
* 304 Not Modified
* 305 Use Proxy
* 306 Unused
* 307 Temporary Redirect This is temporarly moved, don't update your bookmarks.
## Client Error
* 400 Bad Request Server didn't understand the URL you gave it.
* 401 Unauthorized Must be authenticated
* 402 Payment Required Not used really
* 403 Forbidden Server refuses to give you a file, authentication won't help
* 404 Not Found A file doesn't exist at that address
* 405 Method Not Allowed
* 406 Not Acceptable
* 407 Proxy Authentication Required
* 408 Request Timeout Browser took too long to request something
* 409 Conflict
* 410 Gone
* 411 Lengh Required
* 412 Precondition Failed
* 413 Reqeust Entity Too Large
* 415 Unsupported Media Type
* 416 Request Range Not Satisfiable
* 417 Expectation Failed
## Server Error
* 500 Internal Server Error Something on the server didn't work right.
* 501 Not Implemented
* 502 Bad Gateway
* 503 Service Unavailable Too busy to respond to a client
* 504 Gateway Timeout
* 505 HTTP Version Not Supported

