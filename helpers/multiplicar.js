const fs = require('fs');

const crearFile = (base , listar, stop) =>
{
    return new Promise((resolve, reject)=>{
        let     salida  = '';
        for(let i = 1 ; i <= stop ; i++)
        {
            salida += `${ base } X ${ i } = ${ base * i }\n`
        }
        fs.writeFileSync( `table-${ base }.txt`, salida )
        resolve(`table-${ base }.txt`);
        if(listar)
        {
            console.log('========================');
            console.log(`       Tabla del : ${ base }`);
            console.log('========================');
            console.log(salida);
        }
    });
}

const newFile = async (base , listar, stop) =>
{
    try {
        let     salida  = '';
        for(let i = 1 ; i <= stop; i++)
        {
            salida += `${ base } X ${ i } = ${ base * i }\n`
        }
        fs.writeFileSync(`./salidas/table-${ base }.txt`, salida )
        if(listar)
        {
            console.log('========================'.green);
            console.log(`       Tabla del : ${ base }`.green);
            console.log('========================'.green);
            console.log(salida.green);
        }        
        return `table-${ base }.txt`        
    } catch (err) {
        throw err;
    }

}

module.exports = {
    crearFile,
    newFile
}