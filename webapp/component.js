sap.ui.define(
    [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
    ],
    function(UIComponent, JSONModel, ResourceModel){
        "use strict"; 
        return UIComponent.extend("sap.ui.walkthrough.Component", {
            metadata : {
                manifest: "json"
            },
            init: function(){
                //call the init function of the parent ui component
                UIComponent.prototype.init.apply(this, arguments); 
                    // set data models
                    var oData = {
                        recipient: {
                            name: "UI5"
                        }
                    };
                    var oModel = new JSONModel(oData);
                    this.setModel(oModel);
                }
        })
    }
)