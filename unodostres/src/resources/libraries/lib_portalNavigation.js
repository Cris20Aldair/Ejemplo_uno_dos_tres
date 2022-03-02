/*
    @fileoverview   Enviar un método http específico a la URL proporcionada
    @autor          undostres
    @version        1.0

*/

var parameters = require("../data/parameters.json");

exports.originacionPortalundostres = function () {

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 360000;
    browser.waitForAngularEnabled(false);
    browser.get(parameters.urls.undostres);
 
}
