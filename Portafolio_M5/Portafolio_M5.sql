/*Crear base de datos y tablas con sus respectivos campos, claves, restricciones y relaciones*/

CREATE DATABASE Portafolio_M5;

CREATE TABLE public.departamento (
	id_departamento int GENERATED ALWAYS AS IDENTITY NOT NULL,
	nombre varchar NOT NULL,
	CONSTRAINT empleados_pk PRIMARY KEY (id_departamento)
);
CREATE TABLE public.supervisor (
	id_supervisor int GENERATED ALWAYS AS IDENTITY NOT NULL,
	nombre varchar NOT NULL,
	apellido varchar NOT NULL,
	email varchar NOT NULL,
	CONSTRAINT supervisor_pk PRIMARY KEY (id_supervisor),
	CONSTRAINT supervisor_unique UNIQUE (email)
);
CREATE TABLE public.empleados (
	id_empleado int GENERATED ALWAYS AS IDENTITY NOT NULL,
	rut varchar NOT NULL,
	nombre varchar NOT NULL,
	apellido varchar NOT NULL,
	email varchar NOT NULL,
	cargo varchar NOT NULL,
	salario decimal(10, 2) NOT NULL,
	id_supervisor int NOT NULL,
	CONSTRAINT empleados_pk PRIMARY KEY (id_empleado),
	CONSTRAINT empleados_check CHECK (salario >= 0),
	CONSTRAINT empleados_unique UNIQUE (id_supervisor,rut,email),
	CONSTRAINT empleados_supervisor_fk FOREIGN KEY (id_supervisor) REFERENCES public.supervisor(id_supervisor) ON DELETE SET NULL
);
CREATE TABLE public.supervisor_departamento (
	id_supervisor int NOT NULL,
	id_departamento int NOT NULL,
	CONSTRAINT supervisor_departamento_unique UNIQUE (id_supervisor,id_departamento),
	CONSTRAINT supervisor_departamento_departamento_fk FOREIGN KEY (id_departamento) REFERENCES public.departamento(id_departamento) ON DELETE SET NULL,
	CONSTRAINT supervisor_departamento_supervisor_fk FOREIGN KEY (id_supervisor) REFERENCES public.supervisor(id_supervisor) ON DELETE SET NULL
);

/*Insertar registros a las tablas de la base de datos*/

INSERT INTO departamento (nombre) VALUES
	('tecnologia'),
	('vestuario'),
	('deportes'),
	('jugueteria');

INSERT INTO supervisor (nombre, apellido, email) VALUES
	('Ana', 'Perez', 'ana.perez@gmail.com'),
	('Luis', 'Gomez', 'luis.gomez@gmail.com'),
	('Carlos', 'Martinez', 'carlos.martinez@gmail.com'),
	('Juan', 'Perez', 'juan.perez@gmail.com'),
	('Sofia', 'Lopez', 'sofia.lopez@gmail.com');

INSERT INTO empleados (rut, nombre, apellido, email, cargo, salario, id_supervisor) VALUES
	('18.445.887-5', 'Juan', 'Acosta', 'juan.acosta@gmail.com', 'cajero', 500000, 1),
	('15.748.259-6', 'Jose', 'Perez', 'jose.perez@gmail.com', 'gerente', 1000000, 2),
	('20.006.756-1', 'Lidia', 'Devia', 'lidia.devia@gmail.com', 'vendedor', 700000, 1),
	('7.425.327-5', 'Hernan', 'Gomez', 'hernan.gomez@gmail.com', 'vendedor', 500000, 2),
	('14.225.127-K', 'Gloria', 'Lopez', 'gloria.lopez@gmail.com', 'vendedor', 500000, 5),
	('14.225.127-K', 'Esteban', 'Salas', 'esteban.salas@gmail.com', 'cajero', 500000, 3),
	('13.128.437-0', 'Natalia', 'Abarca', 'natalia.abarca@gmail.com', 'gerente', 1200000, 4);

INSERT INTO supervisor_departamento (id_supervisor, id_departamento) VALUES
	(1,2),
	(2,4),
	(3,1),
	(4,2),
	(5,3);

/*Utilizar Lenguaje Estructurado de Consultas (SQL) para la obtención de información que satisface los 
 * requerimientos planteados a partir de un modelo de datos dado.*/

/*Mostrar cada supervisor y el departamento en el que trabaja*/
SELECT supervisor.nombre, departamento.nombre FROM supervisor
JOIN supervisor_departamento ON supervisor.id_supervisor = supervisor_departamento.ID_SUPERVISOR
JOIN departamento ON supervisor_departamento.id_departamento = departamento.id_departamento
GROUP BY supervisor.nombre, departamento.nombre
ORDER BY departamento.nombre;

/*Mostrar supervisores que trabajan en el departamento vestuario*/
SELECT supervisor.nombre, departamento.nombre FROM supervisor
JOIN supervisor_departamento ON supervisor.id_supervisor = supervisor_departamento.id_supervisor
JOIN departamento ON supervisor_departamento.id_departamento = departamento.id_departamento
WHERE departamento.nombre = 'vestuario'
GROUP BY supervisor.nombre, departamento.nombre
ORDER BY departamento.nombre;

/*Promedio de sueldo de trabajadores que tienen supervisor del departamento de tecnologia*/
SELECT AVG(empleados.salario) FROM empleados
JOIN supervisor ON empleados.id_supervisor = supervisor.id_supervisor
JOIN supervisor_departamento ON supervisor.id_supervisor = supervisor_departamento.id_supervisor
JOIN departamento ON supervisor_departamento.id_departamento = departamento.id_departamento
WHERE departamento.nombre = 'tecnologia';


/*Utilizar lenguaje de manipulación de datos (DML) para la modificación de los datos existentes en una 
 * base de datos dando solución a un problema planteado*/

/*Cambiar el cargo al empleado con el id 2 de gerente a vendedor*/
UPDATE empleados
SET cargo = 'vendedor'
WHERE id_empleado = 2;

/*Actualizar el sueldo a 750000 a todos los empleados que ganan menos de 500000 y son cajeros*/
UPDATE empleados
SET salario = 750000
WHERE salario <= 500000 AND cargo = 'cajero';

/*Eliminar supervisores que no tengan email registrado o su apellido empiece con Z*/
DELETE FROM supervisor
WHERE email = NULL OR apellido LIKE 'Z%';

/*Insertar un nuevo empleado con el supervisor con id 1*/
INSERT INTO empleados (rut, nombre, apellido, email, cargo, salario, id_supervisor) VALUES
	('9.655.112-5', 'Pedro', 'Soto', 'pedro.soto@gmail.com', 'gerente', 1000000, 1);

/*Utilizar el lenguaje DDL para crear, modificar y eliminar objetos dentro de una base de datos*/

/*Eliminar los registros de las tabla supervisor, empleados y resguardar la integridad referencial*/
TRUNCATE table supervisor, empleados RESTART IDENTITY CASCADE;
TRUNCATE TABLE supervisor_departamento RESTART IDENTITY CASCADE;

/*Modificar la columna salarios de la tabla empleados para que no acepte valores decimales*/
ALTER TABLE empleados
ALTER COLUMN salario SET DATA TYPE INT;

/*Agregar a la tabla supervisor_departamento un id para cada registro*/
ALTER TABLE supervisor_departamento
ADD COLUMN id_relacion INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY;

/*Eliminar la restricción UNIQUE al email de supervisores*/
ALTER TABLE supervisor
DROP CONSTRAINT supervisor_unique;