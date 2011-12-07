/**
 * This file sets application-wide settings and launches the application when everything has
 * been loaded onto the page. By default we just render the applications Viewport inside the
 * launch method (see app/views/Viewport.js).
 */ 
Lastcowboy = new Ext.Application({
    defaultTarget: "viewport",
    name: "Lastcowboy",
    defaultUrl: 'Lastcowboy/p1',
    launch: function() {
        Lastcowboy.socialshare=false;
        this.viewport = new Lastcowboy.Viewport();
    }
});
