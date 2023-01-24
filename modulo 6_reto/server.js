const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//rutas
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/views/index.html");
});

app.get("/iniciar.html", (req, res) => {
  res.sendFile(__dirname + "/public/views/iniciar.html");
});

app.get("/nuevo.html", (req, res) => {
  res.sendFile(__dirname + "/public/views/nuevo.html");
});



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
  //tomar la data del front
  let nuevoCarton = req.body.carton;

  //leer la data
  let data= fs.readFileSync(__dirname + "/cartones.json", "utf8", function (err) {
    if (err) {
      res.status(500).send({ error: err });
    } 
  })

  let dataJson = JSON.parse(data)
 
  //agregar el nuevo carton

  console.log(nuevoCarton)
  dataJson.push(nuevoCarton)


  //escribir la nueva data
  
  
  fs.writeFile(__dirname + "/cartones.json", JSON.stringify(dataJson), 'utf8', function (err) {
    if (err) {
      res.status(500).send({ error: err });
    } ;
  });

});
  



app.listen(3000);