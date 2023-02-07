let mostrarCartones=(carton,resp)=>{
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
