import { watch } from "@vue/composition-api"
import { formCheck, is } from "cutil"

export interface useFormOptions {
    valid?: Object,
    commit?: Function,
    autoCommit?: Boolean | string[] | [][] | Function[],
    fields: Object
}

export function useForm(useFormOptions: useFormOptions) {

    //储存默认值
    const state:Object = {}
    Object.keys(useFormOptions.fields).forEach(field=>{
        state[field] = useFormOptions.fields[field].value
    })
    const defaultState = {...state}

    //设置值
    const set:Function = function(data:Object){
        Object.keys(useFormOptions.fields).forEach(field=>{
            useFormOptions.fields[field].value = data[field]
        })
    }

    //重置
    const reset:Function = function () {
        Object.keys(useFormOptions.fields).forEach(field=>{
            useFormOptions.fields[field].value = defaultState[field]
        })
    }

    //验证
    const valid:Function = useFormOptions.valid? 
    function () {
        return formCheck({...state}, useFormOptions.valid)
    }
    :function () { return true }

    //提交
    const commit:Function = useFormOptions.commit? 
    function () {
        let timer = setTimeout(() => {
            let cb:any = useFormOptions.commit
            clearTimeout(timer)
            cb(valid())
        }, 0)
    }:function () { return valid() }

    //自动提交
    let commitList:any = []
    if (useFormOptions.autoCommit === true) commitList = useFormOptions.fields
    if (is(useFormOptions.autoCommit) === Array) commitList = useFormOptions.autoCommit
    commitList.forEach((prop: any) => {
        watch(()=>useFormOptions.fields[prop].value, function(val,old){
            if(val == old) return
            let timer = setTimeout(() => {
                clearTimeout(timer)
                commit()
            }, 0)
        })
    })

    return {
        set,
        reset,
        valid,
        commit
    }
}