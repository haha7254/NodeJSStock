

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
		//console.log(stockToday.stock[0].item1[0]);
	  
		//-------------------------------------------------------------------//
		//load server data//
		//好像要一起做  不然會錯誤 見鬼
		//-------------------------------------------------------------------//
		
		//選擇滿足item1的stocks  讀取滿足item1的json
		var countItem = 0;
		var stockarr = new Array();
		if ( jsonobj.item1 === true) 
		{
			//console.log(stockToday.stock[0].item1[].length);
			for( var i = 0;i <stockToday.stock[0].item1.length; ++i)
			{			
				stockarr.push(stockToday.stock[0].item1[i]);
			}
			countItem++;
		}
		
		if ( jsonobj.item2 === true) 
		{	
			for( var i = 0;i <stockToday.stock[0].item2.length; ++i)
			{
				stockarr.push(stockToday.stock[0].item2[i]);
			}			
			countItem++;
		}
		if ( jsonobj.item3 === true) 
		{
			for( var i = 0;i <stockToday.stock[0].item3.length; ++i)
			{
				stockarr.push(stockToday.stock[0].item3[i]);
			}			
			countItem++;
		}		
		//sort the array
		stockarr.sort();
		
		var count = 0;
		var stock = stockarr.shift();
		count++;
		
	
		//create object
		// function stock( stocknum){
			// this.stockbumber = stocknum;
			// this.count = 1;
		// };
		
		// var stock1 = new stock(1001);
		// stock1.count++;
		//
		
		// var stockindex = stock1.shift();
		// var stock1 = new stock(stockindex);
		
		
	
		//console.log(stockarr);
		
		returnvalue = stockarr;
		(callback && typeof(callback)==="function") && callback( stockarr );	 

	});

}

