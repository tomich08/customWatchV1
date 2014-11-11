// JavaScript Document

//color choices

document.getElementsByTagName("a")[0].onclick = function(){
		choseBlack();
}	

document.getElementsByTagName("a")[1].onclick = function(){
		choseGold();
}

document.getElementsByTagName("a")[2].onclick = function(){
		choseSilver();
}

var colorType = document.getElementsByClassName("colorType")[0];



function choseBlack(){	
	document.getElementsByClassName("headImage")[0].src='img/black.png';
	
	document.getElementsByClassName("black1")[0].style.display="block";
	document.getElementsByClassName("black2")[0].style.display="block";
	
	document.getElementsByClassName("gold1")[0].style.display="none";
	document.getElementsByClassName("gold2")[0].style.display="none";
	
	document.getElementsByClassName("silver1")[0].style.display="none";
	document.getElementsByClassName("silver2")[0].style.display="none";
	
	document.getElementsByClassName("black1")[0].src='img/band1blackSwatch.png';
	document.getElementsByClassName("black2")[0].src='img/band2blackSwatch.png';
	
	
}

function choseGold(){	
	document.getElementsByClassName("headImage")[0].src='img/gold.png';
	
	document.getElementsByClassName("black1")[0].style.display="none";
	document.getElementsByClassName("black2")[0].style.display="none";
	
	document.getElementsByClassName("gold1")[0].style.display="block";
	document.getElementsByClassName("gold2")[0].style.display="block";
	
	document.getElementsByClassName("silver1")[0].style.display="none";
	document.getElementsByClassName("silver2")[0].style.display="none";
	
	document.getElementsByClassName("gold1")[0].src='img/band1goldSwatch.png';
	document.getElementsByClassName("gold2")[0].src='img/band2goldSwatch.png';
	
	
}

function choseSilver(){	
	document.getElementsByClassName("headImage")[0].src='img/silver.png';
	
	document.getElementsByClassName("black1")[0].style.display="none";
	document.getElementsByClassName("black2")[0].style.display="none";
	
	document.getElementsByClassName("gold1")[0].style.display="none";
	document.getElementsByClassName("gold2")[0].style.display="none";
	
	document.getElementsByClassName("silver1")[0].style.display="block";
	document.getElementsByClassName("silver2")[0].style.display="block";
	
	document.getElementsByClassName("silver1")[0].src='img/band1silverSwatch.png';
	document.getElementsByClassName("silver2")[0].src='img/band2silverSwatch.png';
	

}

//end color choinces








var dialColor = document.getElementsByClassName("dialColor")[0];
var dialBackPrice = 0;



//start swatches here

document.getElementsByTagName("a")[3].onclick = function(){
		choseBlackS();
}

function choseBlackS(){	
	document.getElementsByClassName("backImage")[0].src='img/blackSwatch.png';
	
}	

document.getElementsByTagName("a")[4].onclick = function(){
		choseBlueS();
}

function choseBlueS(){	
	document.getElementsByClassName("backImage")[0].src='img/blueSwatch.png';

}

document.getElementsByTagName("a")[5].onclick = function(){
		choseBrownS();
}

function choseBrownS(){	
	document.getElementsByClassName("backImage")[0].src='img/brownSwatch.png';
	
}

document.getElementsByTagName("a")[6].onclick = function(){
		choseGreenS();
}

function choseGreenS(){	
	document.getElementsByClassName("backImage")[0].src='img/greenSwatch.png';
	
}	

document.getElementsByTagName("a")[7].onclick = function(){
		choseRedS();
}

function choseRedS(){	
	document.getElementsByClassName("backImage")[0].src='img/redSwatch.png';
	
}

document.getElementsByTagName("a")[8].onclick = function(){
		choseSilverS();
}

function choseSilverS(){	
	document.getElementsByClassName("backImage")[0].src='img/silverSwatch.png';
	
}

//dial back color swatches




//band choices///////////////////////////////////////////////////

var bandColor = document.getElementsByClassName("bandColor")[0];
var bandPrice = 0;



//black bands
document.getElementsByTagName("a")[9].onclick = function(){
		choseBlackB1();
}

function choseBlackB1(){	
	document.getElementsByClassName("bandImage")[0].src='img/band1black.png';
	

}



document.getElementsByTagName("a")[10].onclick = function(){
		choseBlackB2();
}

function choseBlackB2(){	
	document.getElementsByClassName("bandImage")[0].src='img/band2black.png';

}




//silver bands
document.getElementsByTagName("a")[13].onclick = function(){
		choseSilverB1();
}

function choseSilverB1(){	
	document.getElementsByClassName("bandImage")[0].src='img/band1silver.png';

}


document.getElementsByTagName("a")[14].onclick = function(){
		choseSilverB2();
}

function choseSilverB2(){	
	document.getElementsByClassName("bandImage")[0].src='img/band2silver.png';

}



//gold bands
document.getElementsByTagName("a")[11].onclick = function(){
		choseGoldB1();
}

function choseGoldB1(){	
	document.getElementsByClassName("bandImage")[0].src='img/band1gold.png';

}


document.getElementsByTagName("a")[12].onclick = function(){
		choseGoldB2();
}

function choseGoldB2(){	
	document.getElementsByClassName("bandImage")[0].src='img/band2gold.png';
	
}


//end band choices//////////////////////////////////////////////////////////////


