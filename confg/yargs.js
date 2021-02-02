const argv = require('yargs')
                .option(
                    {
                        'b': {alias: 'base',type: 'number', demandOption: true, description:'Indicar el multiplicador'},
                        'l': {alias: 'listar',type:'boolean' , demandOption: false, default: false, description:'Booleano para ver o no la tabla'},
                        's': {alias: 'stop',type:'number' , demandOption: true, default: 10, description:'Indicar el Limite de las tablas'}
                    }
                )
                .check((argv, options)=>{
                    if(isNaN(argv.b) || isNaN(argv.s))
                    {
                        throw 'Debe Indicar solo caracter numerico'
                    }
                    return true;
                })
                .argv;


module.exports = argv;