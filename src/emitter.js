function Public() {
    this.handlers = {};
}

Public.prototype = {
    // 订阅事件
    on: function (eventType, handler) {
        if (!(eventType in this.handlers)) {
            this.handlers[eventType] = [];
        }
        this.handlers[eventType].push(handler);
        return this;
    },
    // 只触发一次
    once: function (eventType, handler) {
        handler.once = true
        return this.on(eventType, handler)
    },
    // 触发事件(发布事件)
    emit: function (eventType) {
        let handlerArgs = Array.prototype.slice.call(arguments, 1);
        for (let i = 0; i < this.handlers[eventType].length; i++) {
            this.handlers[eventType][i].apply(this, handlerArgs);
            if(this.handlers[eventType][i].once === true) this.off(eventType, this.handlers[eventType][i])
        }
        return this;
    },
    // 删除订阅事件
    off: function (eventType, handler) {
        let currentEvent = this.handlers[eventType];
        let len = 0;
        if (currentEvent) {
            len = currentEvent.length;
            for (let i = len - 1; i >= 0; i--) {
                if (currentEvent[i] === handler) {
                    currentEvent.splice(i, 1);
                }
            }
        }
        return this;
    },
    // 获取订阅列表
    isSubed(eventType, handler){
        return this.handlers[eventType].indexOf(handler) > -1
    }
};

let emitter = new Public()
module.exports = emitter