/**
 * Lo que hace la funcion, Funcion para sumar dos elementos a y b
 * @param a -primer valor de la suma
 * @param b -segundo valor de la suma
 */
//Declaracion de una funcion en TY
console.log(suma(1, 2));

//se pueden llamar antes de crearlas
function suma(a: number, b: number) {

    return a + b;
}
//anonimas
const FSUMA = function (a: number, b: number) {

    return a + b;
};
//se pueden hacer sin return y sin las {return a+b} y hacerlas directamente=> a+b pero hay problemas con objetos
//estructura (param)=>{return}
const FSUMAARROW = (a: number, b: number) => {

    return a + b;
};
console.log(FSUMA(1, 2));
//Pueden servir para funciones flecha repetitivas
//parametros opcionales
function salu2(n: string, apelido?: string) {
    console.log(apelido != undefined ? "Hola " + n + " " + apelido : "no tiene apellido");
    //si inyectas variables el ?? muestra otro mensaje en caso de que no exista, si se quiiere añadir un 3 valor pero que no salga el intermedio poner nombre,undefined,numero

    console.log(`Hola ${n} ${apelido ?? "Sin apellido"}`);


}
salu2("Mario")
//Funciones callback