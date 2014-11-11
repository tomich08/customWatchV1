

onload=init;

function init(){
	updateCart();
}	


function choseBlack(){
	localStorage.colorImage = '<img src="img/black.png" class="watchImages headImage"/>';
	localStorage.colorDesc = 'Black';
	localStorage.colorPrice = 0;
	updateCart;
}


function choseGold(){
	localStorage.colorImage ='<img src="img/gold.png" class="watchImages headImage"/>';
	localStorage.colorDesc = 'Gold';
	localStorage.colorPrice = 0;
	updateCart;
}

function choseSilver(){
	localStorage.colorImage = '<img src="img/silver.png" class="watchImages headImage"/>';
	localStorage.colorDesc = 'Silver';
	localStorage.colorPrice = 0;
	updateCart;
}




function updateCart(){
	
	var w_price = 0;
	var s_price = 0;
	var c_price = 0;
	
	
	//if user hasn't picked an item. run if/else statement	
	if(localStorage.colorImage){	
	document.getElementsByClassName("watchHead")[0].innerHTML=localStorage.colorImage;
}

if(localStorage.colorImage){
	document.getElementsByClassName("watchHead")[0].innerHTML=localStorage.colorImage;
}

	if(localStorage.colorImage){	
	document.getElementsByClassName("watchHead")[0].innerHTML=localStorage.colorImage;
}

}
	if(localStorage.colorDesc){	
	document.getElementsByClassName("dialBackIMG")[0].innerHTML=localStorage.colorDesc;
}

	if(localStorage.colorDesc){	
	document.getElementsByClassName("dialBackIMG")[0].innerHTML=localStorage.colorDesc;
}

	if(localStorage.colorDesc){	
	document.getElementsByClassName("dialBackIMG")[0].innerHTML=localStorage.colorDesc;
}



/*	if(sessionStorage.warType){	
	
	document.getElementById("warranty").innerHTML=sessionStorage.warType;
	w_price = Number(sessionStorage.warPrice).toFixed(2);
	document.getElementById("warranty_price").innerHTML=sessionStorage.warPrice;
}

	if(sessionStorage.mileType){
	document.getElementById("mileage").innerHTML=sessionStorage.mileType;
	s_price = Number(sessionStorage.milePrice).toFixed(2);
	document.getElementById("milsurcharge").innerHTML=sessionStorage.milePrice;
	}
	
	if(sessionStorage.lengthType){
	document.getElementById("cov").innerHTML=sessionStorage.lengthType;
	c_price = Number(sessionStorage.lengthPrice).toFixed(2);
	document.getElementById("covprice").innerHTML=sessionStorage.lengthPrice;
	}
	
	document.getElementById("cart_total").innerHTML = (Number(s_price)+ Number(w_price)+ Number(c_price)).toFixed(2);*/

