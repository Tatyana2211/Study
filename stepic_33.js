function testRegExp(s, sub_s) {
	var re = new RegExp(sub_s, "g");
	var arrRE = new Array;
	arrRE = s.match(re);
	return arrRE.join();
}