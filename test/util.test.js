import {is,formCheck,date,multiExtend,storage,scss} from '../index.js'
console.log(scss)

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

	test('test formCheck', () => {
		let target = {
			userName: "用户名",
			password: "123456",
			tel: 15320715871,
			email: "gcc705282892@hotmial.com"
		}
		expect(formCheck(target, {
			"用户名":"empty",
			"密码":"empty",
			"手机号码":["empty","phone"],
			"电子邮箱":["empty","email"]
		})).toBe(true)
	})
	
	test('test date', () => {
		console.log(date.now())
		console.log(date.now("YYYY-MM-DD"))
		console.log(date.format({
			value:new Date().getTime(),
			input:"timeStamp",
			output:"dateTime"
		}))
		console.log(date.format({
			value:"2019-08-04 23:15:25",
			input:"dateTime",
			output:"timeStamp"
		}))
	})
	
	test('test multiExtend', () => {
		let Base1 = class{
			constructor(para) {
				console.log("Base1 construct")
			}
		}
		Base1.prototype.Base1 = "Base1"
		
		let Base2 = class{
			constructor(para) {
				console.log("Base2 construct")
			}
		}
		Base2.prototype.Base2 = "Base2"
		
		let Target = class extends multiExtend([Base1, Base2]) {
			constructor(para) {
				super(para)
			}
		}
		
		let t = new Target()
		console.log(t.Base1)
		console.log(t.Base2)
		console.log(t instanceof Target)
		console.log(t instanceof Base1)
		console.log(t instanceof Base2)
	})
	
})
