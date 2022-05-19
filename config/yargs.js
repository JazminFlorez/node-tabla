const argv = require('yargs')
    .options('b', {
        alias : 'base',
        type : 'number',
        demandOption : true,
        describe : 'Base numerico para multiplicar'

    })
    .options('l', {
        alias : 'listar',
        type : 'boolean',
        default : false,
        describe : 'Lista info de tabla'

    })
    .options('h', {
        alias : 'hasta',
        type : 'number',
        default : 10,
        describe : 'Limite hasta donde se crea la tabla'

    })
    .check((argv, options) => {
        if ( isNaN(argv.b) ) {
            throw 'La base debe ser un numero'
        }
        return true;

    })
    .argv
module.exports = argv