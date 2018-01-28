function getReceipt() {

	var text1 = "<h3>You Ordered:</h3>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	runningTotal = sizeTotal;
	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log("size text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getMeat(runningTotal,text1); 
}	



function getMeat(runningTotal,text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			console.log("selected meat item: ("+meatArray[j].value+")");
			text1 = text1+meatArray[j].value+"<br>";
		}
	}
  
  
  // My work
			if (selectedMeat === "Pepperoni") {
		meatTotal = 1;
	} else if (selectedMeat === "Sausage") {
		meatTotal = 1;
	} else if (selectedMeat === "Canadian Bacon") {
		meatTotal = 1;
	} else if (selectedMeat === "Ground Beef") {
		meatTotal = 1;
	} else if (selectedMeat === "Anchovy") {
		meatTotal = 1;
	} else if (selectedMeat === "Chicken") {
		meatTotal = 1;
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
// My work  

  
	runningTotal = (runningTotal + meatTotal);
	console.log("total selected meat items: "+meatCount);
	console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
	console.log("meat text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
}


// My work
function getVegetables(runningTotal, text1) {
	var vegetablesTotal = 0;
	var selectedVegetables = [];
	var VegetablesArray = document.getElementsByClassName("vegetables");
	for (var j = 0; j < VegetablesArray.length; j++) {
		if (VegetablesArray[j].checked) {
			selectedVegetables.push(VegetablesArray[j].value);
			console.log("selected vegetables item: ("+VegetablesArray[j].value+")");
			text1 = text1+VegetablesArray[j].value+"<br>";
		}
	}
			if (selectedVegetables === "Tomatoes") {
		vegetablesTotal = 1;
	} else if (selectedVegetables === "Onions") {
		vegetablesTotal = 1;
	} else if (selectedVegetables === "Olives") {
		vegetablesTotal = 1;
	} else if (selectedVegetables === "Green Peppers") {
		vegetablesTotal = 1;
	} else if (selectedVegetables === "Mushrooms") {
		vegetablesTotal = 1;
	} else if (selectedVegetables === "Pineapple") {
		vegetablesTotal = 1;
	} else if (selectedVegetables === "Spinach") {
		vegetablesTotal = 1;
	} else if (selectedVegetables === "Jalapeño") {
		vegetablesTotal = 1;
	}
	var vegetablesCount = selectedVegetables.length;
	if (vegetablesCount > 1) {
		vegetablesTotal = (vegetablesCount - 1);
	} else {
		vegetablesTotal = 0;
	}
	
	runningTotal = (runningTotal + vegetablesTotal);
	console.log("total selected vegetables items: "+vegetablesCount);
	console.log(vegetablesCount+" vegetables - 1 free vegetables = "+"$"+vegetablesTotal+".00");
	console.log("vegetables text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
}
//My work
