/**
 * This class is the controller for the user view for the application. 
 */
Ext.define('UniversalApp.view.user.BaseUserController', {
    extend: 'Ext.app.ViewController',

    routes: {
        'users/:userId': 'onUserIdRoute'
    },

    /**
     * This method is called to take action on a route change.
     */
    onUserIdRoute: function (userId) {
        var viewModel = this.getViewModel(),
            userStore = viewModel.get('personnel'),
            userRecord = userStore.getById(userId);

        if (userRecord) {
            viewModel.set('userRecord', userRecord);
        } else {
            this.redirectTo('home');
        }
    },

    onItemSelected: function (sender, record) {
        this.redirectTo(record);
    }
});
