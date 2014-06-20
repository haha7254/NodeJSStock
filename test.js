function test(){
	//document.write("this is test\n");
	//alert("test");
	
	var item1 = document.getElementById("id1").checked;
	var item2 = document.getElementById("id2").checked;
	var item3 = document.getElementById("id3").checked;
	var item4 = document.getElementById("id4").checked;
	var Check_DayAvg = document.getElementById("Combo_Day_AVG").value;
	var text1="1000";
	
	var choose = new Object();
	choose.item1 = item1;
	choose.item2 = item2;
	choose.item3 = item3;
	choose.item4 = item4;
	choose.Combo_Day_AVG = Combo_Day_AVG;
	choose.text1 = text1;
	
	var memberfilter = new Array();
	memberfilter[0] = "item1";
	memberfilter[1] = "item2";
	memberfilter[2] = "item3";
	memberfilter[3] = "item4";
	memberfilter[4] = "text1";
	memberfilter[5] = "Combo_Day_AVG";
	
	var jsonText = JSON.stringify(choose, memberfilter, "\t");
	//document.write(jsonText);	
	document.write(jsonText);
	ajaxSendRequest('ajaxServer.js',jsonText);
	
	// $.ajax({
		// type: 'POST',
		// url: 'test.json',	
		// data: jsonText,
		// dataType: 'json',
		// //get data when success
		// complete: function(validationresponse) {
			// //document.write(validationresponse);
		// },
		// //set data
		// success: function (serverData) {
			
			// var content = JSON.parse(jsonText);  //json->Object  (client data)
		
			// Analysis( content, serverData ,function(stockresult){
				// //document(reData);
				// $("#result").html("");//clear
				// $("#result").append( stockresult);
			// });
			
				
		// },
		// error: function (xhr, error) { 
			// alert('Ajax request error.'); 
		// }
	// });	
	

}

function Analysis( content, serverdata, callback) {



	if ( content.item1 == true) 
	{
		//選擇滿足item1的stocks  讀取滿足item1的json
	}
	
	var stockresult;
	
	$.each(serverdata, function() {
	  $.each(this, function(k, v) {
		// do stuff
		var stock="<ul>";
		stock+= "<li>"+k+":ClosePriece: "+v.ClosePriece +"</li>";
		stock+= "<li>"+k+":HighPriece: "+v.HighPriece +"</li>";
		stock+= "<li>"+k+":LowPriece: "+v.LowPriece +"</li>";
		stock+= "<li>"+k+":OpenPriece: "+v.OpenPriece +"</li>";
		stock+= "<li>"+k+":StockNumber: "+v.StockNumber +"</li>";
		
		stock+="</ul>";
	
		stockresult+=stock;		
	  });
	});
	
	(callback && typeof(callback) === "function" ) && callback(stockresult);

}


function createAJAX() {
　if (window.ActiveXObject) {
　　try {
　　　return new ActiveXObject("Msxml2.XMLHTTP");
　　} catch (e) {
　　　try {
　　　　return new ActiveXObject("Microsoft.XMLHTTP");
　　　} catch (e2) {
　　　　return null;
　　　}
　　}
　} else if (window.XMLHttpRequest) {
　　return new XMLHttpRequest();
　} else {
　　return null;
　}
}
// 非同步傳輸的回應函式，用來處理伺服器回傳的資料
function onRcvData () {
　if (ajax.readyState == 4) {
　　if (ajax.status == 200) {
　　　var content = document.getElementById ('result');
　　　content.innerHTML = ajax.responseText;				
		
　　} else {
　　　alert ("伺服器處理錯誤");
　　}
　} 
}
// 非同步送出資料
function ajaxSendRequest(uri, jsonText) {
　ajax = createAJAX() ;
　if (!ajax) {
　　alert ('使用不相容 XMLHttpRequest 的瀏覽器');
　　return 0;
　}

　ajax.onreadystatechange = onRcvData;
　ajax.open ("POST", uri, true);
　ajax.send (jsonText);
}
