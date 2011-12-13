

Lastcowboy.controllers.LastcowboyController=Ext.regController("lastcowboy",{
   index:function(options){
       //this.showProductsDetails(options);
   },
   socialShare:function(options){
       
   },
   showProductDetails:function(options){
   console.log("In show Product details")
   Lastcowboy.views.productPagePanel.setLoading(true);
   
   Ext.Ajax.request({
			url:'public/resources/data/productdetails.json',
			
			method: 'GET',
                        headers: {
                          
                                             'Accept':'application/json, text/javascript, */*; q=0.01'
                                            	
                                      },
                        scope: this,
			success: function (result) {
                               var i,len;
                               var cardItems=new Array();
                               
                               Lastcowboy.views.response=Ext.util.JSON.decode(result.responseText);
                               
                               
                               
                               
                               var socialShare = new Ext.Panel({
                                                        width: Ext.is.Phone ? '100%' : '100%',
                                                        fullscreen: false,
                                                        id : 'socialSharePanel',

                                                        style: Ext.is.Phone ? 'height: 40px !important; background:#F5F5F1;' : 'height: 60px !important; background:#F5F5F1;',
                                                        items: [{
                                                               layout: {
                                                                   	type: 'vbox',
                                                                       align: 'center'
                                                                },
                                                                defaults: {
                                                                    xtype: 'button',
                                                                    flex: 1
                                                                },
                                                                items: [{
                                                                            cls: Ext.is.Phone ? 'iPhoneFacebook' : 'iPadFacebook',
                                                                            style: Ext.is.Phone ? 'top : 5px; left : -114px; width : 50px; height:24px !important;' : 'top : 8px; left : -258px; width : 122px; height:38px !important;',
                                                                            handler : function(){
                                                                                FB.ui(
                                                                                        {
                                                                                            method: 'stream.share',
                                                                                            //method:'feed',
                                                                                            display:'touch',
                                                                                            message: 'I came across this art event worth checking out: '

                                                                                        },
                                                                                        function(response) {
                                                                                             if (response && response.post_id) {
                                                                                                 // alert('Post was published.');
                                                                                            } else {
                                                                                            //alert('Post was not published.');
                                                                                             }
                                                                                        }
                                                                                );
                                                                             // window.location.href="http://www.facebook.com/sharer/sharer.php?u="+document.location.href;
                                                                            }
                                                                        }, {
                                                                             cls: Ext.is.Phone ? 'iPhoneTwitter' : 'iPadTwitter',
                                                                             style: Ext.is.Phone ? 'top : -19px; left : -39px; width : 50px; height:24px !important;' : 'top : -30px;  left : -86px; width : 122px; height:38px !important;',
                                                                             handler:function(){
                                                                             window.location.href="https://twitter.com/share?url="+encodeURI(document.location.href).replace('#','%23');
                                                                        }
                                                                        }, {
                                                                             cls: Ext.is.Phone ? 'iPhoneeMail' : 'iPadeMail',
                                                                             style: Ext.is.Phone ? 'top : -43px; left : 36px; width : 50px; height:24px !important;' : 'top : -68px; left : 86px; width : 122px; height:50px;',
                                                                             handler: function(){
                                                                                 window.location.href="mailto:example@example.com?subject=I came across this product  worth checking out & body={shareurl}";
                                                                             }
                                                                        }, {
                                                                             cls: Ext.is.Phone ? 'iPhoneeChat' : 'iPadeChat',
                                                                             style: Ext.is.Phone ? 'top : -67px; left : 111px; width : 50px; height:24px !important;' : 'top : -105px; left : 258px; width : 122px; height:38px !important;',
                                                                             handler:function(){
                                                                                  window.location.href="sms:+444?body={shareurl}"
                                                                               }
                                                                        }
                                                                ]
                                                         }]
		
                            });
                            var productTitlePanelPhone=new Ext.Panel({
                                    cls : Ext.is.Phone ? 'iPhoneProductTitle' : undefined,
                                    html : Ext.is.Phone ? '<div id="prodTitleIPhoneId"><table><tr><td><b>'+Lastcowboy.views.response.products[0].title+'</b></tr></td></table></div>' : undefined
                            });
                            var productTitlePanelOther=new Ext.Panel({
				height : Ext.is.Phone ? undefined : 150,
				html : Ext.is.Phone ? undefined : '<div id="prodTitleId" valign="top"><table align="left"><tr><td><b><font size="12">'+Lastcowboy.views.response.products[0].title+'</font></b></tr></td></table></div>'
                            });
    
  
                            var productDetailPanel=new Ext.Panel({
                                fullscreen: false,
//                              style: Ext.is.Phone ? 'background : transparent; padding : 15px; top : 137px;' : undefined,
                                cls : Ext.is.Phone ? 'iPhoneProductDetailPanel' : 'iPadProductDetailPanel', 
                                html: '<div align="justify" id="productDetailID">'+Lastcowboy.views.response.products[0].desc+'</div>'
                            });
                            var productPriceButtonPanel= new Ext.Panel({
				style : Ext.is.Phone ? 'left:100px; top : -25px;' : 'left:119px; top:-112px; height:47px; width:264px',
				items : [{
					xtype : 'button',
					iconCls : 'icnFavourite',
					style : Ext.is.Phone ? 'z-index:10000; left:0px; width : 31.5px; height : 31.5px;' : 'width : 45px; height : 44px;',
					ui : 'confirm',
					iconMask : true,
					handler : function(){
						
					}
				},{
					xtype : 'button',
					text : 'Add to Cart',
					ui : 'confirm',
					style : Ext.is.Phone ? 'width:100px; left:40px; top:-30px; height:31.5px;' : 'width:150px; left:60px; top:-44px; height:44px;',
					handler : function(){
						
					}
				}]
                               });
                               this.productPricePanel=new Ext.Panel({
                                    scope:this,
                                    cls : Ext.is.Phone ? 'iPhoneProductPricePanel' : 'iPadProductPricePanel',
                                    items : [productTitlePanelOther,
                                        {
                                            xtype : 'panel',
                                            height: Ext.is.Phone ? undefined : 100,
                                            html : '<div id="priceID"><table><tr><td><font color="green">'+Lastcowboy.views.response.products[0].price+'</font>&nbsp;USD</tr></td></table></div>'
                                        },productPriceButtonPanel
                                    ]
                                });
                                
                               
                               // Ext.getCmp('productcarousel').removeAll(true);
                               if(Lastcowboy.views.response.products[0].images.length > 1){
                                
                                    for ( i = 0, len = Lastcowboy.views.response.products[0].images.length; i < len; i += 1) {
                                         cardItems.push({
                                                 html:Ext.is.Phone ? '<table><tr><td align="center"><img class="iPhoneImg" src="'+Lastcowboy.views.response.products[0].images[i]+'"></img></td></tr></table>' : '<table><tr><td align="center"><img class="iPadImg" src="'+Lastcowboy.views.response.products[0].images[i]+'"></img></td></tr></table>'
                                            });
                                
                                    }
                                
                                    this.productCarousel = new Ext.Carousel({
                                        fullscreen: false,
                                        id : 'carouselProduct',
                                      
                                         cls: Ext.is.Phone ? 'iPhoneCarousel' : 'iPadCarousel',
				        items : [cardItems]
                                     });
                                 
                                }
                                else if(this.response.products[0].images.length==1){
                                  
                                  this.productCarousel = new Ext.Panel({
                                        fullscreen: false,

                                        style: Ext.is.Phone ? 'iPhoneSingleProduct' : 'iPadSingleProduct',
                                        html : Ext.is.Phone ? '<table><tr><td align="center"><img class="iPhoneImg" src="'+Lastcowboy.views.response.products[0].images[i]+'"></img></td></tr></table>' : '<table><tr><td align="center"><img class="iPadImg" src="'+Lastcowboy.views.response.products[0].images[i]+'"></img></td></tr></table>'
                                    });
                                }
                                if(Ext.is.Phone){
                                     
                                     Lastcowboy.views.productPagePanel.add([socialShare, productTitlePanelPhone, this.productCarousel,this.productPricePanel, productDetailPanel,]);
                                }
                                else{
                                     
                                     Lastcowboy.views.productPagePanel.add([socialShare, this.productCarousel,this.productPricePanel, productDetailPanel,]);
                                     //Lastcowboy.views.productPagePanel.add([this.productCarousel]);
                                    
                                }
                                    
                                
                               
                                Lastcowboy.views.productPagePanel.doLayout();
                                Lastcowboy.views.productPagePanel.setLoading(false);
                                socialShare.hide();
                                
                          
			},
			failure: function ( result, request) { 
                                Lastcowboy.views.productPagePanel.setLoading(false);
				Ext.MessageBox.alert('Failed','Failed to load product data'); 
			} 
		}); 
    
   }
});


