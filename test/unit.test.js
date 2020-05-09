import { toCent, toYuan } from '../src/unit.js'

describe('test util functions', () => {
	test('test unit', () => {
		console.log(toCent(19.99) == 1999)
		console.log(toYuan(1999) == 19.99)
	})
})
