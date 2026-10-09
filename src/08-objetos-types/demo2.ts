import { log } from "console";

//No se puden repetir los objetos en cuanto a estructuras
let per1:Persona={nombre:"Mario"};
let per2:Persona={nombre:"Mario",edad:18};

//Definir objetos
//No hay errores en el priemro porque edad noi es obligatorio, su orden tambien da igual mientras este escrito
type Persona={edad?:number,nombre:string}
//se les puede aplicar funcioines como readonly que no se pueden modificar
type Personas={readonly dni:string, edad?:number,nombre:string}
//Esto solo funciona en la programación al pasarlo a js s eeliminaria pero nos asegura una programacion más controlada
//inser4cion de tipos, pareceido auna herencia

type Desarrollador={nuss:String,categoria:string,salario:number}//Se puede añadir &persona al objeto ya creado, no hace crear un nuevo objeto con las dos 
type Empleado=Persona&Desarrollador;//asi tiene todos los valores de ambos tipes
//Seccion de tipos usada para enum 
type Categoria="junior"| "senior"|"leader"|"project manager"
let c1:Categoria;
//esto se puede añadir a objetos
type Desarrolladores={nuss:String,categoria:Categoria,salario:number}//Solo acepta los valores creados en el enumerado

//Crear patrones
type DNI=`${string}-${string}`//tambien puede hacerse con filtro A|B etc
let dni:DNI="01111111-l"
type tURL = `https${'s'|''}://${string}.${'es'|'com'}`