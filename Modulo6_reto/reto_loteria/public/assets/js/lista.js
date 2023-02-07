function listaCartones(){
    const url_api="http://127.0.0.1:3000/api/loteria"
    fetch(url_api)
    .then(res=>res.json())
    .then(data=>{
        //mostramos todos los cartones
        for (let carton of data){
            mostrarCartones(carton,resp)
        }
        
    })

}

listaCartones()

let btn1=document.querySelector("#reiniciar")
btn1.addEventListener("click",()=>{
     resp.innerHTML=``
     reiniciar()
     listaCartones()
     
}
)

function reiniciar(){
    fetch("http://127.0.0.1:3000/reiniciarCartones", { method: "POST" })
    .then((response) => {
        return response.json();
      })
}