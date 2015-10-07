var httpProxy = require('http-proxy');
var https = require('https');

httpProxy.createProxyServer({
    target:'https://prototypo.appback.com',
    agent  : https.globalAgent,
    headers: {
        host: 'prototypo.appback.com'
    }

}).listen(process.env.PORT || 5000);
