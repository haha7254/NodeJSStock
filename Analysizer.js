

exports.CalTodayStock = function StockAnalysizer( data, callback){
	//client data
	var jsonobj = JSON.parse(data);
	
	var stockToday="";
	var returnvalue="7788";
	
	//load server data//-------------------------------------------------//
	var fs = require('fs');
	var file = __dirname + '/today.json';
	
	fs.readFile(file, 'utf8', function (err, datajson) {
		if (err) {
		console.log('Error: ' + err);
		return;
		}

		stockToday = JSON.parse(datajson);

		//console.log(stockToday);
		console.log(stockToday.stock[0].item1[0]);
	  
		//-------------------------------------------------------------------//
		//load server data//
		//好像要一起做  不然會錯誤 見鬼
		//-------------------------------------------------------------------//
		if ( jsonobj.item1 == true) 
		{
			//選擇滿足item1的stocks  讀取滿足item1的json
		}
		else if ( jsonobj.item2 == true) 
		{
		
		}

		
		returnvalue = stockToday.stock[1].item4;
		(callback && typeof(callback)==="function") && callback( returnvalue );	 

	});




}
