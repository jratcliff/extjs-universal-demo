/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'RosettaStone.Application',

    name: 'RosettaStone',

    requires: [
        // This will automatically load all classes in the RosettaStone namespace
        // so that application classes do not need to require each other.
        'RosettaStone.*'
    ],

    // The name of the initial view to create.
    mainView: 'RosettaStone.view.main.Main'
});
