var http = require("http");
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
    console.log("Server address: http://127.0.0.1:" + options.port);
}

exports.start = start;