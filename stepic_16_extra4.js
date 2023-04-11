function testCycle(a, b) {
	var x;
	let first, second;
	if (a > b) {
		first = b;
		second = a;
	} else {
		first = a;
		second = b;
	}
	x = first++;
	while (first <= second) {
		x += " " + first;
		++first;
	}

	return x;
}