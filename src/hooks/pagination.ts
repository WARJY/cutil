import { SetupContext, reactive, ref, Ref } from '@vue/composition-api';

export function usePagination(callback?:Function){

    let cb:any = callback

    const page:Ref<number> = ref(1)
    const pageSize:Ref<number> = ref(10)
    const pageCount:Ref<number> = ref(1)

    const pageChange:Function = function(curPage:any){
        page.value = curPage
        cb(curPage)
    }

    return {
        page,
        pageSize,
        pageCount,
        pageChange
    }
}