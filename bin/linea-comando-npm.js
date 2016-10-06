var fs= require('fs');
var ejs=require('ejs');
var argv = require('minimist')(process.argv.slice(2));
console.dir(argv);

console.log("argv_: "+argv._);//contiene los argumentos no asociados al --
//console.log("opts"+argv.opts.string);
fs.readFile("../template/package.ejs",function(error,data){
    //console.log("contiene el fichero: "+ data.length());
    console.log(data);
    //console.log("dataname"+data.version);
});

var content= fs.readFileSync("./template/package.ejs");//en la variable content tenemos guardado el package.ejs
console.log("content"+ content);
console.log("content"+ content.name);
console.log("ejs"+ejs.readFile("./template/package.ejs"));