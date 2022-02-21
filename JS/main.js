alert("A continuacion dele click en Aceptar para ver el contenido")
const contenido = document.getElementById("contenido");
let nombre = "Lady Mishell Gauin Gusñay ";
let edad = 19;
let meses = "Mayo";

let mes =["febrero","abril","julio","diciembre","junio"];

addContent(`<h2>${nombre}</h2><h3>${meses}</h3><h4>${edad}</h4>`);


for(let i = 0; i<mes.length; i++){
    addContent(`<h3>mi mes preferido es ${mes[i]}</h3>` );
}


//for(let i = 6; i<=10; i++){
//    addContent(`<h3>la edad es de ${i} años</h3>` );`<h3>la edad es de ${i}</h3>` ;
//}


function addContent(newContent){
    contenido.innerHTML += newContent;
}
//let condition = true; 

//if(edad > 18){
    //alert("puedes ingresar");
//}else if(edad>13){
    //alert("puedes entrar con un adulto");
//}else{
    //alert("no puedes entrar");
//}

//const COLOR_ROJO = "#FF000";

//let resultado = "nombre: " + nombre;

//console.log(nombre);

//alert("Nombre: "+ nombre);

//nombre = "lady Mishell Gauin Gusñay";

//console.log(nombre);


//alert( nombre);