Ext.define('RosettaStone.view.main.MenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main-menu',

    collapse: function () {
        this.getViewModel().set('expanded', false);
    },

    expand: function () {
        this.getViewModel().set('expanded', true);
    },

    onToggleExpandClick: function (treelist, info) {
        var viewModel = this.getViewModel(),
            curExpanded = viewModel.get('expanded');

        viewModel.set('expanded', !curExpanded);
    },

    /**
     * Handler for when a navigation menu item is clicked
     * that will call the #redirectTo method to process the route change
     */
    onNavigationClick: function (treelist, info) {
        var record = info.node,
            routeId = record.get('routeId');

        // as long as we are NOT dealing with a 'toggle' event,
        // which just means the user has expanded or collapsed a tree node,
        // then we will process the click
        if (!info.toggle && routeId) {
            // redirectTo will change the url and call any route handlers
            this.redirectTo(routeId);
        }
    },

    onSettingsClick: function () {
        Ext.Msg.alert('Settings', 'Coming Soon');
    },

    onLogoutClick: function () {
        Ext.Msg.alert('Logout', 'Coming Soon');
    }

});
