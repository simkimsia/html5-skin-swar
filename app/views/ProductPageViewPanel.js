Lastcowboy.views.ProductPageViewPanel=Ext.extend(Ext.Panel,{
    fullscreen: true,
    cls: Ext.is.Phone ? 'iPhoneBody' : 'iPadBody',
    layout: {
        	type: 'vbox'
               
	    },
    defaults: {
        	flex: 1
              },
    scroll: 'vertical',
    loadingText:'Loading...',
    toolbar:new Ext.Toolbar({
              dock : 'top',
              title: 'Shop Name',
              
              items: [
                 {
                     text: 'Home',
                     ui:'back'
            
                 },
                 {
                     xtype:'spacer'
                 },
                 {
            
                     iconMask:true,
                     iconCls:'action',
                     handler:function(){
                         
                            if (Ext.getCmp('socialSharePanel').hidden) {
						Ext.getCmp('socialSharePanel').show({type:'slide'});
                            } else {
						Ext.getCmp('socialSharePanel').hide({type:'slide'});
                                                
                                                
                            }
                               
                      }
                  }
              ]
    }),
    
    
   
    listeners:{
        afterrender:function(){
           
        }
    },
    initComponent:function() {
        

        var tabBarItemsIpad=[
                                {xtype: 'spacer', style:'background: transparent;'},
                                {iconCls: 'home', title: 'Home', style:'background:grey; -webkit-border-radius:0em; border-radius:0em; margin:0em;;'},
				{iconCls: 'search', title: 'Search', style:'background:grey; -webkit-border-radius:0em; border-radius:0em; margin:0em;'},
                                {iconCls: 'user', title: 'User', style:'background:grey; -webkit-border-radius:0em; border-radius:0em; margin:0em;'},
                                {iconCls: 'icnOrder', title: 'Info', style:'background:grey; -webkit-border-radius:0em; border-radius:0em; margin:0em;'}
                            ];
        var tabBarItemsIphone=[
                                 {xtype:'spacer'},
                                 {iconCls: 'home', title: 'Home', style:'min-width:60px !important; min-height:40px !important;'},
                                 {iconCls: 'search', title: 'Search', style:'min-width:60px !important; min-height:40px !important;'},
                                 {iconCls: 'user', title: 'User', style:'min-width:60px !important; min-height:40px !important;'},
                                 {iconCls: 'icnOrder', title: 'Info', style:'min-width:60px !important; min-height:40px !important;'},
                                 {xtype:'spacer'}
				
                            ];
    
        var tabBar =new Ext.TabBar({
                    
		    dock : 'bottom',
		    ui   : 'dark',
                    cls : Ext.is.Phone ? 'iPhoneTabbarButton' : 'iPadTabbarButton',
                    style: Ext.is.Phone ? 'border:0px;' : 'border:0px; top: 93% !important; background: transparent;',
		    //items:  Ext.is.Phone ? barItemsIPhone : barItemsIPad
                    items:Ext.is.Phone ? tabBarItemsIphone : tabBarItemsIpad 
                  
                     
		});
        
      
        var config={
            dockedItems:[this.toolbar,tabBar]
           // items:Ext.is.Phone? [this.socialShare,this.productTitlePanelPhone,this.productCarouselPanel,this.productPricePanel,this.productDetailPanel]: [this.socialShare,this.productCarouselPanel,this.productPricePanel,this.productDetailPanel]
          
    //items: Ext.is.Phone ? [buttonPanel, productTitlePaneliPhone, productCarousel, productPricePanel, productDetailPanel] : [buttonPanel, productCarousel, productPricePanel, productDetailPanel]  
        }
        Ext.apply(this,config);
        Lastcowboy.views.ProductPageViewPanel.superclass.initComponent.apply(this, arguments);   
    }
    
})

