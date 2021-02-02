const argv = require('./confg/yargs');
const colors = require('colors');
const { crearFile, newFile } = require('./helpers/multiplicar');



console.clear();
/*
const [ , ,arg2 = '--base=5',arg3='--limite=10'] = process.argv
const [ , base = 5]= arg2.split('=');
const [ , limite = 10]= arg3.split('=');

console.log(base);
console.log(limite);

*/
newFile(argv.b,argv.l, argv.s)
    .then(fileName=>console.log(fileName.rainbow, 'Creado'))
    .catch(err=>console.log(err.red));