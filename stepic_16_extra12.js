function testCycle(n) {
	var x, i, j;
	var arr = [];
	if (n > 2) {
		x = "2";
		arr[0] = false;
		arr[1] = false;
	} else {
		x = "";
	}
	for (i = 2; i < n; ++i) {
		arr[i] = true;
	}
	for (i = 2; i < n; ++i) {
		if (arr[i] == true) {
			j = i * 2;
			while (j < n) {
				arr[j] = false;
				j += i;
			}
		}
	}
	for (i = 3; i < n; ++i) {
		if (arr[i] == true) {

			x = x + " " + i;
		}
	}
	return x;
}