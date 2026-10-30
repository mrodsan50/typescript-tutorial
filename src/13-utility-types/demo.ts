interface Coches {
  marca: string
  modelo: string
  color: string
}

//partial creas un typw a partir de una interfaz y los atributos son opcionales
type FormCOche = Partial<Coches>

//Permitiria crear un objeto FormCoche pero que no necesite todos los parametros

//Lo contrario a partial este lo pide siempre
type FormCoche = Required<Coches>

//Estos tipos permiten crear tipos a partir de una interfaz, si no se quiere crear un tipo intermedio se puede poner que el tipo se directamente el Required<> o el partial
//Es util para utilizar los dos required para el objeto y para editarlo utilizar el partial para un par de objetos
//El pick selecciona un tipo con los tipos que ponga un required para una cantidad concreta 
type FormCoch = Pick<Coche, "marca" | "color">
//El omit es lo contrario a pick permite crear objetos sin x atributo, 


let co: Coches = { marca: "nsjovb", color: "baujvbau", modelo: "vnsiovbsudvbsdv" }

//En ...otros datos estan todos los datos menos la marca
let { marca, ...otrosdatos } = co;
console.log(otrosdatos);

//Se puede hacer lo mismo con las clases en vez de interfaces

class juan {
  constructor(nombre: String,apellido:string ){ }
}

type juantipo=Partial<juan>