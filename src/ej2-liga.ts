type Equipo = {
  nombre: string;
  ganados: number;
  empatados: number;
  perdidos: number;
};

let e1 = { nombre: "Atletico Sur", ganados: 5, empatados: 2, perdidos: 1 };
let e2 = { nombre: "Deportivo Norte", ganados: 6, empatados: 0, perdidos: 2 };
let e3 = { nombre: "union Centro", ganados: 3, empatados: 3, perdidos: 2 };
let e4 = { nombre: "Real Este", ganados: 2, empatados: 1, perdidos: 5 };

let liga: Equipo[] = [e1, e2, e3, e4];
let c:Equipo[]=liga.map((m)=>m);
function puntos(equipo: string) {
  let sum = 0;
  let e=liga.find((f)=>f.nombre===equipo)
  return e ? (sum = e.empatados + e.ganados * 3) : 0;
}

liga.forEach((e) => console.log(e.nombre, " - ", puntos(e.nombre)));
c.sort((a,b)=>puntos(b.nombre)-puntos(a.nombre));
console.log("Primer equipo del array original: ",liga[0].nombre," | 1er ordenado: ",c[0].nombre);