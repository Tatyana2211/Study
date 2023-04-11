function testCycle(n) {
	var x;
	x = "1 4";
	for (let i = 3; i <= n; ++i) {
		x += " " + i * i;
	}
	return x;
}