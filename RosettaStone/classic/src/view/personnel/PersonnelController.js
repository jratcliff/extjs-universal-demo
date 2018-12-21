/**
 * This class is the controller for the personnel view for the application.
 */
Ext.define('RosettaStone.view.personnel.PersonnelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.personnel',

    routes: {
        'personnel/:email': {
            action: 'onEmailRoute',
            conditions: {
                ':email': '(.*)'
            }
        }
    },

    onEmailRoute: function (email) {
        var viewModel = this.getViewModel(),
            personnelStore = viewModel.get('personnel'),
            personnelRecord = personnelStore.getById(email);

        if (personnelRecord) {
            viewModel.set('personnelRecord', personnelRecord);
        } else {
            this.redirectTo(Ext.app.Application.instance.getDefaultToken());
        }
    },

    onItemSelected: function (sender, record) {
        this.redirectTo(record);
    }
});
