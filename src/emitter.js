function Public() {
    this.handlers = {};
}

Public.prototype = {
    // 订阅事件
    on: function (eventType, handler) {
        if (!this.handlers[eventType]) this.handlers[eventType] = []
        this.handlers[eventType].push(handler)
    },
    // 只触发一次
    once: function (eventType, handler) {
        handler.once = true
        this.on(eventType, handler)
    },
    // 触发事件(发布事件)
    emit: function (eventType, data) {
        this.handlers[eventType].forEach(handler=>{
            handler(data)
            if(handler.once === true) this.off(eventType, handler)
        })
    },
    // 删除订阅事件
    off: function (eventType, handler) {
        this.handlers[eventType].forEach((item,index)=>{
            if(item === handler) this.handlers[eventType].splice(index, 1)
        })
    },
    // 获取订阅列表
    isSubed(eventType, handler){
        return this.handlers[eventType].indexOf(handler) > -1
    }
};

let emitter = new Public()
module.exports = emitter