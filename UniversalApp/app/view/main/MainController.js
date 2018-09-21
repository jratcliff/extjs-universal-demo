/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('UniversalApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    routes: {
        ':view': {
            action: 'showView'
        },
        ':view/:args': {
            action: 'showView',
            conditions: {
                ':args': '(.*)'
            }
        }
    },

    /**
     * This method is called to take action on a route change.
     */
    showView: function (view) {
        var tabpanel = this.getView(),
            tab = this.lookup(view);

        if (tab) {
            console.log('handling route for ' + view);
            tabpanel.setActiveItem(tab);
        } else {
            this.redirectTo('home');
        }
    },

    onTabClick: function (tabPanel) {
        // call redirectTo to make sure the url updates to match the clicked tab
        if (tabPanel.card.reference) {
            console.log('calling redirectTo so that the url matches the tab that was clicked');
            this.redirectTo(tabPanel.card.reference);
        }
    }
});
