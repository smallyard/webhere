var fs = require("fs");
var path = require("path");
function route(url, basePath) {
    if (url.indexOf("?") > 0) {   
        url = url.substring(0, url.indexOf("?"));
    }
    console.log("Origin path: " + url);
    var filePath = path.join(basePath, url);
    if (fs.existsSync(filePath)) {
        if(fs.statSync(filePath).isFile()){
            return {
                status: 200,
                filePath: filePath,
                directory: false
            };
        } else {
               return {
                status: 200,
                filePath: path.join(__dirname, "./html/directory.html"),
                directory: true,
                basePath: basePath,
                url: url
            };
        }
    } else {
        return {
            status: 404,
            filePath: path.join(__dirname, "./html/404.html"),
            directory: false
        };
    }
}
exports.route = route;
