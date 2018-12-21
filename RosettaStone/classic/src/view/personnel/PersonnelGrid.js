/**
 * This view is an example list of people.
 */
Ext.define('RosettaStone.view.personnel.PersonnelGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'personnelgrid',

    requires: [
        'RosettaStone.store.Personnel'
    ],

    title: 'Personnel',

    bind: {
        store: '{personnel}',
        selection: '{personnelRecord}'
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
