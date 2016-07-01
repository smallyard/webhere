var fs = require("fs");
var path = require("path");
function route(url) {
    console.log("Origin path: " + url);
    if (url == "/") {
        return {
            status: 200,
            filePath: path.join(__dirname, "./html/index.html")
        };
    } else {
        var filePath = "." + path.normalize(url);
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