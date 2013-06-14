var path = require('path');
var mysql = require(path.resolve(__dirname, '../lib/mysql'));

var DXPunches = {

    createPunch: function(params, callback) {
        var conn = mysql.connection(),
            timeIn = new Date(conn.escape(params.timeIn) * 1000),
            timeOut = new Date(conn.escape(params.timeOut) * 1000),
            sql = 'insert into Punches (employeeId, timeIn, timeOut) values (' +
                  conn.escape(params.employeeId) + ', ' +
                  conn.escape(timeIn) + ', ' +
                  conn.escape(timeOut) + ')';
        conn.query(sql, function(err, rows) {
            if (err) {
                throw err;
            }
            callback({
                punchId: rows.insertId,
                success: true
            });
            mysql.disconnect(conn);
        });
    },

    getPunches: function(params, callback) {
        var conn = mysql.connection(),
            sql = 'select * from Punches where employeeId = ' +
                  conn.escape(params.employeeId);
        mysql.doQuery(conn, sql, callback);
    },

    destroyPunch: function(params, callback) {
        var conn = mysql.connection(),
            sql = 'delete from Punches where punchId = ' +
                  conn.escape(params.punchId);
        mysql.doQuery(conn, sql, callback);
    }

};

module.exports = DXPunches;
