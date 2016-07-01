var fs = require("fs");
var path = require("path");
function route(url, basePath) {
    console.log("Origin path: " + url);
    if (url == "/") {
        return {
            status: 200,
            filePath: path.join(__dirname, "./html/index.html")
        };
    } else {
        var filePath = path.join(basePath, url);
        if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            return {
                status: 200,
                filePath: filePath
            };
        } else {
            return {
                status: 404,
                filePath: path.join(__dirname, "./html/404.html")
            };
        }
    }
}

exports.route = route;