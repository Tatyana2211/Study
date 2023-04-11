function testCycle(a, b) {
	var x;
	let min, max;
	if (a > b) {
		min = b;
		max = a;
	} else {
		min = a;
		max = b;
	}
	while (min != 0) {
		max = max % min;
		x = min;
		min = max;
		max = x;
	}
	return x;
}