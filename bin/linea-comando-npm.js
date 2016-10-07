var express = require('express')
var app = express()
var path = require('path');
var fs= require('fs');
var ejs=require('ejs');

//DIRECTORIO CON TEMPLATES
app.set('views', path.join(__dirname, 'template'));
//app.set('views', path.join(__dirname, '../assets/*'));
app.set('view engine', 'ejs');

//MINIMIST
var argv = require('minimist')(process.argv.slice(2));
console.dir(argv);

//EJS RENDERFILE cargamos la plantilla
ejs.renderFile('./template/package.ejs',{nombre :argv.name,direcciongit : argv.url,direccionwiki: argv.wiki},function(err, result) {
   // render on success
   
   if (!err) {
       // result.nombre=argv.name;
       // result.direcciongit=argv.url;
       // result.direccionwiki='argv.wiki';
        console.log(result);
            //CREAMOS EL PACKAGE:JSON en template
               var write=fs.writeFile("./template/package.json",result, (err) => {
                       if (err) throw err;
                       console.log('CREADO PACKAGE.JSON');
             });
   }
   // render or error
   else {
            console.log('Error renderFile(package.ejs)');
            console.log(err);
   }
});

console.log("argv_ ",argv._);//los que no tienen opcion asociada
console.log("argv ",argv);
console.log("argv1 "+argv.name);
console.log("argv2 "+argv.url);
console.log("argv3 "+argv.wiki);




//console.log("argv_: "+argv._);//contiene los argumentos no asociados al --
//console.log("opts"+argv.opts.string);
// console.log("argv"+argv);
// console.log("argv._" ,argv._);
// console.log ("argv._0",argv[0]);
// console.log("argv._1"+argv[1]);
// console.log("argv._2"+argv[2]);

 


//  var read=fs.readFile("./template/package.ejs",function(error,data){
//     //console.log("contiene el fichero: "+ data.length());
//      //console.log("dato"+data);
//      console.log("dataname_ "+data[0].name);
//     //console.log("dataname"+data.version);
// });

// console.log("READ : "+read);
// var content= fs.readFileSync("./template/package.ejs");//en la variable content tenemos guardado el package.ejs
// //console.log("content"+content);
// var configuracion = JSON.parse(content);
// console.log("configuracion_name : ",configuracion.name);

// // ejs.fileLoader = function("./template/package.ejs") {
// //   return 'new content + from file: ' + fs.readFileSync("./template/package.ejs");
// // };

// var p = require('ejs').renderFile("./template/package.ejs",{nombre:argv[0]});

// console.log("content"+ content);
// console.log("content"+ content.name);
// console.log("ejs"+ejs.readFile("./template/package.ejs"));






// var autor = "<%= title.name =%>" = argv[1];
//console.log("nombre: "+ configuracion.name);
/////////////////////////////////
//configuracion.name = argv._[0];
//configuracion.repository.url = argv._[1];
////////////////////////////////
//console.log (argv._[0]); // en argv._[0] se pasa el primer nombre


//var result = ejs.renderFile("./template/package.ejs", {name: argv._[0]}); 


//-----------------------------console.log("config: ", configuracion);

// config.title.name = argv[0];
// config.url.git = argv[1];


// content = fs.writeFileSync(, argv["author"]);