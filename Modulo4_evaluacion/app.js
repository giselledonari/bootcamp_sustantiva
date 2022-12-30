class Usuarios{
    constructor(){
        this.myFetch();
    }
    async myFetch(){
        return await fetch("https://jsonplaceholder.typicode.com/users")
        .then( res=> res.json())
        .then(obj=>this.data=obj)
        .catch(error=>console.log(error))
    }
    nombres(){
        this.data.map(usuario=>{return console.log(usuario.name)})
    }
    informacionBasica(){
        let nombreUsuario=prompt("Indique el nombre del usuario en normato Nombre Apellido");
        let usuario=this.data.find((data)=>{return data.name==nombreUsuario})
        if (usuario){
            console.log(`Informacion basica \n usermame: ${usuario.username} \n email: ${usuario.email}`)
        }
        else{
            console.log("Usuario no encontrado")
        }
    }
    direccion(){
        let nombreUsuario=prompt("Indique el nombre del usuario en normato Nombre Apellido");
        let usuario=this.data.find((data)=>{return data.name==nombreUsuario})
        let direccion=usuario.address
        if (usuario){
            console.log("Dirección")
            for (let i in direccion){
                console.log(i,":", direccion[i])
            }
        }
        else{
            console.log("Usuario no encontrado")
        }
    }
    informacionAvanzada(){
        let nombreUsuario=prompt("Indique el nombre del usuario en normato Nombre Apellido");
        let usuario=this.data.find((data)=>{return data.name==nombreUsuario})
        if (usuario){
            let text=`Informacion Avanzada \n Phone: ${usuario.phone} \n Website: ${usuario.website} \n Company \n`
            let company=usuario.company
            for (let i in company){
                text+=` ${i}: ${company[i]}\n`
            }
            console.log(text)
        }
        else{
            console.log("Usuario no encontrado")
        }
    }
    companias(){
        this.data.map((usuario)=>{return console.log(`Compañia:${usuario.company.name}, Frase: ${usuario.company.catchPhrase}`)})
    }
    nombresOrdenados(){
        let nombres=this.data.map(usuario=>{return (usuario.name)});
        let nombresOrdenados=nombres.sort()
        nombresOrdenados.map((nombre)=>{return (console.log(nombre))})

    }
}

let datosUsuarios=new Usuarios();

//botones
const btn1=document.querySelector("#btn-1");
btn1.addEventListener("click",()=>{
    console.clear()
    datosUsuarios.nombres()
})

const btn2=document.querySelector("#btn-2");
btn2.addEventListener("click",()=>{
    console.clear()
    datosUsuarios.informacionBasica()
})

const btn3=document.querySelector("#btn-3");
btn3.addEventListener("click",()=>{
    console.clear()
    datosUsuarios.direccion()
})

const btn4=document.querySelector("#btn-4");
btn4.addEventListener("click",()=>{
    console.clear()
    datosUsuarios.informacionAvanzada()
})

const btn5=document.querySelector("#btn-5");
btn5.addEventListener("click",()=>{
    console.clear()
    datosUsuarios.companias()
})

const btn6=document.querySelector("#btn-6");
btn6.addEventListener("click",()=>{
    console.clear()
    datosUsuarios.nombresOrdenados()
})




