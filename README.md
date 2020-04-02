# cutil

cutil是一款无任何依赖，非常实用的工具包，涵盖完美多继承，时间格式化，类型判断，表单验证，本地存储等常用的web开发工具方法 <br>
使用es6编写，支持浏览器打包调用，包含完整的单元测试

## 目前共11个工具，包括

- is			准确的类型判断方法
- multiExtend	完美多继承，完美支持Function Class，ES6 Class
- formCheck		表单验证方法，简单实用
- date			时间格式化方法，支持时间戳，字符串等多种形式调用
- wxAsync		微信小程序API的Promise封装
- storage		基于现代浏览器的storage工具类
- commonCss		基于现代浏览器的实用css工具类,包含scss
- easing		共30种不同的缓动方法
- emitter		一个实用的订阅者类
- parseUrl		url格式化工具
- qrcodes		二维码批量生成工具

## 快速启动

- 安装			`npm install cutil`
- 引入			`import {is,multiExtend,formCheck} from "cutil"`
- 使用			`is([]) === Array`

## 使用说明

- is(target any)<br>
		返回目标对象的类型(js内置对象)<br>
		返回值为[undefined,null,NaN,Function,Object,Array,String,Number,Boolean,Date,JSON]中的一种
		
		is({}) === Object
	
- multiExtend([baseClassArr] Array)	<br>
		返回多个基础类型的组合类<br>
		完美支持Function Class，ES6 Class，constructor，super，instanceOf
		
		let Target = class extends multiExtend([Base1, Base2]) {
			constructor(para) {
				super(para)
			}
		}
	
- formCheck(target Object,option Object)
		传入目标对象和检查配置，通过则返回true，不通过则返回错误提示<br>
		目前内置了["empty","phone","email"]三种规则<br>
		！！option和target键值对顺序必须一一对应<br>
		
		let target = {
			userName: "用户名",
			password: "123456",
			tel: 111111,
			email: "gcc705282892@hotmial.com"
		}
		let result = formCheck(target, {
			"用户名":"empty",
			"密码":"empty",
			"手机号码":["empty","phone"],
			"电子邮箱":["empty","email"]
		})
		//检查通过
		result === true
		//检查不通过
		result === "手机号码不合法"

- date(Class)
	- now(format String)<br>
			返回当前时间，format不传则默认为"YYYY-MM-DD hh:mm:ss"，传入则自动格式化<br>
			
			date.now("YYYY-MM") === "2019-08"
			
	- format(option Object)<br>
			option必传，根据option配置返回格式化后的时间<br>
			option = {<br>
				value: 1565416462326 || "2019-08-10 12:05:01" 需格式化的时间（只能为时间戳或YYYY-MM-DD hh:mm:ss字符串）<br>
				input: "timeStamp" || "dateTime" 传入的时间格式<br>
				output: "timeStamp" || "dateTime" || "YYYY-MM-DD hh" 需要输出的时间格式<br>
			}
			
			date.format({
				value:1565416595,
				input:"timeStamp",
				output:"YYYY-MM-DD hh时"
			}) === "2019-08-10 13时"
			
- wxAsync(Class)			
		返回微信小程序wx对象的Promise封装（cutil会检查全局对象中的wx对象，仅在微信小程序环境下可用）
		
		//选择图片
		async function(){
			await $wxAsync.chooseImage({
				count: 1
			}).then(res => {
				if (res.errMsg === "chooseImage:ok") {
					console.log(res.tempFilePaths[0])
				}
			})
		}

- storage(Class)			
	- set type("localStorage" || "sessionStorage")<br>
			设置使用的本地存储类型<br>
			默认为"localStorage"
		
	- set timeOut(Number)<br>
			设置本地存储类型的过期时间，单位为分钟<br>
			默认为20
	
	- set baseKey(String)<br>
			设置本地存储键值的前缀<br>
			默认为""
			
	- getStorage(key String)<br>
			获取本地数据存储，过期或不存在则为null
			
			storage.getStorage("test_key") === "test_value" || null
			
	- setStorage(key String，value any，minute Number)<br>
			设置本地存储键，值及过期时间
			
			storage.setStorage("test_key"，"test_value"，5)
	
	- removeStorage(key String)<br>
			移除本地存储
			
			storage.removeStorage("test_key")

- emitter(Class)			
	- on(eventName, callback)<br>
			订阅事件<br>
			
			let fun = data=>{
				console.log("test emit")
			}
			emitter.on("test",fun)
		
	- off(eventName, callback)<br>
			取消订阅事件<br>

			emitter.off("test", fun)
	
	- emit(eventName, data)<br>
			发布订阅事件<br>

			emitter.emit("test", "我是参数")
	
	- once(eventName,callback)<br>
			只订阅一次<br>

			emitter.once("test",data=>{
				console.log("test emit")
			})
			emitter.emit("test", "我是参数")
			//执行一次后就取消订阅
			emitter.emit("test", "我是参数")
	
	- isSubed(eventName,callback)<br>
			该事件是否被订阅<br>

			emitter.isSubed("test", fun)

- parseUrl(url)

	格式化url

			let query = parseUrl(url)

- qrcodes(option)

	批量生成二维码（仅在浏览器环境可下载）

			let option = {
				nameList: ["A", "B", "C"],
				dataList: [
					"code=1576206365852a53be6e0f7da7e8c7d965f1b3ea831e2", "code=1576206365852a53be6e0f7da7e8c7d965f1b3ea831e2", "code=1576206365852a53be6e0f7da7e8c7d965f1b3ea831e2"],
				timeOut: 1000
			}
			qrcodes(option)

