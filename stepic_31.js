function testErrorFunc(a, func) {
	try {
		func(a);
	} catch (x) {
		return x.name;
	}
}