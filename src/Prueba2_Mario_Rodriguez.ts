import { log } from "console";

interface Facturable {
    calcularImporte(): number;
    ficha(): string;
}
enum EstadoReparacion { REC = "Recibida", REP = "Reparacion", TERM = "terminada", ENTR = "entregada" }
abstract class Reparacion implements Facturable {
    constructor(public readonly id: number, public cliente: String, public modelo: string, public estado: EstadoReparacion) {
    }
    cambiarEstado(estado: EstadoReparacion): void {
        this.estado = estado;

    }
    abstract calcularImporte(): number;
    ficha(): string {
        return `#${this.id} ${this.cliente} - ${this.modelo} - ${this.calcularImporte()}€ - ${this.estado}`;
    }

}

class ReparacionPantalla extends Reparacion {
    constructor(private precioPieza: number, private urgente: boolean, id: number, cliente: String, modelo: string, estado: EstadoReparacion) {
        super(id, cliente, modelo, estado);
    }
    override calcularImporte(): number {
        return this.urgente === true ? this.precioPieza + 30 + 15 : this.precioPieza + 30;
    }
    override ficha(): string {

        return this.urgente === true ? `${super.ficha()} URGENTE` : `${super.ficha()}`;
    }


}

class GestionTaller {
    private static reparaciones: Reparacion[] = []
    private static ultimold: number = 0

    static registrar(cliente: string, modelo: string, precioPieza: number, urgente: boolean): Reparacion {
        this.ultimold++;

        let repaux: ReparacionPantalla = new ReparacionPantalla(precioPieza, false, this.ultimold, cliente, modelo, EstadoReparacion.REC)
        this.reparaciones.push(repaux);
        return repaux;
    }
    static listar(): Reparacion[] {
        return [...this.reparaciones];

    }
    static buscar(id: number): Reparacion | undefined {
        return this.reparaciones.find((m) => m.id == id);
    }
    static cambiarEstado(id: number, nuevo: EstadoReparacion): boolean {
        let aux: Reparacion | undefined = this.buscar(id);

        if (aux != undefined) {
            aux.estado = nuevo;
            return true;
        } else {
            return false;

        }


    }
    static porEstado(estado: EstadoReparacion): Reparacion[] {
        return [...this.reparaciones].filter((m) => m.estado === estado);

    }
    static totalFacturado(): number {
        let num: number = 0;
        this.reparaciones.forEach((m) => m.estado === EstadoReparacion.ENTR ? num += m.calcularImporte() : num += 0)
        return num;

    }
}

GestionTaller.registrar("Ana", "Iphone 13", 95, false);
GestionTaller.registrar("Luis", "Galaxy S22", 120, true);
GestionTaller.registrar("Marta", "Pixel 7", 80, false);
GestionTaller.listar().forEach((m)=>console.log(m.ficha()));
GestionTaller.cambiarEstado(1, EstadoReparacion.ENTR)
console.log(GestionTaller.buscar(1)?.ficha());

GestionTaller.cambiarEstado(2, EstadoReparacion.REP)
console.log(GestionTaller.buscar(2)?.ficha());
GestionTaller.cambiarEstado(3, EstadoReparacion.TERM)
console.log(GestionTaller.buscar(3)?.ficha());
GestionTaller.cambiarEstado(9, EstadoReparacion.TERM)
console.log(GestionTaller.buscar(9)?.ficha());
//GestionTaller.cambiarEstado(9,EstadoReparacion.perdida) El error es: Property 'perdida' does not exist on type 'typeof EstadoReparacion'.
console.log(`En reparacion: ${GestionTaller.porEstado(EstadoReparacion.REP).length}`);
console.log(`En Terminadas: ${GestionTaller.porEstado(EstadoReparacion.TERM).length}`);
console.log(`Total facturado: ${GestionTaller.totalFacturado()}`);
console.log(`Buscar #3 ${GestionTaller.buscar(3)?.ficha()?? "No existe"}`);
console.log(`Buscar #3 ${GestionTaller.buscar(7) ?? "No existe"}`);





