//Ejercicio 1
const NOMBRE_CENTRO: String = "IES Los Alcores"
const CICLO: String = "Desarrollo de Aplicaciones Multiplataforma"
const PLAZAS: number = 30
let matriculados: number = 26
console.log(NOMBRE_CENTRO + "-" + CICLO);
console.log("Matriculados: " + matriculados + " de " + PLAZAS);
console.log("Plazas libres: " + (PLAZAS - matriculados));
matriculados += 2;
console.log("Tras dos altas -> " + matriculados + ", " + (PLAZAS - matriculados));
console.log("Ocupacion: " + (((matriculados / PLAZAS)) * 100).toFixed(1));
console.log(PLAZAS <= matriculados ? "No quedan plazas" : "Quedan plazas");

type grupo = { nombre: String, tutor: String }

const clase: grupo = { nombre: "DAM2", tutor: "Ana Serrano" };
clase.nombre="Jose Antonio Rodriguez ";
console.log("Grupo" + clase.nombre + ", tutor: " + clase.tutor);

//clase={nombre:"DAM2",tutor:"Ana Serrano"}; No se puede cambiar el objeto

//Ejercicio 2

let nota_Practica:number|null=8.5;
let nota_Examen:number|null=null;

console.log(`Examen ${nota_Examen??"sin corregir"}`);


