const resp=document.querySelector("#resp")
let n
let cartonNuevo

async function leerApi(){
    const url_api="http://127.0.0.1:3000/api/loteria"
    await fetch(url_api)
    .then(res=>res.json())
    .then(data=>{
        //primero debemos crear un carton que no exista, para eso usamos el lenght de la data como el nuevo n del ticket
        n=data.length+1
        cartonNuevo=cartones(n)
        //mostramos el carton
        mostrarCartones(cartonNuevo,resp)
    })

}

async function guardarCarton (){
    await leerApi()
    await fetch('http://127.0.0.1:3000/nuevoCarton', {
        method: 'POST',
        body: JSON.stringify({ carton: cartonNuevo }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

}

let btnNuevo=document.querySelector("#nuevo")
btnNuevo.addEventListener("click",(event)=>{
    event.preventDefault()
    guardarCarton()

})
