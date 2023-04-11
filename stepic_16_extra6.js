function testCycle(a, b) {
	var x;
	x = b * b;
	if (a > b) {
		b++;
		while (b <= a) {
			x += b * b;
			++b;
		}
	} else {
		b--;
		while (b >= a) {
			x += b * b;
			--b;
		}

	}
	return x;
}