var path = require('path'),
    mysql = require(path.resolve(__dirname, '../lib/mysql'));

var DXCustomers = {

    getCustomers: function(callback) {
        var conn = mysql.connection(),
            sql = 'select * from Customers';
        mysql.doQuery(conn, sql, callback);
    },

    getCustomerCategoryData: function(callback) {
        // This is dummy data for now
        callback([{
          category: "Enterprise",
          count: 1,
          priorQtrTotal: 32345.60,
          currentQtrTotal: 53241.12
        }]);
    },

    getCustomerDetail: function(customerId, callback) {
        var conn = mysql.connection(),
            sql = 'select * from Customers where customerId = ' + conn.escape(customerId);
        mysql.doQuery(conn, sql, function(rows) {
            var customer = rows[0];
            if (customer) {
                DXCustomers.getPerPeriodTotals(customerId, function(rows) {
                    customer.perPeriodTotals = rows;
                    callback(customer);
                });
            } else {
                callback();
            }
        });
    },

    getPerPeriodTotals: function(customerId, callback) {
        var conn = mysql.connection(),
            sql = 'select Year(orderDate) as year, quarter(orderDate) as quarter, sum(total) as total from Orders where customerId = ' + customerId + ' group by year, quarter order by orderDate';
        mysql.doQuery(conn, sql, callback);
    },

    getLineItems: function(orderId, callback) {
        var conn = mysql.connection();
        var sql = 'select LineItems.*, Items.name as itemName ' +
                  'from LineItems join Items ' +
                  'on LineItems.itemId = Items.itemId ' +
                  'where orderId = ' + conn.escape(orderId);
        doQuery(conn, sql, callback);
    },

    getOrders: function(customerId, callback) {
        var conn = mysql.connection(),
            sql = 'select * from Orders where customerId = ' + conn.escape(customerId);
        mysql.doQuery(conn, sql, callback);
    },

    getItem: function(itemId, callback) {
        var conn = mysql.connection(),
            sql = 'select * from Items where itemId = ' + conn.escape(itemId);
        mysql.doQuery(conn, sql, callback);
    },

    getOrderDetail: function(orderId, callback) {
        var conn = mysql.connection(),
            sql = 'select * from Orders where orderId = ' + conn.escape(orderId);
        mysql.doQuery(conn, sql, callback);
    },

    getAllItems: function(callback) {
        var conn = mysql.connection(),
            sql = 'select * from Items';
        mysql.doQuery(conn, sql, callback);
    },

    createOrder: function(order, callback) {

        // Handle input
        order.orderDate || (order.orderDate = new Date());

        // Ready the connection
        var conn = mysql.connection();

        // Build the order query
        var orderKeys = ['orderNo', 'customerId', 'orderDate', 'shipDate', 'total', 'paid', 'tax', 'shipping'],
            orderSQL = 'insert into Orders (';
        orderSQL += orderKeys.join(', ');
        orderSQL += ') values (';
        orderSQL += orderKeys.map(function(key) {
            return conn.escape(order[key]);
        }).join(', ');
        orderSQL += ')';

        // Insert the order
        conn.query(orderSQL, function(err, rows) {

            // Parse the output
            if (err) {
                throw err;
            }
            var orderId = rows.insertId;

            // Build the line items query
            var lineKeys = ['orderId', 'customerId', 'itemId', 'quantityOrdered', 'perUnitPrice', 'totalPrice', 'packDate', 'shipDate'],
                lineSQL = 'insert into LineItems (';
            lineSQL += lineKeys.join(', ');
            lineSQL += ') values ';
            lineSQL += order.details.map(function(detail) {
                var result = '(';
                result += lineKeys.map(function(key) {
                    var value = detail[key];
                    if (key == 'orderId')
                        return orderId;
                    else if ((key == 'totalPrice') && (!value))
                        value = (detail.quantityOrdered * detail.perUnitPrice) + order.tax + order.shipping;
                    return conn.escape(value);
                }).join(', ');
                result += ')';
                return result;
            }).join(', ');

            // Insert the line items
            mysql.doQuery(conn, lineSQL, callback);

        });

    }

};

module.exports = DXCustomers;

