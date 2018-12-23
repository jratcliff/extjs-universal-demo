/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('RosettaStone.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Ext.layout.container.Center',
        'Ext.Img',

        'RosettaStone.view.main.MainController',
        'RosettaStone.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: 'card',

    defaultDockWeights: {
        top: 10,
        left: 20,
        bottom: 30,
        right: 40
    },

    dockedItems: [
        // top docked header
        {
            xtype: 'component',
            dock: 'top',
            cls: 'header',
            bind: {
                html: '{name}'
            }
        },
        // menu docked to the left
        {
            xtype: 'main-menu',
            dock: 'left',
            reference: 'mainmenu'
        },
        // bottom docked info
        {
            xtype: 'toolbar',
            ui: 'footer',
            dock: 'bottom',
            weight: 32,
            items: [
                {
                    xtype: 'component',
                    html: 'Do you have comments? Give us feedback!'
                },
                '->',
                {
                    text: 'FAQ',
                    ui: 'transparent-button'
                },
                '-',
                {
                    text: 'Project Wiki',
                    ui: 'transparent-button'
                },
                '-',
                {
                    text: 'Issue Tracker',
                    ui: 'transparent-button'
                },
                '-',
                {
                    text: 'Release Notes',
                    ui: 'transparent-button'
                }
            ]
        },
        // bottom docked info
        {
            xtype: 'container',
            dock: 'bottom',
            layout: {
                type: 'hbox'
            },
            cls: 'footer',
            weight: 31,
            items: [
                {
                    xtype: 'image', // TODO - replace with svg image
                    src: 'resources/images/Software_Engineering_Institute_Unitmark_White.svg',
                    cls: 'footer_image'
                },
                {
                    xtype: 'component',
                    cls: 'footer_copyright',
                    flex: 1,
                    html: [
                        '&copy; 2018 Carnegie Mellon University',
                        'Proprietary. SEI Internal Use Only | Terms of Use'
                    ].join('<br/>')
                }
            ]
        }
    ],

    defaults: {
        bodyPadding: 20
    },

    items: [
        // loading page while a new view is added
        {
            xtype: 'container',
            layout: 'center',
            items: [{
                xtype: 'component',
                html: 'Loading...'
            }]
        },
        // placeholder for unknown routes
        {
            xtype: 'unknownroute'
        }
    ]
});
