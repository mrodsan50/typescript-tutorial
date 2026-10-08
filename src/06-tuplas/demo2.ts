//definir la estructura de cosas(objetos)
type ProductoTupla = [nombre:string,precio:number]
type Productoobject = {nombre:string,precio:number}//al declararlo da igual el orden de como lo escribas a la hora de crear un objeto
//definicion de tuplas
let pro1:Productoobject={nombre:"ll",precio:55}
let nombreEdad:ProductoTupla=["MARIO",23]//A partir de definirlo en otro sitio
let nombreEdaddef:[string,number]=["MARIO",23]//De base como lo vamos a hacer
console.log(nombreEdad[0]);
console.log(pro1.nombre);
//desestructuracion, mete los valores de una tupla en los valores

let [nombre,precio]=nombreEdad


