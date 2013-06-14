/*
Ext.define('Fulfill.override.draw.Path', {
    override: 'Ext.draw.Path',
    rect: function (x, y, width, height) {
        if (width === 0 || height === 0) {
            return;
        }
        this.callParent(arguments);
    }
});
*/
Ext.draw.Component.prototype.engine = 'Ext.draw.engine.Canvas';