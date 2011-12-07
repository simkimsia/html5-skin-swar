/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Lastcowboy.views.ProductDetailsViewPanel=Ext.extend(Ext.Panel,{
    scroll:'vertical',
    layout: {
        type : 'vbox',
        align: 'stretch'
    },
    iconCls:'home',
    id:'productdetails',
    
    
    listeners:{
        afterrender:function(){
            Ext.Ajax.request({
			url:'public/resources/data/productdetails.json',
			
			method: 'GET',
                        headers: {
                          
                                             'Accept':'application/json, text/javascript, */*; q=0.01'
                                            	
                                      },
                        scope: this,
			success: function (result) { 
                                var i;
                                var len;
                                var response=Ext.util.JSON.decode(result.responseText);
                                console.log(response.products[0].images[0]);
				
                                var cardItems=new Array();
                                
                                
                               //Ext.getCmp('carouselpanel').removeAll(true);
                                for (i = 0, len = response.products[0].images.length; i < len; i += 1) {
                                   cardItems.push(new Ext.Container({
                                    //scroll: 'horizontal',
                                    hieght:450,
                                    styleHtmlContent: true,
                                    html:"<img src="+response.products[0].images[i]+" class=horizontal_resize></img>"
                                    })
                                );
                               /*Ext.getCmp('carouselpanel').add(new Ext.Container({
                                    //scroll: 'horizontal',
                                    styleHtmlContent: true,
                                    html:"<img src="+response.products[0].images[i]+" class=horizontal_resize></img>"
                                    }));*/
                             //   Ext.getCmp('carouselpanel').add(cardItems)
                              //  Ext.getCmp('carouselpanel').doComponentLayout(); 
                                  Ext.getCmp('carouselpanel').doLayout();
                             }
                           
                             //Ext.getCmp('carouselpanel').removeAll(true);// force the destroy
                             
                           /* Ext.getCmp('carouselpanel').add(cardItems);   
                           Ext.getCmp('carouselpanel').doComponentLayout();
                           Ext.getCmp('carouselpanel').doLayout();*/
                            //Ext.getCmp('carouselcontainer').add(carousel);
                           Ext.getCmp('carouselcontainer').doLayout();
                           Ext.getCmp('productdetails').doLayout();
                             console.log(cardItems.length);
                             //console.log(Ext.getCmp('carouselpanel').items.length)
			},
			failure: function ( result, request) { 
                                
				Ext.MessageBox.alert('Failed','Failed to load product data'); 
			} 
		});
             
                                
            
     //Ext.getCmp('productdetails').add(panel);
    // Ext.getCmp('productdetails').doComponentLayout();
     
           /* Ext.dispatch({
                controller:'Lastcowboy',
                action:'index'
            });*/
        }
    },
    initComponent:function() {
         
         this.productdetailspanel=new Ext.Panel({
             tpl:'<div>{price}</div><div>{desc}</div>',
             id:'pdetails'
         });
         
             
         
         
         this.carouselpanel = new Ext.Panel({
            cls: 'cards',
            id:'carouselcontainer',
            
             
            items: [
        
                {
                    xtype    : 'carousel',
            ui       : 'light',
            direction: 'vertical',
            id:'carouselpanel',
            
            items: [
            {
                    html: '<p>Carousels can be vertical and given a ui of "light" or "dark".</p>',
                    cls : 'card card1'
                },
                {
                    html: 'Card #2',
                    cls : 'card card2'
                },
                {
                    html: 'Card #3',
                    cls : 'card card3'
                }
            ]
                   
                }
             ]
    });
        
        
        var config={
            
            dockedItems:[
                               
                   // this.toolbar
                ],
            items:[
                  this.carouselpanel,this.productdetailspanel
            ]
        };
        Ext.apply(this, config);
        Lastcowboy.views.ProductDetailsViewPanel.superclass.initComponent.apply(this, arguments);       
                
    }
});

