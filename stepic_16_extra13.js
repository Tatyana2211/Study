function testCycle(n) {
	var x;
	x = 0;
	while (n > 0) {
		x += n % 10;
		n = Math.trunc(n / 10);
	}
	return x;
}