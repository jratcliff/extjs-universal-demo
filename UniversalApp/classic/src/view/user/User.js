/**
 * This view is an example list of people.
 */
Ext.define('UniversalApp.view.user.User', {
    extend: 'Ext.grid.Panel',
    xtype: 'user-list',

    requires: [
        'Ext.grid.plugin.DragDrop',
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

    viewConfig: {
        stripeRows: true,
        plugins: {
            gridviewdragdrop: {
                containerScroll: true,
                dragGroup: 'dd-grid-to-grid-group2',
                dropGroup: 'dd-grid-to-grid-group1',

                // The right hand drop zone gets special styling
                // when dragging over it.
                dropZone: {
                    overClass: 'dd-over-gridview'
                }
            }
        }
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
