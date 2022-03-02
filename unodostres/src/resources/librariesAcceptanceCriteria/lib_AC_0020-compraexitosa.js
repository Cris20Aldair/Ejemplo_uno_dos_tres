/*      
    @autor                  Unodostres
    @Fecha de creacion      01/03/2022
    @Descripcion            La prueba esta diseñada para validar la realizacion de la compra 
    @Parametros             NumeroCelular-Datos de targeta-User y Passwor 
        @Nombre             Unodostres
        @Fecha              01/03/2022
*/
var objectNavigation = require("../libraries/lib_navigation.js");

//Esta funcion valida que se realizo la compra exitosa 
exports.validarResumendelacompra = function () {

    objectNavigation.esperaPruebasCss('/html/body/div[38]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/div[1]/div[2]/div[2]/a');

    var masdetalle = element(by.css('//*[@id="modal41387131"]/div/div/div/div[1]/table/tbody/tr[1]/td[2]'));

    var Producto = element(by.css('//*[@id="modal41387131"]/div/div/div/div[1]/table/tbody/tr[1]/td[2]'));

    var NumeroTelefono = element(by.css('//*[@id="modal41387131"]/div/div/div/div[1]/table/tbody/tr[1]/td[2]'));

    var Monto = element(by.css('//*[@id="modal41387131"]/div/div/div/div[1]/table/tbody/tr[1]/td[2]'));

    var estado = element(by.css('//*[@id="modal41387131"]/div/div/div/div[1]/table/tbody/tr[1]/td[2]'));

    masdetalle.click();

    expect(Producto.getText()).toEqual('/nRecarga Telcel                                                        '); // Compara que el obejeto ingresado sea igual al resultado esperado

    expect(NumeroTelefono.getText()).toEqual('/n8465433546                                                      ');// Compara que el obejeto ingresado sea igual al resultado esperado

    expect(Monto.getText()).toEqual('/n$20.00                                                        ');// Compara que el obejeto ingresado sea igual al resultado esperado
    
    expect(estado.getText()).toEqual('/nExitosa                                                    ');// Compara que el obejeto ingresado sea igual al resultado esperado
}