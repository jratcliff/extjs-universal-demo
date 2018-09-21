/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('UniversalApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',
        'Ext.layout.Fit'
    ],

    controller: 'main',
    viewModel: 'main',

    tabBarPosition: 'bottom',

    listeners: {
        tabchange: 'onTabChange'
    },

    defaults: {
        tab: {
            iconAlign: 'top'
        }
    },

    items: [
        {
            title: 'Home',
            reference: 'home',
            iconCls: 'x-fa fa-home',
            html: 'This is the home page'
        },
        {
            title: 'Users',
            reference: 'users',
            iconCls: 'x-fa fa-user',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'user-list'
            }]
        },
        {
            title: 'Groups',
            reference: 'groups',
            iconCls: 'x-fa fa-users',
            html: 'This is the group page'
        },
        {
            title: 'Settings',
            reference: 'settings',
            iconCls: 'x-fa fa-cog',
            html: 'This is the settings page'
        }
    ]
});
