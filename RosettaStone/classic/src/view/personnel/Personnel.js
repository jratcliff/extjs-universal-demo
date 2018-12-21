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

    items: [
        {
            xtype: 'personnelgrid',
            reference: 'personnelgrid',
            flex: 1
        },
        {
            xtype: 'form',
            title: 'Details',
            bodyPadding: 10,
            width: 200,
            fieldDefaults: {
                labelAlign: 'top'
            },
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Name',
                    bind: {
                        value: '{personnelRecord.name}'
                    }
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Email',
                    bind: {
                        value: '{personnelRecord.email}'
                    }
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'name',
                    bind: {
                        value: '{personnelRecord.phone}'
                    }
                }
            ]
        }
    ]
});
