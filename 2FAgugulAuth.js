const speakeasy = require('speakeasy') //paquete de instalacion speakeasy para uso del autenticador de google
const qrcode = require('qrcode') // paquete de insatalacion qrcode para crear el componente que el autenticador escanea

var secret =speakeasy.generateSecret({ // la variable secret es el codificado de los 6 digitos
    //usa tanto base 32, hex, ascii y otpauth_url como metodos de codificado
    name: "Testing" // nombre de la funcion del autenticador de google, aparece con el nombre de esta variable
})
console.log(secret) // permite ver el tipo de codificado 
qrcode.toDataURL(secret.otpauth_url, function(err,data)// crea el link de imagen del codigo qr unico
{
    console.log(data) //muestra la informacion de la imagen para agregarla a un documento .html para su escaneo
})