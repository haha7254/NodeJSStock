var http = require("http");
var url = require("url");
var querystring = require("querystring");


function start(route, handle){
	function onRequest(req,res ){
		var pathname = url.parse(req.url).pathname;
		//var query = url.parse(req.url).query;

		var postData = "";
		var pathname = url.parse(req.url).pathname;
		console.log("Requst for"+pathname+" received.");
		
		req.setEncoding("utf8");
		req.addListener("data", function(postDataChunk) {
			postData += postDataChunk;
			console.log("received post data chunk '"+ 
			postDataChunk+"'.");
			
		});
		
		req.addListener("end", function() {
			route( handle, pathname, res, postData);
		});
	
		// //quer1 = querystring.parse(req.url);
		// //console.log("Requst for"+pathname+" received.");
		// res.writeHead(200, {"Content-Type" : "text/plain"});
		// //res.write("Hello world");
		// // res.write(" pathname:"+pathname);
		// // res.write("	query:"+query);
		// // res.write("	foo1:"+quer1.foo1);
		// // res.write("	sex:"+quer1.sex);
		// // res.write("	fffff:"+ quer1.fffff);
		// //var content = route(handle,pathname);
		// //res.write( content);
		// route( handle, pathname, res);
	
		// res.end();		
	}
	http.createServer(onRequest).listen(8888);
	console.log("Server has started");
}

exports.start = start;

