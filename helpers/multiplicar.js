const fs = require('fs')
require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) =>{


    // console.log('====================')
    // console.log(`   Tabla de `, base)
    // console.log('====================')
    let salida = '';
    for (let i = 1; i <= hasta; i++) {
        salida +=  `${ base } X ${i} = ${ base * i}\n`;
    }
    try {
        fs.writeFileSync(`./salidas/test-${base}.txt`, salida);
        
        // console.log(`The file test-${base}.txt has been saved!`);
        if ( listar ) {
            console.log(salida)
        } 
        return `test-${base}.txt`       
    } catch (err) {
        throw err

        
    }

};

module.exports = {
    crearArchivo
}