
const resp = document.querySelector("#resp")


//get data

document.querySelector("#buscar").addEventListener("submit",async(event)=>{
  event.preventDefault()
  const cantidad=document.querySelector("#cantidad").value
  const response = await fetch(`http://localhost:3000/lista/${cantidad}`,{method:"get"});
  const data = await response.json();  
  resp.innerHTML=``
  for (let valor of data){
    resp.innerHTML+=`
      <tr>
        <td>${valor.nombre}</td>
        <td>${valor.continente}</td>
        <td>${valor.poblacion}</td>
        <td>${valor.pib_2019}</td>
        <td>${valor.pib_2020}</td>
      </tr>
    `
  }
})



//ver data

document.querySelector("#ver-todos").addEventListener("click",async(event)=>{
  event.preventDefault()
  const response = await fetch(`http://localhost:3000/lista`,{method:"get"});
  const data = await response.json();  
  resp.innerHTML=``
  for (let valor of data){
    resp.innerHTML+=`
      <tr>
        <td>${valor.nombre}</td>
        <td>${valor.continente}</td>
        <td>${valor.poblacion}</td>
        <td>${valor.pib_2019}</td>
        <td>${valor.pib_2020}</td>
      </tr>
    `
  }
})


///eliminar

document.querySelector("#eliminarPaises").addEventListener("submit",()=>{
  console.log("eliminar")
  const nombre=document.querySelector("#nombre").value
  fetch(`http://localhost:3000/eliminar/${nombre}`,{method: 'delete'})
  .catch(err=>console.log(err))
})

