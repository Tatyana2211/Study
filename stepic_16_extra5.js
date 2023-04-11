function testCycle(a, b) {
	var x, min, max;
	if (a > b) {
		min = b;
		max = a;
	}
	else {
		min = a;
		max = b;
	}
	x = max--;
	while (max >= min) {
		x += " " + max--;

	}
	return x;
}