 /*
    @fileoverview   definición de capacidades para ejecución automatizada
    @autor          unodostres
    @version        1.0
    History
        v1.0        config definition
*/



exports.config = {

    framework: 'jasmine',

    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['../../scripts/Resumen_de_la_compra.js']
    


}