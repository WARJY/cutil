import { SetupContext } from '@vue/composition-api';

export function useDebounceFun(fun:Function, timeOut: number){

    let timer:any = ""

    let debounceFun = function(){
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
           fun()
        },
        timeOut)
    }

    return debounceFun
}