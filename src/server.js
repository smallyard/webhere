var http = require("http");
var exec = require('child_process').exec;
var router = require("./router");
var render = require("./render");

function start(options) {
    function onRequest(request, response) {
        var routeResult = router.route(request.url, options.basePath);
        var responseInfo = render.getResponseInfo(routeResult);
        response.writeHead(responseInfo.status, {"Content-Type": responseInfo.contentType});
        response.write(responseInfo.content);
        response.end();
    }

    http.createServer(onRequest).listen(options.port);
    console.log("Server has started.");
    var address = "http://127.0.0.1:" + options.port;
    console.log("Server address: " + address);
    if (!options.silent) {
        openExploer(address);
    }
}

var openExploer = function (url) {
    switch (process.platform) {
        case "darwin":
            exec('open ' + url);
            break;
        case "win32":
            exec('start ' + url);
            break;
        default:
            spawn('xdg-open', [url]);
    }
};

exports.start = start;