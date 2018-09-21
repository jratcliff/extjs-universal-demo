/**
 * This view is an example list of people.
 */
Ext.define('UniversalApp.view.user.User', {
    extend: 'Ext.dataview.DataView',
    xtype: 'user-list',

    requires: [
        'UniversalApp.store.Personnel',
        'UniversalApp.view.common.xtemplates.Example'
    ],

    controller: 'user',
    viewModel: 'user',

    cls: 'user-list',
    title: 'Personnel',

    bind: {
        store: '{personnel}',
        selection: '{userRecord}'
    },

    itemTpl: UniversalApp.view.common.xtemplates.Example.tpl,

    listeners: {
        select: 'onItemSelected'
    }
});
