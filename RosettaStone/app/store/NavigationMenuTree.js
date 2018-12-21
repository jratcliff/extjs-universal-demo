/**
 * Dedicated TreeStore for the Navigation Menu TreeList UI component.
 *
 * NOTE: Even though this store uses the same url as the NavigationTabsTree we need both stores
 * due to how a TreeStore does not act completely like a normal Ext.data.Store in that
 * a TreeStore is tightly bound to the UI's that use it.
 */
Ext.define('RosettaStone.store.NavigationMenuTree', {
    extend: 'Ext.data.TreeStore',
    storeId: 'NavigationMenuTree',

    root: {
        expanded: true // does what autoLoad: true does to a normal store
    },

    proxy: {
        type: 'ajax',
        url: 'resources/data/navigation.json'
    }
});
