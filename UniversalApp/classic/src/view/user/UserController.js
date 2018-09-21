/**
 * This class is the controller for the user view for the application. 
 */
Ext.define('UniversalApp.view.user.UserController', {
    extend: 'UniversalApp.view.user.BaseUserController',
    alias: 'controller.user',

    /**
     * Handler for the users/:userId route that is
     * specific to the classic toolkit.
     */
    onUserIdRoute: function (userId) {
        this.callParent([userId]);
        console.log('do something specific for classic');
    }
});
