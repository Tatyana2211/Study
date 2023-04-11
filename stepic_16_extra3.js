function testCycle(a, b) {
	var x;
	x = a++;
	while (a <= b) {
		x += " " + a;
		++a;
	}
	return x;
}