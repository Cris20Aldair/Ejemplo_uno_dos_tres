 /*
    @fileoverview   defining capabilities for automated execution ios
    @autor          RAO Automation Team
    @version        1.0
    History
        v1.0        config definition
*/



exports.config = {

    framework: 'jasmine',

    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['../../scripts/Compra_exitosa.js']
    


}