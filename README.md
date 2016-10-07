#
# Práctica: Generar modulo NPM

[logo]:http://frontendlabs.io/wp-content/uploads/2015/02/npm-logo.png

![alt text]http://frontendlabs.io/wp-content/uploads/2015/02/npm-logo.png

### Requisitos

* Se trata de añadir un ejecutable gitbook-start (Véase seccion binen package.json)
* Este ejecutable construye una plantilla con la estructura inicial del libro y provee a partir de los argumentos que se le pasen los mecanismos para su fácil despliegue en *.
        1. GitHub gh-pages y en
        2. https://www.gitbook.com/
* Para analizar los argumentos pasados en línea de comandos un buen módulo es minimist
* Como deberán darse de alta en el site de npm asegúrense de ponerle a su paquete un nombre único que no coincida con el de los otros alumnos, por ejemplo gitbook-start-team-name
* Añada a los otros miembros del equipo como contributors. Véase las seccion people fields de package.json
* Intente que su paquete funcione independientemente del Sistema Operativo (Linux, MacOS X, Windows, etc.)


## Enlace a github gh-pages
[gh-pages](https://ull-esit-sytw-1617.github.io/tareas-iniciales-noejaco2017/)

## Enlace a gitbook
[gitbook](https://alu0100836059.gitbooks.io/apuntessytw/content/)

## Enlace a npm
[npm](https://www.npmjs.com/package/gitbook-start-team-noejaco2017)



# Installation

## Instalar nuestro paquete NPM
npm install -g gitbook-start-team-noejaco2017 

## Ejecutar nuestro paquete
gitbook-start --autor juanito --url juanito@ull.edu.es --wiki wiki@ull.es --email github@github.es --version 1.0.1 --directorio chuchu

## Manual de ayuda
gitbook-start --h || --help
````````````````````
gitbook-start [OPTIONS]
--autor: autor del libro a crear node gitbook-star -a AutorDelLibro
--email: email de contacto del usuario
--version: version repositorio github contra el que se va a trabajar -r github.com/repo.git
--url: repositorio github contra el que se va a trabajar -r github.com/repo.git
--wiki: direccion web de la wiki en github -w github.com/repo.wiki.git
--directorio: nombre del directorio a crear
--help: muestra ayuda sobre las opciones disponibles
``````````````````````
### Comandos para crear nuestro modulo en NPM

* npm adduser (añade nuestro paquete)
* npm publish(publica nuestro paquete)
* Tener en cuenta que cada vez que se publique cambiar version package.json

### Carpeta bin y template
* En nuestra carpeta /bin contiene los archivos para las funciones que podremos ejecutar desde la linea de comandos del cliente npm
* En nuestra carpeta /template tendremos el directorio a crear en gh-pages
*  index.js que sirve de atajo al script principal de nuestra aplicación

### Ejecutar nuestro script linea-comando-npm
node bin/linea-comando-npm.js --autor juanito --url juanito@ull.edu.es --wiki wiki@ull.es --email github@github.es --version 1.0.1 --directorio chuchu

