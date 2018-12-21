/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('RosettaStone.view.main.MenuModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main-menu',

    data: {
        expanded: true,
        expandedWidth: 200
    },

    formulas: {
        currentWidth: function (get) {
            var expanded = get('expanded');

            if (expanded) {
                return get('expandedWidth');
            } else {
                return null;
            }
        }
    }

});
