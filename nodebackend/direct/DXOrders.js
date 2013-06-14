var path = require('path'),
    mysql = require(path.resolve(__dirname, '../lib/mysql'));

var DXOrders = {

    getPendingOrders: function(callback) {
        var conn = mysql.connection(),
            sql = 'select o.orderId, o.orderDate, o.total, c.name, c.category, c.address, c.city, c.state, c.zip, c.phone, c.fax ' +
            'from Orders as o, Customers as c, LineItems as l ' +
            'where o.customerId = c.customerId AND o.orderId = l.orderId AND o.shipDate is null ' +
            'group by l.orderId ' +
            'having count(l.lineItemId) > 0';
        mysql.doQuery(conn, sql, callback);
    },

    getPieChartData: function(callback) {
        var conn = mysql.connection(),
            sql = 'select c.category, sum(o.total) as total ' +
           'from Orders as o, Customers as c ' +
           'where o.customerId = c.customerId ' +
           'group by c.category ' +
           'order by c.category';
        mysql.doQuery(conn, sql, callback);
    },

    getSalesHistoryData: function(category, callback) {
        var conn = mysql.connection();

        var sql = 'select Date_Format(Date(o.orderDate), "%Y-%m-%d") as totaledOrderDate, c.category, sum(total) as total ' +
            'from Orders as o, Customers c ' +
            'Where o.customerId = c.customerId ' + (category ? 'AND c.category = ?' : '') +
            'group by totaledOrderDate, c.category ' +
            'order by totaledOrderDate';

        var args = [sql, function(err, rows, fields) {
            if (err) {
                throw err;
            }
            var o = {},
                rowsMassaged = [],
                row;
            for (var i = 0, ln = rows.length; i < ln; i++) {
                row = rows[i];
                o[row.totaledOrderDate] = o[row.totaledOrderDate] || {};
                o[row.totaledOrderDate][row.category] = row.total;
                o[row.totaledOrderDate]['totaledOrderDate'] = row.totaledOrderDate;
            }
            for (var key in o) {
                rowsMassaged.push(o[key]);
            }
            callback(rowsMassaged);
        }];
        if (category) {
            args.splice(1, 0, category);
        }
        conn.query.apply(conn, args);

        mysql.disconnect(conn);
    },

    getItemsByOrder: function(orderId, callback) {
        var conn = mysql.connection(),
            sql = 'select li.lineItemId, li.itemId, li.quantityOrdered, li.packDate, li.shipDate, i.name, i.description, i.imgUrl, i.quantityInStock, i.bin, i.lot '+
            'from LineItems as li, Items as i ' +
            'where li.itemId = i.itemId AND li.orderId = ' + conn.escape(orderId);
        mysql.doQuery(conn, sql, callback);
    },


    packLineItem: function(lineItemId, callback) {
        var conn = mysql.connection(),
            res = {success: false};

        conn.query('Select itemId, quantityOrdered from LineItems Where lineItemId = ' + conn.escape(lineItemId), function(err, rows) {
            if (err) throw err;

            if (rows.length) {
                conn.query('UPDATE Items SET quantityInStock = quantityInStock + ' + conn.escape(-rows[0].quantityOrdered) + ' WHERE itemId = ' + conn.escape(rows[0].itemId) + '; UPDATE LineItems SET packDate = now() WHERE lineItemId = ' + conn.escape(lineItemId), function(err, result) {
                    if (err) throw err;

                    if (result.affectedRows !== 1) {
                        res = {success:true};
                    }
                    mysql.disconnect(conn);
                    callback(res);
                });
            } else {
                mysql.disconnect(conn);
                callback(res);
            }
        });
    },

    unpackLineItem: function(lineItemId, callback) {
        var conn = mysql.connection(),
            res = {success: false};

        conn.query('Select itemId, quantityOrdered from LineItems Where lineItemId = ' + conn.escape(lineItemId), function(err, rows) {
            if (err) throw err;

            if (rows.length) {
                conn.query('UPDATE Items SET quantityInStock = quantityInStock + ' + conn.escape(rows[0].quantityOrdered) + ' WHERE itemId = ' + conn.escape(rows[0].itemId) + '; UPDATE LineItems SET packDate = NULL WHERE lineItemId = ' + conn.escape(lineItemId), function(err, result) {
                    if (err) throw err;

                    if (result.affectedRows !== 1) {
                        res = {success:true};
                    }
                    mysql.disconnect(conn);
                    callback(res);
                });
            } else {
                mysql.disconnect(conn);
                callback(res);
            }
        });
    },


    shipOrder: function (orderId, lineItemIds, callback) {
        /**
         * select Count(orderId) as num
         from LineItems
         Where orderId = {orderId} and packDate is null
         */

        var conn = mysql.connection();

        var sql = 'SELECT Count(orderId) as num FROM LineItems WHERE orderId = ' + conn.escape(orderId) + ' and packDate is null';

        conn.query(sql, function(err, rows, fields) {
            if (err) throw err;
            var num = rows[0].num,
                res = {
                    remainingLineItems: num
                };

            conn.query('UPDATE LineItems SET shipDate  = now() WHERE lineItemId IN (' + conn.escape(lineItemIds) + ')', function(err, result) {
                if (err) throw err;
            });
            if (num === 0) {
                conn.query('UPDATE Orders SET shipDate  = now() WHERE orderId = ' + conn.escape(orderId), function(err, result) {
                    if (err) throw err;
                    callback(res);
                });
            } else {
                callback(res);
            }
            mysql.disconnect(conn);
        });
    }
};

module.exports = DXOrders;