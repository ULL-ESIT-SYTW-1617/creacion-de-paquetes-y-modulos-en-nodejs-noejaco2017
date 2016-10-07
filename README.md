#
# Práctica: Generar modulo NPM

### Requisitos

* Deberá de desplegar su libro en gh-pages
* Deberá de desplegar su libro en GitBook
* Añada un Gulpfile con tareas que automaticen la construcción y despliegue del libro en los diferentes sites
* Usen los issues de GitHub para indicar las incidencias, problemas y progresos del proyecto
* Genere un paquete NPM

### Autores

* [Jacobo Rodicio Gonzalez](http://alu0100836059.github.io/pagina_personal/)
* [Noé Campos Delgado](dsi1516.github.io/Practica1)

## Enlace a github gh-pages
[gh-pages](https://ull-esit-sytw-1617.github.io/tareas-iniciales-noejaco2017/)

## Enlace a gitbook
[gitbook](https://alu0100836059.gitbooks.io/apuntessytw/content/)

## Enlace a npm
[npm](https://www.npmjs.com/package/gitbook-start-team-noejaco2017)



# Installation

## Instalar nuestro paquete NPM
npm install -g gitbook-start-team-noejaco2017 

### Comandos para crear nuestro modulo en NPM
npm adduser (añade nuestro paquete)
npm publish(publica nuestro paquete)
Tener en cuenta que cada vez que se publique cambiar version package.json

### Carpeta bin y template
* En nuestra carpeta /bin contiene los archivos para las funciones que podremos ejecutar desde la linea de comandos del cliente npm
* En nuestra carpeta /template tendremos el directorio a crear en gh-pages
*  index.js que sirve de atajo al script principal de nuestra aplicación

### Ejecutar nuestro script linea-comando-npm
node bin/linea-comando-npm.js --autor juanito --url juanito@ull.edu.es --wiki wiki@ull.es --email github@github.es --version 1.0.1
* Opcion --name: Da un nombre al proyecto
* Opcion --url: Direccion de git
* Opcion --wiki: Direccion wiki para despliegue gitbook 


Una vez clonamos nuestro proyecto realizamos los siguientes pasos:
1. Para el instalar los paquetes del pacakge.json utilizamos el comando npm install
2. Para el de book.json utilizamos el comando gitbook install
3. Una vez hecho y realizado cambios en nuestra repo txt y para cualquier cambio haremos
4. gulp empujar donde pusheamos a master nuestra carpeta txt
5. gulp deploy para publicar en gh-pages
Opcional: gulp pdf donde generamos nuestro gitbook a pdf.



___Utilización del plugin de toc3 para generar tablas de contenidos___:
[TOC3](https://plugins.gitbook.com/plugin/toc3)
