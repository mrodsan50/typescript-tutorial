//Los enum puedes obtener el valor inverso con numeros con int no
enum dia{
    Lunes="D1",
    Martes=1
}
console.log(dia.Lunes);
console.log(dia[1]);
enum ESTADOPEDIDOS{
    PENDIENTES,ENPROCESOS,REPARTOs,ENTREGADOS
}
//Problema te guarda la posicion no el valor por lo que si se guarda en algun sitio y se modifica ese enum el valor no coincidira con el mismo
let estad:ESTADOPEDIDOS=ESTADOPEDIDOS.REPARTOs;

console.log(estad);
//Esto no ocurriria en los enum con type =>esta en la parte de objetos
