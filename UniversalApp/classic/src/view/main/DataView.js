Ext.define('UniversalApp.view.main.DataView', {
    extend: 'Ext.view.View',
    xtype: 'main-dataview',

    bind: {
        store: '{personnel}'
    },

    itemSelector: 'div',

    /* eslint-disable indent */
    tpl: [
        '<tpl for=".">',
            '<div>{name}</div>',
        '</tpl>'
    ],
    /* eslint-enable indent */

    listeners: {
        select: 'onItemSelected'
    }
});
