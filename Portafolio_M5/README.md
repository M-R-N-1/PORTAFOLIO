## Portafolio_M5

## Propósito
El propósito de este portafolio será poner en evidencia conocimientos adquiridos durante el módulo Fundamentos de Base de Datos Relacionales, dentro de los cuales se encuentra: 

    * Características y rol de una base de datos relacional
    * Uso del lenguaje SQL para la obtención de información
    * Manipulación de datos con SQL (DML)
    * Definición de estructuras de datos con SQL (DDL)
    * Modelado de datos

## Estructura portafolio
* Script SQL con la creación de base de datos, tablas, registros, consultas y modificaciones.
* Documento PDF detallando características, rol y elementos fundamentales de la base de datos relacional 
* Diagrama entidad-relación (ER) para representar el modelo de datos incluido en PDF anterior

## Lógica del modelo a implementar
Para este portafolio se definió una base de datos con empleados, supervisores y departamentos de una empresa, las cuales se relacionan a través de los respectivos identificadores a través de claves foráneas. En este modelo un empleado puede tener un solo supervisor, pero un supervisor puede tener varios empleados a cargo. Por otra parte, un departamento puede tener varios supervisores y al mismo tiempo un supervisor puede trabajar en varios departamentos, por lo cual es necesario crear una tabla intermedia.