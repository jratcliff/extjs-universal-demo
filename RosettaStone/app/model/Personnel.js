Ext.define('RosettaStone.model.Personnel', {
    extend: 'RosettaStone.model.Base',

    idProperty: 'email',

    fields: [
        'name', 'email', 'phone'
    ],

    toUrl: function () {
        return 'personnel/' + this.getId();
    }
});
