/*      
    @autor                  RAO Automation Team.
    @Fecha de creacion      26/07/2021
    @Descripcion            La prueba esta diseñada para validar el flujo de Empleado sector publico privado no pension en SOW.
    @Parametros             Numero celular, INE IFE vigente, comprobante de domicilio, correo electrónico.
        @Nombre             RAO Automation Team.
        @Fecha              22/11/2021
*/
 
var objectNavigation = require("../libraries/lib_navigation.js");

//Esta funcion valida pantalla Resumen de la Compra
exports.validarResumendelacompra = function () {

    objectNavigation.esperaPruebasCss('/html/body/div[38]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/div[1]/div[2]/div[2]/a');

    var masdetalle = element(by.css('//*[@id="modal41387131"]/div/div/div/div[1]/table/tbody/tr[1]/td[2]'));

    var Producto = element(by.css('//*[@id="modal41387131"]/div/div/div/div[1]/table/tbody/tr[1]/td[2]'));

    var NumeroTelefono = element(by.css('//*[@id="modal41387131"]/div/div/div/div[1]/table/tbody/tr[1]/td[2]'));

    var Monto = element(by.css('//*[@id="modal41387131"]/div/div/div/div[1]/table/tbody/tr[1]/td[2]'));

    var estado = element(by.css('//*[@id="modal41387131"]/div/div/div/div[1]/table/tbody/tr[1]/td[2]'));

    masdetalle.click();

    expect(Producto.getText()).toEqual('/nRecarga Telcel                                                        ');

    expect(NumeroTelefono.getText()).toEqual('/n8465433546                                                      ');

    expect(Monto.getText()).toEqual('/n$20.00                                                        ');

    expect(estado.getText()).toEqual('/nExitosa                                                    ');
}