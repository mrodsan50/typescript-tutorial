let num: number[] = [1, 2, 3, 9, 6];

//Actua como un bucle y devuelve el valor del acumulador que se añada en el codigo
let sum = num.reduce((acc, act) => acc < act ? acc = act : acc)

console.log(sum);
//funcion sort modifica el array original si se hace solo sort y son arrays
let copi=[...num]
copi.sort((a,b)=>{return a-b})//de forma descendente b-a de forma ascendente
console.log(num);

//si no quieres modificar el array

copi.sort((a,b)=> b-a)//de forma descendente b-a de forma ascendente
console.log(copi);

//El join permite obtener un string de todos los valores del array con un separador
console.log(num.join("_"));
//slice te muestra un subarray desde el numero que pongas hasta el ultimo menos uno
console.log(num.slice(2,4));//si no e pone ningun segundo valor significa hasta el final
//tuplas 