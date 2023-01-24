const url_api="http://localhost:3000/api/loteria"
const resp=document.querySelector("#resp")
fetch(url_api)
.then(res=>res.json())
.then(data=>{
    mostrarCartones(data)
})

let mostrarCartones=(data)=>{
    for (let carton of data){
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
}