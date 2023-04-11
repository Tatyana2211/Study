function testArray(a, b) {
	function sumInArray(m) {
		let sum = 0, i;
		for (i = 0; i < m.length; ++i)
			sum += m[i];
		return sum;
	}
	return sumInArray(a) + sumInArray(b);
}