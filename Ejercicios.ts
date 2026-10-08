//Ejercicio 1
const NOMBRE_CENTRO:String="IES Los Alcores"
const CICLO:String="Desarrollo de Aplicaciones Multiplataforma"
const PLAZAS:number=30
let matriculados:number=26
console.log(NOMBRE_CENTRO+"-"+CICLO);
console.log("Matriculados: "+matriculados+" de "+PLAZAS);
console.log("Plazas libres: "+(PLAZAS-matriculados));
matriculados+=2;
console.log("Tras dos altas -> "+matriculados+", "+(PLAZAS-matriculados));
console.log("Ocupacion: "+((PLAZAS/(matriculados))*100));



const grupo={} 