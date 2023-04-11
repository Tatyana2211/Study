function testCycle(n) {
	var x = 0;
	for (let i = 1; i <= n; i++) {
		x += i;
	}
	return x;
}