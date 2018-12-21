/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('RosettaStone.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    routes: {
        ':view': {
            action: 'showView'
        },
        ':view/:args': {
            action: 'showView',
            conditions: {
                ':args': '(.*)'
            }
        }
    },

    showView: function (view, args) {
        var me = this,
            viewModel = me.getViewModel(),
            mainCard = me.getView(),
            mainmenu = me.lookup('mainmenu'),
            navigationTree = mainmenu.down('[reference=navigationTree]'),
            navStore = navigationTree.getStore(),
            routeId = (view || '').toLowerCase(),
            rec = navStore.findNode('routeId', routeId) || navStore.findNode('xtype', routeId),
            xtype = (rec && rec.get('xtype')) || routeId, // use xtype if defined, otherwise use the routeId
            item = xtype && mainCard.child('component[xtype=' + xtype + ']'),
            isViewNew = false;

        // add the routeId to the viewModel
        viewModel.set('routeId', routeId + (args ? ('/' + args) : ''));

        if (!xtype) {
            me.onUnmatchedRoute(routeId);
        } else {
            if (!item) {
                if (Ext.ClassManager.getByAlias('widget.' + xtype)) {
                    item = mainCard.add({
                        xtype: xtype
                    });
                    isViewNew = true;
                }
                else {
                    me.onUnmatchedRoute(routeId);
                }
            }

            if (rec) {
                navigationTree.setSelection(null);
                navigationTree.setSelection(rec);
            }

            if (item) {
                mainCard.setActiveItem(item);
            }

            // if we loaded a new view then we have to run the router again
            // so that any routes defined in the new view's VC will then execute
            if (isViewNew) {
                Ext.route.Router.doRun([Ext.util.History.hash]);
            }
        }
    },

    onUnmatchedRoute: function (id) {
        var me = this,
            mainCard = me.getView();

        mainCard.setActiveItem('unknownroute');
    }
});
