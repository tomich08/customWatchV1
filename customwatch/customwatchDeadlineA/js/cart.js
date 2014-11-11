// JavaScript Document

/////////////cart/////////////////////////////////////

onload=init;

function init(){
	updateCart();
}	


function choseBlackHead(){
	sessionStorage.colorImage = 'img/black.png';
	sessionStorage.colorDesc = 'Black';
	sessionStorage.colorPrice = 100;
	updateCart;
}


function choseGoldHead(){
	sessionStorage.colorImage ='img/gold.png';
	sessionStorage.colorDesc = 'Gold';
	sessionStorage.colorPrice = 150;
	updateCart;
}

function choseSilverHead(){
	sessionStorage.colorImage = 'img/silver.png';
	sessionStorage.colorDesc = 'Silver';
	sessionStorage.colorPrice = 125;
	updateCart;
}




function updateCart(){
	
	var c_price = 0;
	var s_price = 0;
	var c_price = 0;
	
	
	//if user hasn't picked an item. run if/else statement	
	if(sessionStorage.colorImage){	
	
	document.getElementsByClassName("headImage2")[0].src=sessionStorage.colorImage;
}

if(sessionStorage.colorImage){
		
	document.getElementsByClassName("headImage2")[0].src=sessionStorage.colorImage;
}

	if(sessionStorage.colorImage){	

	document.getElementsByClassName("headImage2")[0].src=sessionStorage.colorImage;
}

		if(sessionStorage.colorDesc){	

	document.getElementsByClassName("colorType")[0].innerHTML=sessionStorage.colorDesc;
}

	if(sessionStorage.colorDesc){	

	document.getElementsByClassName("colorType")[0].innerHTML=sessionStorage.colorDesc;
}

	if(sessionStorage.colorDesc){	

	document.getElementsByClassName("colorType")[0].innerHTML=sessionStorage.colorDesc;
}



if(sessionStorage.colorPrice){	
	c_price = Number(sessionStorage.warPrice).toFixed(2);
	document.getElementsByClassName("colorPrice")[0].innerHTML=sessionStorage.colorPrice;
}

	/*if(sessionStorage.mileType){
	document.getElementById("mileage").innerHTML=sessionStorage.mileType;
	s_price = Number(sessionStorage.milePrice).toFixed(2);
	document.getElementById("milsurcharge").innerHTML=sessionStorage.milePrice;
	}*/
	
	/*if(sessionStorage.lengthType){
	document.getElementById("cov").innerHTML=sessionStorage.lengthType;
	c_price = Number(sessionStorage.lengthPrice).toFixed(2);
	document.getElementById("covprice").innerHTML=sessionStorage.lengthPrice;
	}*/
	
	document.getElementById("cart_total").innerHTML = (Number(s_price)+ Number(w_price)+ Number(c_price)).toFixed(2);
}
