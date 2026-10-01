type Usuarios = { nombre: string; direccion?: { ciudad: String } };//Operador de acceso seguro permite escribir undefined wl operador es?
//Serviria si uno de los usuarios tiene propiedad undefined para que no de error
const ul: Usuarios = { nombre: "Ana", direccion: { ciudad: "Cádiz" } };
const u2: Usuarios = { nombre: "Luis" };
console.log(`Dirección de Ana ${ul.direccion?.ciudad || "no se conoce"}`);
console.log(`Dirección de Jose ${u2.direccion?.ciudad || "no se conoce"}`);
//Poner ?? concatena como un + o un ||, el || es mas restrictivo coge cualquier valor que considere 0 como espacios o 0,as restrictivo y el ?? no escribe si es un undefined o null solamente
//si la variable es null con ? la pilla si no pones el ? da error

let nom: String | null = null;
//Fuerza obligatoriamente a que se ejecute, hace que el sistema confie en que nunca es nulo con ! comop con ?

//Ternaria condicion ? valor verdadero : valorFalso
let edade: number = 18;
console.log(`Jose es: ${edade >= 18 ? "mayor de edad " : "es menor de edad"}`)

//Propagacion ... se usa : ...+NombreACopiar y creas por ejemplo un array copiado de otro al que cupedes añadirle cosas sin modificar el otro si lo haces
//Si haces el cambio depues por ejemplo let persona= nombre:Juan copias y luegop lo cambiar a jose no se cambiaria la copia
//En cambio si metieras los objetos en un array y luego copiaras ese array si cambiaria si haces lo anterior de cambiar los nombres
let numeros = [1, 2, 3, 4, 5]
let copias = [...numeros, 6];
//Si es un objewto habria que poner el nombre donde guardar la propiedad nombre : y añadir la variable nombre donde guardar la propiedad, nombre:variableNombre
let [primero, segundo, tercero, cuarto, quinto, sexto] = copias;

console.log(primero);
console.log(sexto);
//Diferencias de for of te devuelve el valor con el in es el valor del indice
let array = [1, 2, 3, 4, 5]
for (const valor of array) {// igual pero cambiando of por if

}
//Creacion de arrays, si no lo declaras en la propia declaración automaticamente se coge los tipos , cantidad(Bidimensional,tri,etc) o incluso varios tipos
let arrays: number | String[][];//SI se le ponen parentesis puedes almacenar los dos tipos en el mismo, si no es o uno u otro
let arrayintrinseco = [[1, 2, "hola"], ["paco", 2, "juan"]];
//Para hacer una copia de objetos sijn modificar los valores en un for of y haces dentro del mismo arrayCopia.push({...p}) siendo p la variable del for
//Lo del documentes pos igual en el primer caso los dos arrays escriben desde el mismo documento en el segundo 
//structuredClone hace lo mismo que el for let etc= ESTRUCTURE(personas)
/**
 * Metodos array. 
 * push mete al final
 * pop obtiene el numero en la posicion
 * shift quita el primero
 * unshift 
 * length la cantidad de elementos empieza en 0 por lo que la ultima es lenght-1
 * Buscar elementos
 * 
 * las siguientes son funciones callback, reciben otra funcion como parametro
 * Buscar informacion
 * Index of posicion del elemento del array index of(4) no te devuelve el 4 te devuelve el 5 si es un array del 1 al 5, te devuelve -1 si no encuentra
 * find index 
 * find busca el elemento que cumpla una condicion
 * Manipular datos
 * map
 * foreach
 * reduce
 * 
 */
console.log(numeros.find((valor: number) => { return valor > 2 }));
//El findindex lo mismo pero el indice de quien es el primero en cumplirlo 
console.log(numeros.findIndex((valor: number) => { return valor > 2 }));
//haces una funcion para cada valor del array, no se guarda en el array lo que se haga
numeros.forEach((valor: number) => {
    console.log(valor);
}) 
//Map si modifica los valores

console.log(numeros.map((num:number)=>{return num=88}));
//.filter filtra para encontrar por el filtrado 

