Ext.define('RosettaStone.view.main.UnknownRoute', {
    extend: 'Ext.panel.Panel',
    xtype: 'unknownroute',

    title: 'Unknown',

    itemId: 'unknownroute',

    bind: {
        html: 'No UI found for the "{routeId}" route.'
    }

});
