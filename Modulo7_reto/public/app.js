obtenerTodos()
const resp = document.querySelector("#resp")

async function obtenerTodos(){
  const response = await fetch('http://localhost:3000/lista');
  const data = await response.json();  
  for (let valor of data){
    let dif=parseFloat(valor.pib_2020)-parseFloat(valor.pib_2019)
    resp.innerHTML+=`
      <tr>
        <td>${valor.nombre}</td>
        <td>${valor.pib_2019}</td>
        <td>${valor.pib_2020}</td>
        <td>${dif}</td>
      </tr>
    `
  }
  
}

function buscarPaises(data){
  resp.innerHTML=``
  for (let valor of data){
    let dif=parseFloat(valor.pib_2020)-parseFloat(valor.pib_2019)
    resp.innerHTML+=`
      <tr>
        <td>${valor.nombre}</td>
        <td>${valor.pib_2019}</td>
        <td>${valor.pib_2020}</td>
        <td>${dif}</td>
      </tr>
    `
  }
}
///pib

document.querySelector("#buscarPaises").addEventListener("submit",async(event)=>{
  event.preventDefault()
  const pib=document.querySelector("#pib").value
  const buscar=await fetch(`http://localhost:3000/lista/${pib}`)
  const data=await buscar.json()
  console.log(data)
  buscarPaises(data)
})




///eliminar

document.querySelector("#eliminarPaises").addEventListener("submit",()=>{
  console.log("eliminar")
  const nombre=document.querySelector("#nombre").value
  fetch(`http://localhost:3000/eliminar/${nombre}`,{method: 'delete'})
  .catch(err=>console.log(err))
})

