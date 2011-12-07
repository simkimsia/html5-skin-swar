
Lastcowboy.views.productDetailsTabletViewPanel=Ext.extend(Ext.Panel,{
    scroll:'vertical',
    
    layout:  {
        type : 'vbox',
        align: 'stretch'
    },
    defaults:{
     // flex:1  
    },
    
    iconCls:'search',
    id:'carouselview',
    
    socialShare:new Ext.Panel({
        //dock:'top',
        
        hidden:true,
        tpl:'<div class="sharepanel">\
                                        <div class="btn" cmd="fbshare">\
                                            <div class="fbshare" onClick=Lastcowboy.fbdialog()></div>\
                                        </div>\
                                        <div class="btn" cmd="tweetshare">\
                                           <a href="https://twitter.com/share?text=I came across this product  worth checking out: {shareurl}"   target="_blank"> <div class="tweetshare" cmd="tweetshare"></div></a>\
                                        </div>\
                                        <div class="btn" cmd="mailshare">\
                                            <a href="mailto:?subject="I came across this product  worth checking out"&body={shareurl}"><div class="mailshare" cmd="mailshare"></div></a>\
                                        </div>\
                                        <div class="btn" cmd="smsshare">\
                                            <a href="sms:?body={shareurl}"><div class="smsshare" cmd="smsshare"></div></a>\
                                        </div>\
              </div>',
        id:'socialsharetab',
        listeners:{
           
        }
    }),
    toolbar:new Ext.Toolbar({
        dock : 'top',
        title: 'Product details',
        cls:'artTitle',
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
                console.log('inside action');
                if(Lastcowboy.socialshare===true)
                    {
                       
                
                       Lastcowboy.socialshare=false;
                       Ext.getCmp('socialsharetab').hide({type:'slide'});
                    }
                else
                    {
                       Lastcowboy.socialshare=true;
                       Ext.getCmp('socialsharetab').update({shareurl:encodeURI(document.location.href).replace('#','%23')});
                       Ext.getCmp('socialsharetab').show({type:'slide'}); 
                    }
            }
        }
        ]
    }),
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
                               var i,len;
                               var cardItems=new Array();
                               var response=Ext.util.JSON.decode(result.responseText);
                               var oneimage=new Ext.Panel({
                                    flex:1,
                                    id:'oneimage',
                                    tpl:'<img  src={src} class="horizontal_resize"></img>'
                                });
                               var carousel = new Ext.Carousel({
                                     id:'productcarousel',
                                     ui       : 'light',
                                     direction: 'horizontal',
                                     flex:1,
            
                                    style:{
                                           background : '#000'
                                        },
                                     items: [
        
                                     ]
                                });
                               //Ext.getCmp('productcarousel').removeAll(true);
                               if(response.products[0].images.length > 1){
                                console.log('in carousel data');
                                for ( i = 0, len = response.products[0].images.length; i < len; i += 1) {
                                       cardItems.push({
                                        html:"<img src="+response.products[0].images[i]+" class=horizontal_resize></img>"
                                        });
                                
                                 }
                                
                                 //Ext.getCmp('productcarousel').add(cardItems)
                                 //Ext.getCmp('productcarousel').doLayout();
                                 carousel.add(cardItems);
                               
                                 Ext.getCmp('carouselcontainer').add(carousel);
                                 Ext.getCmp('carouselcontainer').doLayout();
                                }
                                else if(response.products[0].images.length==1){
                                  
                                  //  Ext.getCmp('oneimage').update(response.products[0].images[i]);
                                   Ext.getCmp('carouselcontainer').add('oneimage');
                                 Ext.getCmp('carouselcontainer').doLayout();
                                 console.log(response.products[0].images[0]);
                                 oneimage.update({src:response.products[0].images[0]});
                                }
                                //Ext.getCmp('ptitle').update(response.products[0].title);
                                Ext.getCmp('pdetails').update({title:response.products[0].title,price:response.products[0].price,desc:response.products[0].desc});
                          
			},
			failure: function ( result, request) { 
                                
				Ext.MessageBox.alert('Failed','Failed to load product data'); 
			} 
		});
             
                                
            
    
        }
    },
    initComponent:function() {
        Lastcowboy.fbdialog=function(){
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
        };
         this.sharePanel=new Ext.Panel({
             
             layout:'fit',
             height:80,
             items:[this.socialShare]
         });
         this.productdetailspanel=new Ext.Panel({
            // dock:'bottom',
             padding:20,
             layout:'fit',
             tpl:['<div class="tabletproductdetails"><div class="tabproducttitle">{title}</div><div class="tabpriceblock"><div class="tabproductprice">{price}</div><div class="cartbtn">Add to cart</div></div><div>{desc}</div></div>'],
             id:'pdetails'
            
         });
       
        this.buttonpanel=new Ext.Panel({
            dock:'bottom',
            height:80,
            html:'<div class="buttonpanel"><div class="btnCart"></div><div class="btnUser"></div><div class="btnSearch"></div><div class="btnHome"></div></div>'
        })
     
         this.carouselContainer=new Ext.Panel({
            id:'carouselcontainer',
            scope:this,
           // height:200,
            layout:'fit',
            padding:20,
            
            items:[]
            //items:[this.carousel]
        });
        this.productcontainer=new Ext.Panel({
             flex:1,
             layout:  {
                type : 'hbox',
                align: 'stretch'
                },
             defaults:{
                 flex:1  
            
                },
             items:[this.carouselContainer,this.productdetailspanel]
                
         });    
        var config={
            
            dockedItems:[
                               
                    this.toolbar,
                   // this.socialShare,
                    this.buttonpanel
                    
                    
                ],
            items:[
                         
                    
                   // this.carousel,
                 //  this.carouselContainer,
                   // this.productdetailspanel
                   
                   this.sharePanel,
                   this.productcontainer
                ]
               
        };
        Ext.apply(this, config);
        Lastcowboy.views.productDetailsTabletViewPanel.superclass.initComponent.apply(this, arguments);       
                
    }
});






