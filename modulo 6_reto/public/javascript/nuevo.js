const url_api="http://localhost:3000/api/loteria"
const resp=document.querySelector("#resp")

fetch(url_api)
.then(res=>res.json())
.then(data=>{
    //primero debemos crear un carton que no exista, para eso usamos el lenght de la data como el nuevo n del ticket
    let n=data.length+1
    let cartonNuevo=cartones(n)
    //ahora haremos que ese carton se vea en la pagina
    document.querySelector("Body").innerHTML=`<button id="btn1">Mostrar Carton </button>`

    let btn1=document.querySelector("#btn1")
    btn1.addEventListener("click",function () {
            mostrarCartones(cartonNuevo)
            //por ultimo enviamos la data del carton nuevo con el metodo post para que se guarde
            fetch('/nuevoCarton', {
                method: 'POST',
                body: JSON.stringify({ carton: cartonNuevo }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        })

})

let mostrarCartones=(carton)=>{
        let numeros=``
        for (let n of carton.numeros){
            numeros+=`
            <div class="numero">${n}</div>
            `
        }

        let x=`
        <div class="carton">
        <div class="cabecera">
                <h3>LOTERIA</h3>
                <p>TICKET #${carton.ticket}</p>
        </div>
        <div class="cuerpo">
            ${numeros}
        </div>
        </div>
        `
        resp.innerHTML+=x
    
}

//funcion para crear los numeros al azar
let numerosAzar=()=>{
    let numeros=[]
    for (let i=0;i<15;i++){
        let n=Math.floor(Math.random() * (30)) + 1;
        while (numeros.find((x)=>x===n)){
            n=Math.floor(Math.random() * (30)) + 1;
        }
        numeros.push(n)
    }
    let numOrdenados= numeros.sort((a,b)=>{return (a-b)})
    return numOrdenados;
}
//funcion para crear los cartones
let cartones=(n)=>{
    let numeros=numerosAzar()
    let carton={
            "ticket":n,
            "numeros":numeros
        }
    return carton
    
    
  
}
