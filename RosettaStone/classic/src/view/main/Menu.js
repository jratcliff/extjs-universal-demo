Ext.define('RosettaStone.view.main.Menu', {
    extend: 'Ext.panel.Panel',
    xtype: 'main-menu',

    requires: [
        'RosettaStone.view.main.MenuController',
        'RosettaStone.view.main.MenuModel',
        'Ext.list.Tree'
    ],

    controller: 'main-menu',
    viewModel: {
        type: 'main-menu'
    },

    bind: {
        width: '{currentWidth}'
    },

    cls: 'main-menu',
    componentCls: 'sidebar',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    defaults: {
        xtype: 'treelist',
        ui: 'nav',
        micro: true,
        expanderFirst: false,
        expanderOnly: true,
        ownerSelector: 'sidebar',
        bind: {
            micro: '{!expanded}'
        }
    },

    items: [
        // Navigation Tree (dynamically built from the store)
        {
            reference: 'navigationTree',
            flex: 1,
            store: 'NavigationMenuTree',
            listeners: {
                itemclick: 'onNavigationClick'
            }
        },
        // Expand/Collapse Tree (that only contains 1 item)
        {
            cls: 'menu-expand-item',
            defaults: {
                // adds a setFloated method that does nothing
                // this will then override the framework's default behavior
                // of floating the item when the treelist is in micro mode
                setFloated: Ext.emptyFn,
                hoverCls: '',
                rowHoverCls: ''
            },
            store: {
                root: {
                    children: [{
                        text: '&nbsp;',
                        iconCls: 'menu-expand-icon',
                        selectable: false,
                        leaf: true
                    }]
                }
            },
            listeners: {
                itemclick: 'onToggleExpandClick'
            }
        }
    ]
});
