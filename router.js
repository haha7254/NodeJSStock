function route(handle, pathname, res, postData){
	console.log("About to route a request for"+pathname);
	if ( typeof handle[pathname] == "function" ) {
		//從關聯陣列中取得元素一樣的方式從傳遞的物件中取得請求處理函數
		//因此就有了簡潔流暢的形如handle[pathname]();
		return handle[pathname](res, postData);
	}else{
		console.log("no request handle found for "+pathname);
		//return "404 not found";
		res.writeHead(404,{"Content-Type": "text/plain"});
		res.write("404 not found");
		res.end();
	}
}

exports.route = route;
