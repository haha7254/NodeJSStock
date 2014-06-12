

exports.CalTodayStock = function StockAnalysizer( data, callback){
	//client data
	var jsonobj = JSON.parse(data);
	
	var stockToday="";
	var returnArray=new Array();
	
	//load server data//-------------------------------------------------//
	var fs = require('fs');
	var file = __dirname + '/music.json';
	
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
		
		console.log(stockToday.stock[0]);
		
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
		if ( jsonobj.item4 === true) 
		{
			for( var i = 0;i <stockToday.stock[0].item4.length; ++i)
			{
				stockarr.push(stockToday.stock[0].item4[i]);
			}			
			countItem++;
		}			
		//sort the array
		stockarr.sort();
		
		console.log("stockarr count:"+countItem+"\n" );
		console.log(stockarr );
		
		var count = 0;
		var temp = "";
		
		do{
			if( stockarr.length == 0) break;
			
			if( stockarr.length ==  1 ){
				if ( 1 == countItem ){
					temp = stockarr.shift();
					returnArray.push(temp);
					console.log(returnArray );
				}else{
					temp = stockarr.shift();
				}
			}
			else{
				
				count = 0;
				temp = stockarr.shift();
				
				count++;
				
				do{
					if ( temp == stockarr[0] ){
						temp = stockarr.shift();
						count++;
					}else{
						break;
					}
					
							
				}while( stockarr.length != 0 || stockarr[0] == temp );
			
			}
			//console.log("----------------------" );
			
			if ( count == countItem){
			returnArray.push(temp);
			//console.log(returnvalue );
		}
				
		
		}while( stockarr.length != 0 );


		(callback && typeof(callback)==="function") && callback( returnArray );	 

	});

}

