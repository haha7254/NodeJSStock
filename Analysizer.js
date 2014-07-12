

exports.CalTodayStock = function StockAnalysizer( data, callback){
	//client data
	var jsonobj = JSON.parse(data);
	
	var stockToday="";
	var returnArray=new Array();
	
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
		
		//console.log(stockToday.stock[0]);
		console.log("\nitem1 count data--------------------------------");
		console.log("item1 count :" +stockToday.stock[0].item1.length );
		console.log("item1 count :" +stockToday.stock[0].item2.length);
		console.log("item1 count :" +stockToday.stock[0].item3.length);
		console.log("item1 count :" +stockToday.stock[0].item4.length);
		console.log("item1 count :" +stockToday.stock[0].item5.length);
		console.log("item1 count :" +stockToday.stock[0].item6.length);
		console.log("item1 count :" +stockToday.stock[0].item7.length);
		console.log("item1 count data--------------------------------\n");
		
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

	//////

		}
		if ( jsonobj.item3 === true) 
		{
			//		for( var i = 0;i <stockToday.stock[0].item3.length; ++i)
			//		{
			//			stockarr.push(stockToday.stock[0].item3[i]);
			//		}			
			//		countItem++;

			var item;
			var iIndex = 0;
			iIndex = jsonobj.Combo_Week_AVG;
			console.log("Combo_Week_AVG Index:"+ iIndex);
			switch ( iIndex)
			{
				
				case "13": item=stockToday.stock[0].item3; break;
				case "20": item=stockToday.stock[0].item4; break;
				case "50": item=stockToday.stock[0].item5; break;
				default: item=stockToday.stock[0].item4; break;
				
			}


			console.log("count index: " +iIndex +" .Count:"+item.length);
			
			for( var i = 0;i <item.length; ++i)
			{
					stockarr.push(item[i]);
			}
			//console.log(stockarr);
			countItem++;
		}		
		
		if ( jsonobj.item4 === true) 
		{
			var item;
			var iIndex = 0;
			iIndex = jsonobj.Combo_Day_AVG;
			console.log( "Combo_Day_AVG Index:"+ iIndex);
			switch ( iIndex)
			{
				
				case "18": item=stockToday.stock[0].item6; break;
				case "50": item=stockToday.stock[0].item7; break;

				default: item=stockToday.stock[0].item6; break;
				
			}
			
			console.log("count index: " +iIndex +" .Count:"+item.length);
			
			for( var i = 0;i <item.length; ++i)
			{
					stockarr.push(item[i]);
			}	
			countItem++;
		}		

		if ( jsonobj.AdvancedItem1 === true) 
		{
			if ( typeof(stockToday.stock[0].item8) != "undefined" )
			{
				for( var i = 0;i <stockToday.stock[0].item8.length; ++i)
				{			
					stockarr.push(stockToday.stock[0].item8[i]);
				}
				countItem++;			
			}

		}
		
		if ( jsonobj.AdvancedItem2 === true) 
		{
			if ( typeof(stockToday.stock[0].item9) != "undefined" )
			{
				for( var i = 0;i <stockToday.stock[0].item9.length; ++i)
				{			
					stockarr.push(stockToday.stock[0].item9[i]);
				}
				countItem++;			
			}

		}
		
		if ( jsonobj.AdvancedItem3 === true) 
		{
			if ( typeof(stockToday.stock[0].item10) != "undefined" )
			{			
				for( var i = 0;i <stockToday.stock[0].item10.length; ++i)
				{			
					stockarr.push(stockToday.stock[0].item10[i]);
				}
				countItem++;
			}

		}		
		
		
		//sort the array
		stockarr.sort();
		
		console.log("stock choose count:"+countItem+"\n" );
		//console.log(stockarr );
		
		var count = 0;
		var temp = "";
		var Islast = false;
		do{
			if( stockarr.length == 0) break;
			
			if( stockarr.length ==  1 ){
				if ( 1 == countItem ){
					temp = stockarr.shift();
					returnArray.push(temp);
					Islast = true;
					
					//console.log(returnArray );
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
			
			if ( count == countItem && !Islast){
				//console.log( "tmp:"+temp );
				returnArray.push(temp);
		}
				
		
		}while( stockarr.length != 0 );

		
		(callback && typeof(callback)==="function") && callback( returnArray );	 

	});

}

