/**
 * This view is an example list of people.
 */
Ext.define('RosettaStone.view.personnel.PersonnelGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'personnel-grid',

    requires: [

    ],

    reference: 'personnelGrid',

    bind: {
        store: '{personnel}',
        selection: '{personnelRecord}'
    },

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        items: [{
            text: 'View in popup',
            bind: {
                // binding example to the 'selection' property of the grid
                // that has a reference name of 'personnelGrid'
                disabled: '{!personnelGrid.selection}'
            },
            handler: 'onPopupViewClick'
        }]
    }],

    columns: [
        {
            text: 'Name',
            dataIndex: 'name',
            flex: 1
        }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
