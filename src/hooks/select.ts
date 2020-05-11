import { ref, Ref } from '@vue/composition-api';

export function useSelect(muti=false, callback?:Function){

    let cb:any = callback

    const select:Ref<any> = ref("")
    const selectArr:Ref<any[]> = ref([])
    const loading:Ref<boolean> = ref(false)
    const selectFun:Function = async function(val:any){
        loading.value = true
        await cb(val)
        loading.value = false
    }
    
    return {
        select,
        selectArr,
        loading,
        selectFun
    }
}