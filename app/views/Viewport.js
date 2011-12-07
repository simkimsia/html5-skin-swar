/**
 * @class Lastcowboy.Viewport
 * @extends Ext.Panel
 * This is a default generated class which would usually be used to initialize your application's
 * main viewport. By default this is simply a welcome screen that tells you that the app was 
 * generated correctly.
 */
Lastcowboy.Viewport = Ext.extend(Ext.Panel, {
    id        : 'viewport',
    layout    : 'card',
    fullscreen: true,

    initComponent: function() {
        var pdetails;
        if(!Ext.is.Phone){
            pdetails=new Lastcowboy.views.productDetailsTabletViewPanel();
        }
        else{
            pdetails=new Lastcowboy.views.NavigationPanel()
        }
        Ext.apply(Lastcowboy.views,{
			 //navigationPanel:new Lastcowboy.views.NavigationPanel()
                       navigationPanel:pdetails
                         
                        
		});
        Ext.apply(this, {
            dockedItems: [
                
            ],

            items: [
                Lastcowboy.views.navigationPanel
            ]
        });

        Lastcowboy.Viewport.superclass.initComponent.apply(this, arguments);
    }

    
});

