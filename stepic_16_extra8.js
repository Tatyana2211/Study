function testCycle(n) {
	var x = 0;
	for (let i = 1; i <= n; i += 0.5) {
		x += i;
	}
	return x;
}