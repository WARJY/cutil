import emitter from '../src/emitter.js'

describe('test util functions', () => {
	test('test emitter', () => {
		//订阅
		let onFun = () => { console.log("testOn") }
		emitter.on("testOn", onFun)
		emitter.emit("testOn")
		emitter.emit("testOn")

		//只触发一次
		emitter.once("testOnce",()=>{
			console.log("testOnce")
		})
		emitter.emit("testOnce")
		emitter.emit("testOnce")

		//订阅是否存在
		let isSubed = emitter.isSubed("testOn", onFun)
		console.log(isSubed)

		//取消订阅
		emitter.off("testOn", onFun)
		emitter.emit("testOn")
		console.log(emitter.isSubed("testOn", onFun))
	})
})
