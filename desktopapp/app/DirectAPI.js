Ext.define('Orders.DirectAPI', {
    requires: ['Ext.direct.*']
}, function() {
    var Loader = Ext.Loader,
        wasLoading = Loader.isLoading;
    Loader.loadScriptFile('/directapi', Ext.emptyFn, Ext.emptyFn, null, true);
    Loader.isLoading = wasLoading;
    Ext.direct.Manager.addProvider(Fulfill.ss.REMOTING_API);
});