let texto:string="Mario";
let texto2="Rodriguez"
let numerodouble:number=1.2;
let entero:number=1
let cualquiercosa:any="jose";//Esto se puede poner porque es explicita
let booleano:boolean=true;
console.log(cualquiercosa.toUpperCase());
let desconocido:unknown=3;//Hay que hacer comprobación previa
if (typeof(desconocido)==="string") {
  console.log(desconocido.toUpperCase());
}else{console.log("No es string");
}
let nda:unknown="Mario"

let nulo:string|null=null;//Para no poner un tipo string vacio "" y posteriormente asignarle valor string|null, en este caso si tiene valor el valor NULL es algo
let indefinida:undefined|string;//Lo mismo que null pero en este caso es indefinida no tiene ningun valor
//concatenación de variables
console.log("Hola "+1+1+" Mario "+`${1+1}`+" "+`${entero}`);//``se utiliza para concatenar diferentes tipos de variables por ejemplo para que no salga 11 y salga 2 o para añadir variables directamente
console.log(10**3);
//definir interfaz
interface Usuario {
  nombre:string;
  edad:number;
  dni?:string;//El usuario puede o no el dni, ? indica opcionalidad
}
let u1:Usuario={nombre:"Mario",edad:23}
