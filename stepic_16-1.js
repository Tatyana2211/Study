function testFactorial(a) {
	var x;
	x = 1;
	for (i = 1; i <= a; i = i + 1) {
		x = x * i;
	}
	return x;
}