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
	getCheese(runningTotal,text1); 
}

function getCheese() {
	
	
	var runningTotal = 0;
	var cheeseTotal = 0;
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var i = 0; i < cheeseArray.length; i++) {
		if (cheeseArray[i].checked) {
			var selectedCheese = cheeseArray[i].value;
			text1 = text1+selectedCheese+"<br>";
		}
	}
	if (selectedCheese === "Regular Cheese") {
		cheeseTotal = 0;
	} else if (selectedCheese  === "No Cheese") {
		cheeseTotal = 0;
	} else if (selectedCheese === "Extra Cheese") {
		cheeseTotal = 3;
	} 
	runningTotal = cheeseTotal;
	console.log(selectedCheese+" = $"+cheeseTotal+".00");
	console.log("cheese text1: "+text1);
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

	runningTotal = (runningTotal + meatTotal);
	console.log("total selected meat items: "+meatCount);
	console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
	console.log("meat text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	getVegetables(runningTotal, text1);
}

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
	getCrust(runningTotal, text1);
}

function getCrust() {
	
	
	var runningTotal = 0;
	var crustTotal = 0;
	var crustArray = document.getElementsByClassName("crust");
	for (var i = 0; i < ccrustArray.length; i++) {
		if (crustArray[i].checked) {
			var selectedCrust = crustArray[i].value;
			text1 = text1+selectedCrust+"<br>";
		}
	}
	if (selectedCrust === "Plain Crust") {
		crustTotal = 0;
	} else if (selectedCrust  === "Garlic Butter Crust") {
		crustTotal = 0;
	} else if (selectedCrust === "Cheese Stuffed Crust") {
		crustTotal = 3;
	}  else if (selectedCrust  === "Spicy Crust") {
		crustTotal = 0;
	}  else if (selectedCrust  === "House Special Crust") {
		crustTotal = 0;
	}
	runningTotal = crustTotal;
	console.log(selectedCrust+" = $"+cheeseTotal+".00");
	console.log("crust text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
}
