Ext.define('overrides.grid.Panel', {
    override: 'Ext.grid.Panel',

    initComponent: function () {

        // force rowLines to false REGARDLESS if they are being explicitly set
        this.rowLines = false;

        // force columnLines to false UNLESS it is being explicitly set
        if (!this.hasOwnProperty('columnLines')) {
            this.columnLines = false;
        }

        // allow grid instances to set their own viewConfig
        // BUT merge it into our own viewConfig so we can guarantee certain configs are set
        this.viewConfig = Ext.merge({
            stripeRows: false,
            emptyText: '<div style="padding:10px;">No Results have been found...</div>'
        }, this.viewConfig || {});

        this.callParent(arguments);
    }
});
