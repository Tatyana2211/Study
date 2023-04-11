function testArray(a, b) {
	function arrOfString(String) {
		let lengthString = String.length, i;
		let arrayOfString = new Array;
		for (i = 0; i < lengthString; ++i) {
			arrayOfString[i] = String[i];
		}
		return arrayOfString;
	}
	let stringsArray = new Array;
	stringsArray = arrOfString(a).concat(arrOfString(b));
	stringsArray.unshift("Иванов");
	stringsArray.reverse();
	return stringsArray.join("");
}