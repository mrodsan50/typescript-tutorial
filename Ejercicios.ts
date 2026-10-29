//Ejercicio12

class Expediente {
    constructor(readonly numero: number, public nombre: string, private notas: number[] = []) { }
    private static creados: number = 0;
    static registrar(nombre: string) {
        this.creados++;
        return new Expediente((1000 + this.creados), nombre);
    }

    static get total() {
        return this.creados;
    }
    anadirNota(nota: number) {
        nota > 10 || nota < 0 ? new Error((`Nota fuera de rango: ${nota}`) ): this.notas.push(nota);

    }
    get media():number {
        let m: number = 0;
        this.notas.forEach((n: number) => (m += n))
        m /= this.notas.length;
        return m === 0 ? 0 : m;

    }

    get calificacion():string {
        return this.media >= 9 ?"Sobresaliente" : this.media >= 7 ? "Notable" : this.media >= 5 ? "suficiente" : "insuficiente";


    }
    get historial():number[] {
        return [...this.notas];
    }

}

const ana:Expediente=Expediente.registrar("Ana Serrano");
const luis:Expediente=Expediente.registrar("Luis Gil");
ana.anadirNota(8);
ana.anadirNota(9.5);
ana.anadirNota(7);
luis.anadirNota(4);

console.log(`Espediente ${ana.numero} - ${ana.nombre} \nNotas: ${ana.historial.join(", ")}\nMedia ${ana.media.toFixed(2)} ${ana.calificacion}`);
console.log(`Espediente ${luis.numero} - ${luis.nombre} : ${luis.calificacion}`);








