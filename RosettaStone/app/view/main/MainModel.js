/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('RosettaStone.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: [
            '<span class="header_red">SEI</span>',
            '<span class="header_mis">MIS</span>',
            '<span class="header_approval">Online Approvals</span>'
        ].join(' '),
        routeId: ''
    },

    stores: {
        personnel: {
            type: 'personnel'
        }
    }

});
