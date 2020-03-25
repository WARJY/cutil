const is = require('./is.js')

module.exports = function(baseArr) {
	if (is(baseArr) !== Array) return console.error("反射方法参数应为数组")
	
	//构造反射继承方法
	class Base {
		constructor(para) {
			baseArr.forEach(base => {
				try {
					Reflect.construct.call(this, base, [para])
				} catch (e) {
					console.error("反射构造方法错误")
				}
			})
		}
	}
	
	baseArr.forEach((base, i) => {
		//继承原型对象
		Object.entries(base.prototype).forEach(([k, v]) => {
			Object.defineProperty(Base.prototype,k,Object.getOwnPropertyDescriptor(base.prototype,k))
		})
		//修复原型链
		if (i > 0) {
			base.prototype.__proto__ = baseArr[i - 1].prototype
		}
	})
	Base.prototype.__proto__ = baseArr[baseArr.length - 1].prototype
	return Base
}
