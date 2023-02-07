async function primerosCartones(n){
    const url_api="http://127.0.0.1:3000/api/loteria"
    await fetch(url_api)
    .then(res=>res.json())
    .then(data=>{
        //mostramos los primeros n cartones
        for (let i=0;i<n;i++){
            let carton=data[i]
            mostrarCartones(carton,resp)
        }
        
    })

}

primerosCartones(5)