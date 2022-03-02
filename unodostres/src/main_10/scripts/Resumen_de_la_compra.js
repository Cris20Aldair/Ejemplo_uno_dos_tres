/*
    @fileoverview   enter the all mandatory fields of direction
    @autor          RAO Automation Team
    @version        1.0
    History
        v1.0        script definition
*/

var objectOpenPage = require("../../resources/libraries/lib_portalNavigation.js");

var objectNavigation = require("../../resources/libraries/lib_navigation.js");

var objectTDC = require("../../resources/librariesAcceptanceCriteria/lib_AC_0010-resumendelacompra.js");


describe(

    '172862_FUN_0060_ATC_Sanity',

    function () {

        it(

            'originacionPortalundostres',

            function () {
                try {

                objectOpenPage.originacionPortalundostres();  
                
            } catch (error) {

                console.log("error: " + error);

            }


            }

        )

        it(

            'ingreRecargaCelular',

            function () {

                try {

                   

                        objectNavigation.ingreRecargaCelular();

                } catch (error) {

                    console.log("error: " + error);

                }

            }

        )

        it(

            'ingreRecargaCelular',

            function () {

                try {

                   

                    objectTDC.validarResumendelacompra();

                } catch (error) {

                    console.log("error: " + error);

                }

            }

        )
       
    }

);