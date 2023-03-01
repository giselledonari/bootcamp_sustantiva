const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "reto_m7",
  password: "pg999",
  port: 5432,
});

async function init() {
  const client = await pool.connect();
  await client.query({
    text: `
    DROP TABLE IF EXISTS paises_pib;
    CREATE TABLE paises_pib
    (
        nombre character varying(200) NOT NULL,
        pib_2019 integer,
        pib_2020 integer,
        PRIMARY KEY (nombre)
    );

    INSERT INTO paises_pib (nombre, pib_2019, pib_2020) values ('Luxemburgo', 115200, 116730);
    INSERT INTO paises_pib (nombre, pib_2019, pib_2020) values ('Suiza', 85160, 86670);
    INSERT INTO paises_pib (nombre, pib_2019, pib_2020) values ('Noruega', 82770, 78330);
    INSERT INTO paises_pib (nombre, pib_2019, pib_2020) values ('Estados Unidos', 65060, 67430);
    INSERT INTO paises_pib (nombre, pib_2019, pib_2020) values ('Holanda', 54130, 53870);
    INSERT INTO paises_pib (nombre, pib_2019, pib_2020) values ('Finlandia', 50880, 50770);
    INSERT INTO paises_pib (nombre, pib_2019, pib_2020) values ('Alemania', 49690, 47990);
    INSERT INTO paises_pib (nombre, pib_2019, pib_2020) values ('Japon', 41420, 43040);
    INSERT INTO paises_pib (nombre, pib_2019, pib_2020) values ('España', 31910, 30730);
    INSERT INTO paises_pib (nombre, pib_2019, pib_2020) values ('Chile', 16280, 15850);
    INSERT INTO paises_pib (nombre, pib_2019, pib_2020) values ('Mexico', 9870, 10410);
    INSERT INTO paises_pib (nombre, pib_2019, pib_2020) values ('Brasil', 9160, 8960);
    INSERT INTO paises_pib (nombre, pib_2019, pib_2020) values ('Argentina', 9050, 9730);

    `,
  });
  client.release();
}

async function getPib() {
  const client = await pool.connect();
  const respuesta = await client.query("select*from paises_pib");

  client.release();

  return respuesta.rows;
}
async function buscar(crecimiento) {
  if(crecimiento==="creciendo"){
    const client = await pool.connect();
    const respuesta = await client.query(`select *from paises_pib where pib_2020-pib_2019>0`);
    client.release();
    return respuesta.rows;

  }
  else if (crecimiento==="decreciendo"){
    const client = await pool.connect();
    const respuesta = await client.query(`select *from paises_pib where pib_2020-pib_2019<=0`);
    client.release();
    return respuesta.rows;
  }
  else if (parseFloat(crecimiento)){
    const crec=parseFloat(crecimiento)
    console.log(crec)
    const client = await pool.connect();
    const respuesta =await client.query({
    text: `select * from paises_pib where pib_2020>=$1`,
    values: [crec]
    });
    client.release();
    return respuesta.rows;
  }
}



async function agregar(nombre, pib_2019, pib_2020) {
  const client = await pool.connect();
  await client.query({
    text: "insert into paises_pib (nombre, pib_2019, pib_2020) values ($1,$2,$3)",
    values: [nombre, pib_2019, pib_2020]
  });
  client.release();
}

async function eliminar(nombre) {
  const client = await pool.connect();
  await client.query({
    text: "DELETE FROM paises_pib WHERE nombre=$1",
    values: [nombre]
  });
  client.release();
}


module.exports = { init, getPib,buscar,agregar,eliminar };
