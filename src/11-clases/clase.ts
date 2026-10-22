class Coche{
    marca:string;
    modelo:string;
    km:number;
    color:string;

    constructor(marca:string,modelo:string,km:number,color:string){
        this.marca=marca;
        this.modelo=modelo;
        this.km=km;
        this.color=color;
    }
    
    toString(){
        console.log(`${this.marca} ${this.modelo} ${this.km} ${this.color}`);
        
    }
}

let cochesssssss=new Coche("Seat","toledo",220000,"gris")
cochesssssss.toString()
//Crear un objeto mas rapido esto crea tanto atributos como constructor, herencia tambien coin extends
class cochecorto{
    constructor(public marca:string,public modelo:string,public km:number, public color:string){}
    get getMarca(){
        return this.marca
    }
    set setMarca(marca:string){
        this.marca=marca;
    }
}
class cochecito extends cochecorto{
    constructor(public tamanio:string,marca:string,modelo:string,km:number,color:string){
        super(marca,modelo,km,color);
    }
}
//metodos estaticos

class utilidades{
    static suma(a:number,b:number){return a+b}

}
let res= utilidades.suma(1,2)
console.log(res);
//Se puede hacer lo que te salga de los cojones peroq ue funcione ya sea static no static todo junto todo separado