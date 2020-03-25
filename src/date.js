const FORMAT = {
	"YYYY": (date) => {
		return date.getFullYear()
	},
	"MM": (date) => {
		return fmtNum(date.getMonth() + 1)
	},
	"DD": (date) => {
		return fmtNum(date.getDate())
	},
	"hh": (date) => {
		return fmtNum(date.getHours())
	},
	"mm": (date) => {
		return fmtNum(date.getMinutes())
	},
	"ss": (date) => {
		return fmtNum(date.getSeconds())
	}
}

const fmtNum = function(num) {
	if (num < 10) return "0" + num
	else return num
}

const MAP = {
	input: {
		"timeStamp": function(val) {
			return new Date(val)
		},
		"dateTime": function(val) {
			let dateStr = val.substring(0, 19);
			dateStr = dateStr.replace(/-/g, '/');
			return new Date(dateStr)
		}
	},
	output: {
		"timeStamp": function(date) {
			return date.getTime()
		},
		"dateTime": function(date) {
			return ((date.getFullYear()) + "-" +
				(date.getMonth() + 1) + "-" +
				(date.getDate()) + " " +
				(date.getHours()) + ":" +
				(date.getMinutes()) + ":" +
				(date.getSeconds())
			)
		}
	}
}

const option = {
	value: "",
	input: "",
	output: ""
}

const date = {
	now:function(format) {
		let _format = format || "YYYY-MM-DD hh:mm:ss"
		let _date = new Date()
		Object.keys(FORMAT).forEach(key => {
			if (_format.indexOf(key) > -1) {
				_format = _format.replace(key, FORMAT[key](_date))
			}
		})
		return _format
	},
	format:function(option) {
		if (!option) return console.error("缺少格式化选项")
		if (!option.value || !option.input || !option.output) return console.error("选项格式错误")
		let _value = option.value
		let _input = option.input
		let _output = option.output
		let _date;
		if (!MAP.input[_input]) console.error("输入必须为时间戳或完整的datetime字符串")
		//格式化输入为Date对象
		_date = MAP.input[_input](_value)
		//输出
		if (MAP.output[_output]) return MAP.output[_output](_date)
		else{
			let result = option.output;
			Object.keys(FORMAT).forEach(key=>{
				if(result.indexOf(key) > -1) result = result.replace(key,FORMAT[key](_date))
			})
			return result
		}
	}
}

module.exports = date
