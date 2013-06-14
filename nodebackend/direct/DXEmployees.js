var path = require('path'),
    mysql = require(path.resolve(__dirname, '../lib/mysql'));

var DXEmployees = {

    createEmployee: function(params, callback) {
        var conn = mysql.connection(),
            sql = 'insert into Employees (name, title) values (' +
                  conn.escape(params.name) + ', ' + conn.escape(params.title) + ')';
        conn.query(sql, function(err, rows) {
            if (err) {
                throw err;
            }
            callback({
                employeeId: rows.insertId,
                success: true
            });
            mysql.disconnect(conn);
        });
    },

    getEmployees: function(callback) {
        var conn = mysql.connection(),
            sql = 'select * from Employees';
        mysql.doQuery(conn, sql, callback);
    },

    updateEmployee: function(params, callback) {
        var conn = mysql.connection(),
            sql = 'update Employees set name = ' + conn.escape(params.name) +
                  ', title = ' + conn.escape(params.title) +
                  ' where employeeId = ' + conn.escape(params.employeeId);
        mysql.doQuery(conn, sql, callback);
    },

    destroyEmployee: function(params, callback) {
        var conn = mysql.connection(),
            sql = 'delete from Employees where employeeId = ' +
                  conn.escape(params.employeeId);
        mysql.doQuery(conn, sql, callback);
    }

};

module.exports = DXEmployees;
