/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Lastcowboy.views.NavigationPanel=Ext.extend(Ext.Panel,{
	
	initComponent:function(){
		
		this.tabpanel=new Ext.TabPanel({
 						    fullscreen: true,
   						    ui        : 'dark',
                                                    id:'navigation',
                                                    sortable  : true,
   							items: [
								
                                                                //new Lastcowboy.views.carouselViewPanel(),
                                                                new Lastcowboy.views.productDetailsPhoneViewPanel(),
                                                                {
                                                                   iconCls:'search',
                                                                   html:'Not Implemented' 
                                                                },
                                                                {
                                                                   
                                                                    iconCls:'user',
                                                                    html:'Not Implemented'
                                                                },
                                                                {
                                                                    
                                                                    iconCls:'icnOrder',
                                                                    html:'Not Implemented'
                                                                }
  							  ],
							  tabBar: {
               							 dock: 'bottom',
              							 scroll: {
                  							 direction: 'horizontal',
                							 scrollbars: false
               						 		 },
              							 layout: {
                			  				pack: 'center'
                						  }
          							  },
                                                          listeners:{
                                                             
                                                          }
		});
		var config={
			items:[this.tabpanel]
		};
		Ext.apply(this, config);
        Lastcowboy.views.NavigationPanel.superclass.initComponent.apply(this, arguments);
	}
	
});
