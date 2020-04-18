const is = require('./is.js')

// 以下所有的检测规则：
// 通过则返回true，否则返回tip
const MAP = {
	"empty":function(field,val){
		let _tip = field + "不能为空"
		if(is(val) === String) val = val.replace(/\s+/g, "")
		if(!val) return _tip
		if(is(val) === NaN) return _tip
		if(is(val) === Array && val.length === 0) return _tip
		if(is(val) === Object && Object.keys(val).length === 0) return _tip
		return true
	},
	"phone":function(field,val){
		let _tip = "请输入正确的手机号"
		if(!/^1\d{10}$/.test(val)) return _tip
		return true
	},
	"email":function(field,val){
		let _tip = "请输入正确的邮箱地址"
		if(!/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(val)) return _tip
		return true
	}
}

const formCheck = function(target,rule){
	//判空
	if(!target || !rule) return console.error("目标对象或规则缺失")
	//判断key长度
	let keys_target = Object.keys(target).concat(Object.getOwnPropertySymbols(target))
	let keys_rule = Object.keys(rule)
	if(keys_target.length !== keys_rule.length) return console.error("规则与目标对象长度不匹配")
	//开始
	let result = keys_target.map((key,i)=>{
		let currentField = keys_rule[i]
		let currentValue = target[key]
		let currentRule = rule[currentField]
		//格式化规则为数组
		if(is(currentRule) === String) currentRule = [currentRule]
		let currentRes = currentRule.map(r=>{
			//字符串规则
			if(is(r) === String){
				//跳过不存在的规则
				if(!MAP[r]) return true
				return MAP[r](currentField,currentValue)
			}
			//数组规则
			if(is(r) === Array){
				let aFlag = false
				r.forEach(rr=>{
					if(currentValue === rr) aFlag = true
				})
				if(aFlag === true) return true
				return currentField + "不合法"
			}
		})
		let flag = true
		let reason = []
		currentRes.forEach(v=>{
			if(v!==true){
				flag = false
				reason.push(v)
			}
		})
		if(flag === true) return true
		else return reason
	})
	let flag = true
	let reason = []
	result.forEach(v=>{
		if(v!==true){
			flag = false
			reason = reason.concat(v)
		}
	})
	if(flag === true) return true
	else return reason
}

module.exports = formCheck