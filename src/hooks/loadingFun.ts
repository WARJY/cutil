import { Loading } from "element-ui"
import { LoadingServiceOptions, ElLoadingComponent } from "element-ui/types/loading"

export function useLoadingFun(fun: Function, timeOut = 10000, options?: LoadingServiceOptions) {

    let loadingCpt: ElLoadingComponent;
    let timer: any;
    let close: Function = ()=>{};

    const loadingFun = async function () {
        loadingCpt = Loading.service({
            fullscreen: true,
            text: "加载中",
            ...options
        })

        timer = setTimeout(() => {
            clearTimeout(timer)
            loadingCpt.close()
        }, timeOut)

        close = function () {
            if(!timer) return
            clearTimeout(timer)
            loadingCpt.close()
        }

        await fun(arguments)

        close()
    }

    return { loadingFun, close }
}