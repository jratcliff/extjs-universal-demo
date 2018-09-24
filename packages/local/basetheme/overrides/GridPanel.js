Ext.define('overrides.grid.Panel', {
    override: 'Ext.grid.Panel',

    initComponent: function () {
        this.rowLines = true;
        this.callParent(arguments);
    }
});
