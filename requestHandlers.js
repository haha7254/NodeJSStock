//var exec = require("child_process").exec;

var quertstring = require("querystring");

var formidable = require("formidable");
var fs = require("fs");
var analysizer = require("./Analysizer.js");

function start(res, postData){
	console.log("this is start called");
	
	// //sleep 
	// function sleep( millionSeconds) {
		// var starttime = new Date().getTime();
		
		// while ( new Date().getTime() < starttime + millionSeconds );
	// }
	
	// sleep(10000);
	// return "hello start";
	//}
	// exec("find /",
	// { timeout: 10000, maxBuffer: 20000*1024 },
	// function (error, stdout, stderr) {
	  // res.writeHead(200, {"Content-Type": "text/plain"});
	  // res.write(stdout);
	  // res.end();
	// });

	
	// var body = '<html>'+
	// '<head>'+
	// '<meta http-equiv="Content-Type" content="text/html; '+
	// 'charset=UTF-8" />'+
	// '<script>function submitform(){ document.myform.submit();}'+
	// 'var obj = new Object();'+
	// 'var formData = JSON.stringify($("#myform").serializeArray());'+
	// '</script>'+
	// '</head>'+
	// '<body>'+
	// '<form name="myform" action="/upload" method="post">'+
	// '<textarea name="text" rows="20" cols="60"></textarea>'+
	// '<input type="Radio" value="rad1" />'+
	// '<input type="Button" value="Submit text" onclick="submitform();"/>'+
	// '</form>'+
	// '</body>'+
	// '</html>';	
	
	fs.readFile('test.html', function(err, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});
	
	// res.writeHead(200, {"Content-Type": "text/html"});
	// res.write( body);
	// res.end();
	
	
}
function upload(res, postData) {
	console.log("this is upload called");
	//return "hell uoload";
	res.writeHead(200, {"Content-Type": "text/plain"});
	//用querystring 可以過濾出東西
	res.write("you're sent the text: "+ quertstring.parse(postData).text );
	
	res.write("Hello Upload");
	
	res.end();	
	
}
function testJS(res, postData){
	console.log("this is test.js called");
	
	fs.readFile('test.js', function(err, data){
		res.writeHead(200, {"Content-Type": "application/javascript"});
		res.write(data);
		res.end();
	});	
	
}
function jquery( res, postData){
	console.log("this is jquery called");
	
	fs.readFile('jquery-2.1.0.min.js', function(err, data){
		res.writeHead(200, {"Content-Type": "application/javascript"});
		res.write(data);
		res.end();
	});	
	
}
function testjson(res, postData){
	console.log("this is json called");
	fs.readFile('test.json', function(err, data){
		res.writeHead(200, {"Content-Type": "application/json"});
		res.write(data);
		res.end();
	});		
	
}
function ajaxServer( res, postData){
	console.log("this is ajaxServer.js called");	
	fs.readFile('test.js', function(err, data){
		res.writeHead(200, {"Content-Type": "application/javascript"});
		//res.write(data);
		
		analysizer.CalTodayStock( postData, function(today){
				//寫出的時候要轉成字串才行
				console.log(today);
				res.write(today.toString());
				//
				res.end();					
			});
			
	});	
	
}

exports.start = start;
exports.upload = upload;
exports.testJS =testJS;
exports.jquery = jquery;
exports.testjson = testjson;
exports.ajaxServer = ajaxServer;