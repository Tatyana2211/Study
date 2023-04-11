function testCycle(n) {
	var x = 1;
	let fib1, fib2, i;
	if (n <= 2) {
		x = 1;
	} else {
		fib1 = 1;
		fib2 = 1;
	}
	for (i = 3; i <= n; ++i) {
		x = fib1 + fib2;
		fib1 = fib2;
		fib2 = x;
	}
	return x;
}