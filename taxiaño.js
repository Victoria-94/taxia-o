'use strict'
function validarTaxi(automovil){
    let anioActual= 2023;
    let years;
    years= anioActual-automovil.anio
    if (years <=10){
        return true
    } else{ return false }
}
let automovil={

    anio: 2023, 
    color: "rojo", 
    Nplaca: "XBA6789",
    nchasis: "JDJRJ1212",
    marca: "kia_picanto",
}
let result=validarTaxi(automovil);
// llamar la funcion
alert("el resultado de la evaluacion del traxi fue: " + result);
