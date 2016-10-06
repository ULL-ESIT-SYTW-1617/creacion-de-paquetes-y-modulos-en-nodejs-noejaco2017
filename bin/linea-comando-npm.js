var fs= require('fs');
var ejs=require('ejs');
var argv = require('minimist')(process.argv.slice(2));
//console.dir(argv);

//console.log("argv_: "+argv._);//contiene los argumentos no asociados al --
//console.log("opts"+argv.opts.string);
fs.readFile("./template/package.ejs",function(error,data){
    //console.log("contiene el fichero: "+ data.length());
    // console.log(data);
    //console.log("dataname"+data.version);
});

var content= fs.readFileSync("./template/package.ejs");//en la variable content tenemos guardado el package.ejs
// console.log("content"+ content);
// console.log("content"+ content.name);
// console.log("ejs"+ejs.readFile("./template/package.ejs"));


var configuracion = JSON.parse(content);

// var autor = "<%= title.name =%>" = argv[1];
//console.log("nombre: "+ configuracion.name);
/////////////////////////////////
//configuracion.name = argv._[0];
//configuracion.repository.url = argv._[1];
////////////////////////////////
//console.log (argv._[0]); // en argv._[0] se pasa el primer nombre


//var result = ejs.renderFile("./template/package.ejs", {name: argv._[0]}); 


console.log("config: ", configuracion);

// config.title.name = argv[0];
// config.url.git = argv[1];


// content = fs.writeFileSync(, argv["author"]);