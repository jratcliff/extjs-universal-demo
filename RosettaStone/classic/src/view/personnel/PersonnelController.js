/**
 * This class is the controller for the personnel view for the application.
 */
Ext.define('RosettaStone.view.personnel.PersonnelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.personnel',

    routes: {
        'personnel': 'onPersonnelRoute',
        'personnel/:email': {
            action: 'onEmailRoute',
            conditions: {
                ':email': '(.*)'
            }
        }
    },

    onPersonnelRoute: function () {
        var viewModel = this.getViewModel(),
            personnelRecord = viewModel.get('personnelRecord');

        if (personnelRecord && !personnelRecord.phantom) {
            this.redirectTo(personnelRecord);
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
    },

    onDetailSaveClick: function () {
        var viewModel = this.getViewModel(),
            personnelRecord = viewModel.get('personnelRecord');

        // this will persist the changes to the server
        // however, in this example, the Personnel model does not have a proxy defined
        // and therefore you will see an attempt made but a 404 error will happen
        personnelRecord.save({
            failure: function (record, operation) {
                // do something if the save failed
            },
            success: function (record, operation) {
                // do something if the save succeeded
            },
            callback: function (record, operation, success) {
                // do something whether the save succeeded or failed
            }
        });
    },

    onDetailCancelClick: function () {
        var viewModel = this.getViewModel(),
            personnelRecord = viewModel.get('personnelRecord');

        personnelRecord.reject();
    },

    onPopupViewClick: function () {
        var viewModel = this.getViewModel(),
            personnelRecord = viewModel.get('personnelRecord');

        if (personnelRecord) {
            Ext.widget('window', {
                bodyPadding: 10,
                // example of passing a viewModel inline
                viewModel: {
                    data: {
                        personnelRecord: personnelRecord
                    }
                },
                bind: {
                    title: '{personnelRecord.name}',
                    html: 'Email: {personnelRecord.email}<br/>Phone: {personnelRecord.phone}'
                }
            }).show();
        }
    },

    /**
     * validitychange listener that updates the isFormValid vm property
     */
    onValidityChange: function (form, isValid) {
        this.getViewModel().set('isFormValid', isValid);
    }
});
