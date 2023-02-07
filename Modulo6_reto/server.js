const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.static("public"));
app.set("view engine", "ejs");

//rutas
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/views/index.html");
});
app.get("/nuevo.html", (req, res) => {
  res.sendFile(__dirname + "/public/views/nuevo.html");
});
app.get("/index.html", (req, res) => {
  res.sendFile(__dirname + "/public/views/index.html");
});
app.get("/lista.html", (req, res) => {
  res.sendFile(__dirname + "/public/views/lista.html");
});

//metodos
app.get("/api/loteria", (req, res) => {
  //leer el archivo y enviar la data a /api/banco
  fs.readFile(__dirname + "/cartones.json", "utf8", function (err, data) {
    if (err) {
      res.status(500).send({ error: err });
    } else {
      var jsonData = JSON.parse(data);
      res.status(200).send(jsonData);
    }
  });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/nuevoCarton", (req, res) => {
  
  //tomar variables del form
  
  let nuevoCarton = req.body.carton;
  let ticket=nuevoCarton.ticket

  //leer archivo
  let data = JSON.parse(fs.readFileSync(__dirname + "/cartones.json", "utf8"));

  //ver carton unico
  let buscar =  data.find((x) => x.ticket === ticket);

  if (buscar) {
    console.log("duplicado");
  } 
  else {
    //añardir la data
    data.push(nuevoCarton);
    //escribir la data nueva
    let dataJson = JSON.stringify(data);

    fs.writeFileSync("./cartones.json", dataJson, "utf8", function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("Data Actualizada");
    });
  }
  res.send("carton agregado");
});

//reiniciar
app.post("/reiniciarCartones", (req, res) => {

  //leer archivo
  let data = JSON.parse(fs.readFileSync(__dirname + "/reinicio.json", "utf8"));

  //escribir la data nueva
  let dataJson = JSON.stringify(data);

  fs.writeFileSync("./cartones.json", dataJson, "utf8", function (err) {
    if (err) {
      return console.log(err);
    }
      console.log("Data Actualizada");
    });
  
});

app.listen(3000);
