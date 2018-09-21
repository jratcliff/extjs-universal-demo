/**
 * This view is an example list of people.
 */
Ext.define('UniversalApp.view.user.User', {
    extend: 'Ext.grid.Panel',
    xtype: 'user-list',

    requires: [
        'UniversalApp.store.Personnel'
    ],

    controller: 'user',
    viewModel: 'user',

    cls: 'user-list',
    title: 'Personnel',

    bind: {
        store: '{personnel}',
        selection: '{userRecord}'
    },

    columns: [
        {
            text: 'Name',
            dataIndex: 'name'
        },
        {
            text: 'Email',
            dataIndex: 'email',
            flex: 1
        },
        {
            text: 'Phone',
            dataIndex: 'phone',
            flex: 1
        }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
