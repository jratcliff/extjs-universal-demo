Ext.define('UniversalApp.view.common.xtemplates.Example', {
    singleton: true,
    alternateClassName: 'ExampleTpl',

    tpl: [
        '<div style="padding: 10px;">',
            '<div>jack was here1: {name}</div>',
            '<div>jack was here2: {email}</div>',
            '<div>jack was here3: {phone}</div>',
        '</div>'
    ].join('')
});
