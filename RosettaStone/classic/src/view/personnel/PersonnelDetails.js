Ext.define('RosettaStone.view.personnel.PersonnelDetails', {
    extend: 'Ext.form.Panel',
    xtype: 'personnel-details',

    title: 'Details',
    bodyPadding: 10,

    listeners: {
        validitychange: 'onValidityChange'
    },

    fieldDefaults: {
        labelAlign: 'top',
        anchor: '100%'
    },

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            items: [
                // Save button is only enabled when the canSave formula evalutes to true
                {
                    text: 'Save',
                    handler: 'onDetailSaveClick',
                    bind: {
                        disabled: '{!canSave}'
                    }
                },
                // Cancel button is only enabled when the personnelRecord is 'dirty'
                // https://docs.sencha.com/extjs/6.6.0/classic/Ext.data.Model.html#property-dirty
                {
                    text: 'Cancel',
                    handler: 'onDetailCancelClick',
                    bind: {
                        disabled: '{!personnelRecord.dirty}'
                        // disabled: '{!isModelDirty}' // this will also work
                    }
                }
            ]
        }
    ],

    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Name',
            allowBlank: false,
            bind: {
                disabled: '{!personnelRecord}',
                value: '{personnelRecord.name}'
            }
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Email',
            bind: {
                disabled: '{!personnelRecord}',
                value: '{personnelRecord.email}'
            }
        },
        {
            xtype: 'textfield',
            fieldLabel: 'name',
            bind: {
                disabled: '{!personnelRecord}',
                value: '{personnelRecord.phone}'
            }
        }
    ]
});
