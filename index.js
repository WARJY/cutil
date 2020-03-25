const date = require('./src/date.js')
const formCheck = require('./src/formCheck.js')
const is = require('./src/is.js')
const multiExtend = require('./src/multiExtend.js')
const emitter = require('./src/emitter.js')
const easing = require('./src/easing.js')
const parseUrl = require('./src/parseUrl.js')

let Modal = {}
let storage = {}
let wxAsync = {}

//引入不同环境的工具包
try{storage = require('./src/storage.js')}catch(e){}
try{wxAsync = require('./src/wxAsync.js')}catch(e){}
try{Modal = require('./src/modal.vue')}catch(e){}

module.exports = {
	date: date,
	formCheck: formCheck,
	is: is,
	multiExtend : multiExtend,
	storage : storage,
	wxAsync : wxAsync,
	Modal : Modal,
	emitter : emitter,
	easing : easing,
	parseUrl : parseUrl
}