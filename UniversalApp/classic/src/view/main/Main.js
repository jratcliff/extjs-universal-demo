/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('UniversalApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'UniversalApp.view.main.MainController',
        'UniversalApp.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            },
            listeners: {
                click: 'onTabClick'
            }
        }
    },

    items: [
        {
            title: 'Home',
            reference: 'home',
            iconCls: 'fa-home',
            html: 'This is the home page'
        },
        {
            title: 'Users',
            reference: 'users',
            iconCls: 'fa-user',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'user-list'
                // xtype: 'main-dataview'
            }]
        },
        {
            title: 'Groups',
            reference: 'groups',
            iconCls: 'fa-users',
            html: 'This is the groups page'
        },
        {
            title: 'Settings',
            reference: 'settings',
            iconCls: 'fa-cog',
            html: 'This is the settings page'
        }
    ]
});
