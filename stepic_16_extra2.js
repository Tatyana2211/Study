function testCycle(k, n) {
	var x;
	let i = 2;
	x = n;
	while (i <= k) {
		x += " " + n;
		++i;
	}
	return x;
}