var fs = require("fs");
var path = require("path");
var contentTypes = require("./contentTypes");

function getResponseInfo(routeResult) {
    console.log("Result path: " + routeResult.filePath);
    var contentType = getContentType(routeResult.filePath);
    var content = getContent(routeResult);
    console.log(contentType)
    return {
        "status": routeResult.status,
        "contentType": contentType,
        "content": content
    };
}

function getContent(routeResult) {
    var filePath = routeResult.filePath;
    if(routeResult.directory){
      var directoryPath = path.join(routeResult.basePath, routeResult.url);
      var files = fs.readdirSync(directoryPath);
      var content = "";
      if(routeResult.url!="/"){
      content += "<p><a href='..'>&lt;&lt; BACK</a></p>";
      }
      files.forEach(file => {
        var href = path.join(routeResult.url, file);
        content += "<p><a href='" + href + "'>" + file + "</a><p/>";
      });
      return fs.readFileSync(filePath).toString().replace("{{content}}",content);
    }else{
      return fs.readFileSync(filePath);
    }
}

function getContentType(filePath) {
    var suffix = ".*";
    var pointIndex = filePath.lastIndexOf(".");
    if (pointIndex != -1) {
        suffix = filePath.substr(pointIndex);
    }
    return contentTypes[suffix] ? contentTypes[suffix] : contentTypes[".*"];
}

exports.getResponseInfo = getResponseInfo;