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
    //cls: Ext.is.Phone ? 'iPhoneBody' : 'iPadBody',
    initComponent: function() {
       
        Ext.apply(Lastcowboy.views,{
                            
                          productPagePanel: new Lastcowboy.views.ProductPageViewPanel()
                         
                        
		});
        Ext.apply(this, {
            dockedItems: [
                
            ],

            items: [
                
                Lastcowboy.views.productPagePanel
            ]
        });

        Lastcowboy.Viewport.superclass.initComponent.apply(this, arguments);
    }

    
});

