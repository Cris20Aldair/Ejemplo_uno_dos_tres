/*
    @fileoverview   navigation flow
    @autor          RAO Automation Team
    @version        1.0
    History
        v1.0        library definition
*/

var objectNavigation = require("../../resources/libraries/lib_navigation.js");

var selectors = require("../data/selectors.json");


var ingresoCorreo = require("../data/ingresoCorreo.json");


var dataCellPhone = require("../data/cellPhoneInfo.json");

// Esta funcion espera segundo tras segundo y para cuando encuntra el objeto ingresado
exports.esperaPruebasCss = function (b) {

    browser.sleep(1500)
    console.log(b)

    var a = element(by.css(b))

            for (i = 0; i < 30; i++) {
    
                    a.isPresent().then( function (isPresent) {
                        
                        if (i == 59) {
                            console.log("error no se encontro la pantalla");
                            browser.params.status = 'failed';
                            
                        }
                        else if (!isPresent) {
                        browser.sleep(1000)
                        console.log("esperando  ")
                    }  else {
                        i = 30
                        return i
                    }
                    return i = i + 1
                });
                
            }
        }



// Esta funcion permite ingresar los datos de Recarga celular

exports.ingreRecargaCelular = function () {

    var mobile = element(by.css(selectors.RecargaCelular.mobile.selector));

    var Siguiente = element(by.css(selectors.RecargaCelular.Siguiente.selector));

    objectNavigation.esperaPruebasCss(selectors.RecargaCelular.operator.selector); // Esta funcion espera segundo tras segundo y para cuando encuntra el objeto ingresado

    selectOption(selectors.RecargaCelular.operator.selector,"1"); 

    mobile.sendKeys(dataCellPhone.cellPhoneNumber);

    selectOption(selectors.RecargaCelular.amount.selector,"1"); 

    Siguiente.click();

}
// Funcion que permite seleccionar una opcion de un combo 
function selectOption(selector, option) {

    var reasonOption = element(by.css(selector));

    browser.sleep(1000);

    let reason = reasonOption.all(by.tagName('option')).get(option);

    reason.click();


    browser.sleep(2000);

}


// Funcion que permite ingresar todos los datos de un targeta nueva y realiza la compra 
exports.ingreTargetaNueva= function () {

    var targeta = element(by.css(selectors.Resumencompra.targeta.selector));

    var targetaNueva = element(by.xphat('//*[@id="radio-n"]'));

    var numerotargeta = element(by.css(selectors.Resumencompra.numerotargeta.selector));

    var mes = element(by.css(selectors.Resumencompra.mes.selector));

    var año = element(by.css(selectors.Resumencompra.año.selector));

    var cvv = element(by.css(selectors.Resumencompra.cvv.selector));

    var correo = element(by.css(selectors.Resumencompra.correo.selector));

    var pagarTargeta = element(by.css(selectors.Resumencompra.pagarTargeta.selector));

    objectNavigation.esperaPruebasCss(selectors.Resumencompra.targeta.selector); // Esta funcion espera segundo tras segundo y para cuando encuntra el objeto ingresado

    targeta.click();

    targetaNueva.click();

    numerotargeta.sendKeys(dataCellPhone.numtargeta);

    mes.sendKeys(dataCellPhone.mes);

    año.sendKeys(dataCellPhone.año);

    cvv.sendKeys(dataCellPhone.cvv);

    correo.sendKeys(ingresoCorreo.correctEmail);

    pagarTargeta.click();

}
// Funcion que permite ingresar a la aplicacion 
exports.ingreCorreoPassword= function () {

    var usrname = element(by.css(selectors.correoPassword.usrname.selector));

    var psw = element(by.xphat(selectors.correoPassword.psw.selector));

    var recaptcha = element(by.xphat(selectors.correoPassword.recaptcha.selector));

    var Siguiente = element(by.css(selectors.Resumencompra.Siguiente.selector));

    objectNavigation.esperaPruebasCss(selectors.Resumencompra.targeta.selector); // Esta funcion espera segundo tras segundo y para cuando encuntra el objeto ingresado

    usrname.sendKeys(ingresoCorreo.correo);

    psw.sendKeys(ingresoCorreo.password);

    recaptcha.click();
    

    Siguiente.click();

}

    

    



