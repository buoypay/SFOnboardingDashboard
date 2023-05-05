
/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

({
    countUpHelper : function(component) {
        var smap = component.get('v.summaryMap');
        var smapSecond = component.get('v.summaryMapSecond');

        var psumval = component.get('v.psumval');
        var psumvalSecond = component.get('v.psumvalSecond');

        if(smap){
            var options = {
                useEasing : true, 
                useGrouping : true, 
                separator : ',', 
                decimal : '.', 
            };
            var optionsSecond = {
                useEasing : true, 
                useGrouping : true, 
                separator : ',', 
                decimal : '.', 
            };
            //console.log(component.get('v.isCurrency'));
            var ftyp = component.get('v.rsFld');
            var ftypSecond = component.get('v.rsFldSecond');

            var deci = 0;
            if(ftyp == "CURRENCY"){
                options.prefix = "Supply: $";
                optionsSecond.prefix = "Demand: $";
            }else if(ftyp == "DOUBLE"){
                deci = 2;
            }
            /*if(component.get('v.isCurrency')){
                options.prefix = $A.get("$Locale.currency");
            }*/
            if(!isNaN(smap[component.get('v.pickvalue')])){
                var demo = new CountUp(component.find('cup').getElement(), psumval, smap[component.get('v.pickvalue')], deci, 1, options);
                demo.start();
                component.set('v.psumval',smap[component.get('v.pickvalue')]);
            }
            if(!isNaN(smapSecond[component.get('v.pickvalue')])){
                var demo = new CountUp(component.find('cupSecond').getElement(), psumvalSecond, smapSecond[component.get('v.pickvalue')], deci, 1, optionsSecond);
                demo.start();
                component.set('v.psumvalSecond',smapSecond[component.get('v.pickvalue')]);
            }
        }
    }
})