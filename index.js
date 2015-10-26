var httpProxy = require('http-proxy');
var https = require('https');

httpProxy.createProxyServer({
    target:'https://' + process.env.TARGET,
    agent  : https.globalAgent,
    headers: {
        host: process.env.TARGET
    }

}).listen(process.env.PORT || 5000);
