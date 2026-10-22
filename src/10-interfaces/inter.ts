type Em=`${string}@${"gmail"|"hotmail"|"outlook"}.${"es"|"com"}`
interface Us{
    id:number,
    n:string,
    email:Em,


}

let us1:Us={id:1,n:"M",email:"ebuobeebi@gmail.com"}
//para las interfaces existe el extends no es con la union
interface ep extends Us{
    Nuss:number,
    edad:number
}
//En vez de hacer extends puedes crear una interfaz y crear usuario otra vez y añadir nuevas, mejor añadir en la primera
//Permiten añadir funciones, mas concretamente la estructura