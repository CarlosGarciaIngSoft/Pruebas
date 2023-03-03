const speakeasy = require('speakeasy')// constante que mantiene el valor entre ambos programas

var verify= speakeasy.totp.verify({ //variable booleana para checar que los datos son correctos
    secret: 'OVYTKSLLJE6CGUB6PE2WWL3BPFRUESR6JN2WKWZTN5PHKJJRPEZQ',//valor autogenerado en el creador de la verificacion
    encoding: 'base32', //tipo de codificado necesario para su decodificacion
    token: '605168' //token actual, necesario de modificar por el autogenerado para la prueba
})
console.log(verify) //imprime si el valor de bool coincide con lo esperado true or false

if(verify==true)
{
    console.log("Felicidades, si eres tu ") // mensaje de confirmacion, autenticacion validada
}
else 
{
    console.log("No te conozco ") // mensaje de denegacion de acceso
}