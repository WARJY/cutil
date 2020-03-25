let $wx = {}
//判断是否为微信环境
try{
	if(!wx) console.error("当前不是微信环境")
	Object.entries(wx).forEach(([k, v]) => {
		$wx[k] = function(option) {
			return new Promise((r, j) => {
				let base = {
					success: data => {
						//失败
						if(data.errMsg.indexOf("ok") === -1){
							if(option.fail) option.fail(e)
							wx.showModal({
								title:e.errMsg
							})
							return j(data)
						}
						if(option.success) option.success(data)
						r(data)
					},
					//接口调用失败
					fail: e => {
						if(option.fail) option.fail(e)
						// wx.showModal({
						// 	title:e.errMsg
						// })
						j(e)
					}
				}
				wx[k](Object.assign({}, option, base))
			})
		}
	})
}catch(e){}

module.exports = $wx
