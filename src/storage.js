const MAP = {
	"localStorage":localStorage,
	"sessionStorage":sessionStorage
}

const myStorage = class {
	constructor() {
		this.type = "localStorage"
		this.timeOut = 20
		this.keyBase = ""
	}

	getStorage(key) {
		let currentKey = this.keyBase + key
		try {
			let o = JSON.parse(MAP[this.type].getItem(currentKey))
			if (!o || o.expires < Date.now()) return null
			else return o.value
		} catch (e) {
			return MAP[this.type][currentKey]
		} finally {}
	}

	setStorage(key, value, minutes) {
		let currentKey = this.keyBase + key
		// 设置过期原则
		if (!value) {
			MAP[this.type].removeItem(currentKey)
		} else {
			let minute = minutes || this.timeOut || 20
			let exp = new Date()
			MAP[this.type].setItem(currentKey, JSON.stringify({
				value,
				expires: exp.getTime() + minute * 60 * 1000
			}))
		}
	}

	removeStorage(key) {
		let currentKey = this.keyBase + key
		MAP[this.type].removeItem(currentKey)
	}
}

module.exports = new myStorage()