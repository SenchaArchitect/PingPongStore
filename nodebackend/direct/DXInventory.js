var path = require('path'),
    mysql = require(path.resolve(__dirname, '../lib/mysql'));

var DXInventory = {

    getItems: function(callback) {
        var conn = mysql.connection(),
            sql = 'select * from Items';
        mysql.doQuery(conn, sql, callback);
    },

    getItemDetail: function(itemId, callback) {
        var conn = mysql.connection(),
            sql = 'select * from Items where itemId = ' + conn.escape(itemId);
        mysql.doQuery(conn, sql, callback);
    },

    getOrdersByItem: function(itemId, callback) {
        var conn = mysql.connection(),
            sql = 'select Orders.*,' +
                  'Customers.name,' +
                  'Customers.address, Customers.city, Customers.state, Customers.zip,' +
                  'Customers.phone, Customers.fax, Customers.category ' +
                  'from LineItems ' +
                  'join Orders on LineItems.orderId = Orders.orderId ' +
                  'join Customers on LineItems.customerId = Customers.customerId ' +
                  'where LineItems.itemId = ' + conn.escape(itemId) + ' ' +
                  'group by Orders.orderId ' +
                  'order by Orders.orderDate desc';
        mysql.doQuery(conn, sql, callback);
    }

};

module.exports = DXInventory;
