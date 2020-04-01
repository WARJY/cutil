import is from '../src/is.js'

describe('test util functions', () => {
	test('test is', () => {
		expect(is(undefined)).toBe(undefined)
		expect(is(null)).toBe(null)
		expect(is({})).toBe(Object)
		expect(is([])).toBe(Array)
		expect(is("1")).toBe(String)
		expect(is(1)).toBe(Number)
		expect(is(true)).toBe(Boolean)
		expect(is(() => {})).toBe(Function)
		expect(is(new Date())).toBe(Date)
	})
})
