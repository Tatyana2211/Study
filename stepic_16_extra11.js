function testCycle(n) {
	var x;
	let i, j;
	j = 2;
	for (i = n - 1; i > 1; --i) {
		if (n % i == 0) {
			++j;
		}
	}
	if (j == 2) {
		x = "Простое число";
	} else {
		x = "Составное число";
	}
	return x;
}