DROP TABLE IF EXISTS actores, reparto_actores, teleseries;
/*2. Crear scrips para tablas y poblar tablas*/
CREATE TABLE actores
(	
	id integer not null,
    nombre character varying(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE teleseries
(	id integer not null,
	nombre character varying(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE reparto_actores
(
	id serial not null,
	id_teleseries integer ,
	id_actores  integer ,
	protagonico boolean,
    sueldo integer,
    PRIMARY KEY (id),
	FOREIGN KEY (id_actores) REFERENCES actores(id),
	FOREIGN KEY (id_teleseries) REFERENCES teleseries(id)
);

insert into actores values (1,'Paz Bascuñán');
insert into actores values (2,'Pablo Macaya');
insert into actores values (3,'Cristián Arriagada');
insert into actores values (4,'Josefina Montané');
insert into actores values (5,'Loreto Aravena');
insert into actores values (6,'Lorena Bosch');
insert into actores values (7,'Nicolás Poblete');
insert into actores values (8,'Aranzazú Yankovic');
insert into actores values (9,'Catalina Guerra');
insert into actores values (10,'Solange Lackington');
insert into actores values (11,'Ignacio Garmendia');
insert into actores values (12,'Julio González');
insert into actores values (13,'Antonella Orsini');

insert into actores values (14,'Jorge Zabaleta');
insert into actores values (15,'Belén Soto');
insert into actores values (16,'María Elena Swett');
insert into actores values (17,'Juan Falcón');
insert into actores values (18,'Leonardo Perucci');
insert into actores values (19,'Teresita Reyes');
insert into actores values (20,'Remigio Remedy');
insert into actores values (21,'María Paz Grandjean');
insert into actores values (22,'César Caillet');
insert into actores values (23,'José Tomás Guzmán');
insert into actores values (24,'Manuel Aguirre');

insert into actores values (25,'Alejandro Trejo');
insert into actores values (26,'Grimanesa Jiménez');
insert into actores values (27,'Héctor Morales');
insert into actores values (28,'Luis Gnecco');
insert into actores values (29,'Silvia Santelices');
insert into actores values (30,'Tamara Acosta');

insert into teleseries values (1,'Soltera Otra Vez');
insert into teleseries values (2,'Papi Ricky');

insert into reparto_actores values (default,1,1,true, 100);
insert into reparto_actores values (default,1,2,true, 100);
insert into reparto_actores values (default,1,3,true, 95);
insert into reparto_actores values (default,1,4,true, 90);
insert into reparto_actores values (default,1,5,true, 95);
insert into reparto_actores values (default,1,6,true, 90);
insert into reparto_actores values (default,1,7,true, 85);
insert into reparto_actores values (default,1,8,true, 80);
insert into reparto_actores values (default,1,9,true, 90);
insert into reparto_actores values (default,1,10,true, 70);
insert into reparto_actores values (default,1,11,true, 70);
insert into reparto_actores values (default,1,12,true, 75);
insert into reparto_actores values (default,1,13,true, 70);

insert into reparto_actores values (default,1,25,false, 55);
insert into reparto_actores values (default,1,26,false, 60);
insert into reparto_actores values (default,1,27,true, 80);
insert into reparto_actores values (default,1,28, true, 80);
insert into reparto_actores values (default,1,29, false, 55);
insert into reparto_actores values (default,1,30,false, 60);

insert into reparto_actores values (default,2,14,true, 100);
insert into reparto_actores values (default,2,15,true, 100);
insert into reparto_actores values (default,2,16,true, 100);
insert into reparto_actores values (default,2,17,true, 95);
insert into reparto_actores values (default,2,18,true, 85);
insert into reparto_actores values (default,2,29,true, 80);
insert into reparto_actores values (default,2,20,true, 60);
insert into reparto_actores values (default,2,21,true, 55);
insert into reparto_actores values (default,2,22,true, 40);
insert into reparto_actores values (default,2,23,true, 25);
insert into reparto_actores values (default,2,24,true, 30);

insert into reparto_actores values (default,2,25,true, 65);
insert into reparto_actores values (default,2,26,true, 60);
insert into reparto_actores values (default,2,27,true, 50);
insert into reparto_actores values (default,2,28,true, 75);
insert into reparto_actores values (default,2,29,true, 85);
insert into reparto_actores values (default,2,30,true, 100);

/*3. Crear consulta*/
select t.nombre as "teleserie", a.nombre as "actor"
from teleseries t
inner join reparto_actores 
on id_teleseries=t.id
inner join actores a
on id_actores=a.id
where protagonico=true;
