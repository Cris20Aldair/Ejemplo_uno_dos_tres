/*      
    @autor                  Unodostres
    @Fecha de creacion      01/03/2022
    @Descripcion            La prueba esta diseñada para validar la pantalla de Resumen de la compra
    @Parametros             NumeroCelular
        @Nombre             Unodostres
        @Fecha              01/03/2022
*/
 
var objectNavigation = require("../../resources/libraries/lib_navigation.js");

//Esta funcion valida pantalla Resumen de la Compra
exports.validarResumendelacompra = function () {

    objectNavigation.esperaPruebasCss(selectors.Resumencompra.textResumen.selector); // Esta funcion espera segundo tras segundo y para cuando encuntra el objeto ingresado

    var textResumen = element(by.css(selectors.Resumencompra.textResumen.selector));

    expect(textResumen.getText()).toEqual('Resumen de la compra'); // Compara que el obejeto ingresado sea igual al resultado esperado


}