export function useTimeOutFun(fun:Function, timeOut:number) {

    let cb = setTimeout(function () {
        fun()
    }, timeOut)

    let clear = function () {
        if(cb) clearTimeout(cb)
    }

    let run = function () {
        if(!cb) return
        clear()
        fun()
    }

    return { run, clear }
}