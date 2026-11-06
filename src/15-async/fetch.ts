async function getDatos():Promise<Post>{
    const URL="https://jsonplaceholder.typicode.com/posts/1";
   let response:Response= await fetch(URL);

   let data= (await response.json() as Post)//Espera a que regrese el contenido y devuelve un json en string
return data;

}

getDatos().then((d:Post)=>{console.log(d.title)}).catch((e:Error)=>console.log(e))


interface Post{
    userId:number
    id:number
    title:string
    body:string
}

async function getPost():Promise<Post[]>{
    const URL="https://jsonplaceholder.typicode.com/posts";
   let response:Response= await fetch(URL);

   let data= (await response.json() as Post[])//Espera a que regrese el contenido y devuelve un json en string
return data;

}

getPost().then((d:Post[])=>{console.log(d)}).catch((e:Error)=>console.log(e))