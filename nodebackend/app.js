var express = require('express'),
    nconf = require('nconf'),
    path = require('path'),
    extdirect = require('extdirect');

nconf.env().file({ file: 'config.json'});

var EXTDIRECT_PATH = nconf.get('EXTDIRECT_PATH'),
    EXTDIRECT_NAMESPACE = nconf.get('EXTDIRECT_NAMESPACE'),
    EXTDIRECT_API_NAME = nconf.get('EXTDIRECT_API_NAME'),
    EXTDIRECT_PREFIX = nconf.get('EXTDIRECT_PREFIX'),
    api = extdirect.getAPI(EXTDIRECT_NAMESPACE, EXTDIRECT_API_NAME,
                           EXTDIRECT_PATH, EXTDIRECT_PREFIX);

var app = express();

app.configure(function(){
    app.set('port', process.env.PORT || nconf.get('DEFAULT_PORT'));
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function() {
    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
});

app.configure('production', function() {
    app.use(express.errorHandler());
});

app.get('/directapi', function(request, response) {
    response.type('json');
    response.end(api);
});

app.get(EXTDIRECT_PATH, function(request, response) {
    response.json({
        success: false,
        msg: 'Unsupported method. Use POST instead.'
    });
});

app.post(EXTDIRECT_PATH, function(request, response) {
    extdirect.processRoute(request, response, EXTDIRECT_PATH);
});

app.listen(app.get('port'));
console.log('Express server listening on port ' + app.get('port'));