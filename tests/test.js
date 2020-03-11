const test = require('ava');

const { default: a } = require('../dist/index');


test('获取一天的结束时间 string', (t) => {
	const end = a('2019/09/18', 'YYYY/MM/DD');
	t.is(end, 1568822399999);
});

test('获取一天的结束时间 number 1', (t) => {
	const end = a(15688223000000);
	t.is(end, 15688223999999);
});

test('获取一天的结束时间 number 2', (t) => {
	const end = a(15688223999999);
	t.is(end, 15688223999999);
});
