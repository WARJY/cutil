import { ref, Ref } from '@vue/composition-api';
import { is } from 'cutil'

export function useTable(uniqueId?: string) {
    const data: Ref<any[]> = ref([])
    const select: Ref<any[]> = ref([])
    const selectChange:Function = function(val:any) {
        select.value = val
    }
    const selectFilter: Function = function (selected: any) {
        if (is(selected) === Array) return selected.forEach((selEl: any) => {
            if (uniqueId) {
                let exit: boolean = select.value.some(item => {
                    return item[uniqueId] === selEl[uniqueId]
                })
                if (!exit) select.value.push(selEl)
            }
            if (!uniqueId) {
                let exit: boolean = select.value.some(item => {
                    return item === selEl
                })
                if (!exit) select.value.push(selEl)
            }
        })
        if (uniqueId) {
            let exit: boolean = select.value.some(item => {
                return item[uniqueId] === selected[uniqueId]
            })
            if (!exit) select.value.push(selected)
        }
        if (!uniqueId) {
            let exit: boolean = select.value.some(item => {
                return item === selected
            })
            if (!exit) select.value.push(selected)
        }
    }

    return {
        data,
        select,
        selectChange,
        selectFilter
    }
}