Ext.define('UniversalApp.model.Personnel', {
    extend: 'UniversalApp.model.Base',

    fields: [
        'name', 'email', 'phone'
    ],

    toUrl: function () {
        return 'users/' + this.getId();
    }
});
