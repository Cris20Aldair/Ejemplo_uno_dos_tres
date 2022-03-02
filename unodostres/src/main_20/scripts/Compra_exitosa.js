/*
    @fileoverview   enter the all mandatory fields of direction
    @autor          RAO Automation Team
    @version        1.0
    History
        v1.0        script definition
*/

var objectOpenPage = require("../../resources/libraries/lib_portalNavigation.js");

var objectNavigation = require("../../resources/libraries/lib_navigation.js");

var objectTDC = require("../../resources/librariesAcceptanceCriteria/lib_AC_0020-compraexitosa.js");


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

            'ingreTargetaNueva',

            function () {

                try {

                   

                    objectNavigation.ingreTargetaNueva();

                } catch (error) {

                    console.log("error: " + error);

                }

            }

        )

        it(

            'ingreTargetaNueva',

            function () {

                try {

                   

                    objectNavigation.ingreCorreoPassword();

                } catch (error) {

                    console.log("error: " + error);

                }

            }

        )

        it(

            'ingreTargetaNueva',

            function () {

                try {

                   

                    objectTDC.ingreCorreoPassword();

                } catch (error) {

                    console.log("error: " + error);

                }

            }

        )
       
    }

);