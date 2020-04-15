const argv = require('./config/yargs').argv;
// var colors = require('colors');
var colors = require('colors/safe');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');

        listarTabla(argv.base, argv.limite);

        break;

    case 'crear':
        console.log('crear');

        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado:', colors.green(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('no reconocido');
        break;
}

//console.log(argv);