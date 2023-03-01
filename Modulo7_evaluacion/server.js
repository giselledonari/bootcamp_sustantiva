const express = require("express");
const app = express();
const cors = require("cors");
const {init,  getData, agregar,getAllData,eliminar }=require('./db.js')

const bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/lista/:cantidad", async (req, res) => {
  let n=req.params.cantidad
  let respuesta= await getData(n)
  res.send(respuesta)
});

app.get("/lista", async (req, res) => {
  let respuesta= await getAllData()
  res.send(respuesta)
})


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/agregar",async (req,res)=>{
  let nombre=req.body.nombre
  let continente=req.body.continente
  let poblacion=req.body.poblacion
  let pib_2019=req.body.nuevo2019
  let pib_2020=req.body.nuevo2020
  await agregar(nombre,continente,poblacion,pib_2019,pib_2020)

  res.redirect('/')
  
})


app.delete("/eliminar/:nombre", async(req, res) => {
  let nombre = req.params.nombre;
  await eliminar(nombre)
  res.redirect('/')
  
});

app.listen(3000,async()=>{await init()});
