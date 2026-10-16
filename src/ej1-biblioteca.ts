type Libro = {
  titulo: string;
  autor: string;
  anio: number;
  paginas: number;
  disponible: boolean;
};

let libros: Libro[] = [{
  titulo: "El Quijote",
  autor: "Cervantes",
  anio: 1605,
  paginas: 863,
  disponible: true,
}, {
  titulo: "La Regenta",
  autor: "Clarín",
  anio: 1884,
  paginas: 712,
  disponible: false,
}, {
  titulo: "Niebla",
  autor: "Unamuno",
  anio: 1914,
  paginas: 296,
  disponible: true,
}, {
  titulo: "Nada",
  autor: "Carmen Laforet",
  anio: 1945,
  paginas: 288,
  disponible: true,
}, {
  titulo: "Marianela",
  autor: "Galdós",
  anio: 1878,
  paginas: 240, disponible: false,
}];
let titulos: string[] = libros.filter((n) => n.disponible == true).map((m) => m.titulo);
console.log("Disponibles: ", titulos.join(" | "));
let pags: number[] = libros.map((m) => m.paginas);
let copia: Libro[] = libros.map((m) => ({ ...m }));
console.log("Total paginas", pags.reduce((acc, n) => acc + n, 0));

function buscarPorAutor(lista: Libro[], autor: string) {
  return lista.find((n) => n.autor === autor)?.titulo;
}
console.log("Unamuno: ", buscarPorAutor(libros, "Unamuno") ?? "No encontrado");
console.log("Lorca: ", buscarPorAutor(libros, "Lorca") ?? "No encontrado");

function prestar(lista: Libro[], titulo: string) {
  for (const e of lista) {
    e.titulo === titulo ? e.disponible = false : true;
  }
  return lista;
}

prestar(copia, "Niebla");
console.log("Viejo: ", libros[2].disponible, "Nuevo: ", copia[2].disponible);

function extremos(lista: Libro[]) {

  lista.sort((a:Libro,b:Libro)=> a.anio-b.anio)
  let viejo=lista[0].titulo;
  let nuevo=lista[lista.length-1].titulo;

  return [viejo, nuevo];
}

let [libroMasViejo, libroMasNuevo] = extremos(libros);

console.log(`El libro más antiguo es: ${libroMasViejo}`);
console.log(`El libro más reciente es: ${libroMasNuevo}`);