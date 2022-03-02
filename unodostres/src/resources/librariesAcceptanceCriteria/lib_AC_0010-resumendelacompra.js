/*      
    @autor                  RAO Automation Team.
    @Fecha de creacion      26/07/2021
    @Descripcion            La prueba esta diseñada para validar el flujo de Empleado sector publico privado no pension en SOW.
    @Parametros             Numero celular, INE IFE vigente, comprobante de domicilio, correo electrónico.
        @Nombre             RAO Automation Team.
        @Fecha              22/11/2021
*/
 
var objectNavigation = require("../../resources/libraries/lib_navigation.js");

//Esta funcion valida pantalla Resumen de la Compra
exports.validarResumendelacompra = function () {

    objectNavigation.esperaPruebasCss(selectors.Resumencompra.textResumen.selector);

    var textResumen = element(by.css(selectors.Resumencompra.textResumen.selector));

    expect(textResumen.getText()).toEqual('Resumen de la compra');


}