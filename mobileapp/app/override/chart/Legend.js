Ext.define('Fulfill.override.chart.Legend', {
    override: 'Ext.chart.Legend',
	onItemTap: function (container, target, index, e) {
		var store = this.getStore(),
            record = store && store.getAt(index),
			count = store.queryBy(function(record) {
                return !record.get('disabled');
            }).getCount();

        if (record.get('disabled') || count > 1) {
			this.callParent(arguments);
        }
    }
});