function testCycle(n) {
	var x = "1";
	var k;
	var arr = [];
	k = -1;
	while (n > 1) {
		++k;
		arr[k] = n % 2;
		n = Math.trunc(n / 2);
	}
	for (k; k >= 0; --k) {
		x += arr[k];
	}
	return x;
}