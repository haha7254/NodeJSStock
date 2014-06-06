var server = require("./server");
var router = require("./router");
var requestHandlers  = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers .start;
handle["/upload"] = requestHandlers .upload;
handle["/test.js"] = requestHandlers.testJS;
handle["/jquery-2.1.0.min.js"] = requestHandlers.jquery;
handle["/ajaxServer.js"] = requestHandlers.ajaxServer;

handle["/test.json"] = requestHandlers.testjson;
server.start(router.route, handle);
