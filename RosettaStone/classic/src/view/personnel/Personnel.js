Ext.define('RosettaStone.view.personnel.Personnel', {
    extend: 'Ext.panel.Panel',
    xtype: 'personnel',

    requires: [
        'RosettaStone.view.personnel.PersonnelController',
        'RosettaStone.view.personnel.PersonnelModel',
        'Ext.form.Panel'
    ],

    controller: 'personnel',
    viewModel: {
        type: 'personnel'
    },

    title: 'Personnel',
    iconCls: 'x-fa fa-user',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    dockedItems: [
        // validation alert
        {
            xtype: 'widgets-alertpanel',
            ui: 'error-panel',
            weight: -10, // negative value will push this panel above the header
            dock: 'top',
            hidden: true,
            bind: {
                hidden: '{!validationMessage}',
                html: '{validationMessage}'
            }
        },
        // pending changes alert
        {
            xtype: 'widgets-alertpanel',
            ui: 'warning-panel',
            weight: -10, // negative value will push this panel above the header
            dock: 'top',
            hidden: true,
            bind: {
                hidden: '{!pendingChangesMessage}',
                html: '{pendingChangesMessage}'
            }
        }
    ],

    items: [
        // grid
        {
            xtype: 'personnel-grid',
            flex: 1
        },
        // detail form
        {
            xtype: 'personnel-details',
            flex: 2,
            hidden: true, // show initially hidden
            bind: {
                hidden: '{!personnelRecord}'
            }
        }
    ]
});
