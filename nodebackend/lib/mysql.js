var mysql = require('mysql'),
    nconf = require('nconf'),
    path = require('path');
nconf.env().file({ file: path.resolve(__dirname, '../config.json') });

// Build the connection
var connection = function() {
    var conn = mysql.createConnection({
        host: nconf.get('MySQL_HOSTNAME'),
        port: nconf.get('MySQL_PORT'),
        user: nconf.get('MySQL_USER'),
        password: nconf.get('MySQL_PASSWORD'),
        database: nconf.get('MySQL_DB'),
        multipleStatements: true
    });
    conn.connect(function(err) {
        if (err) {
            console.error('Connection had errors: ', err.code);
            process.exit(1);
        }
    });
    return conn;
};

// Build the disconnection
var disconnect = function(conn) {
    conn.end();
};

// Shorthand for "run this SQL"
var doQuery = function(conn, sql, callback) {
    conn.query(sql, function(err, rows) {
        if (err) {
            throw err;
        }
        callback(rows);
        disconnect(conn);
    });
};

// Export that puppy
module.exports = {
    connection: connection,
    disconnect: disconnect,
    doQuery: doQuery
};
