import { Dictionary } from 'vue-router/types/router'
import { SetupContext } from '@vue/composition-api'

export function useRouter(context:SetupContext){

    const back:Function = function(){
        context.root.$router.go(-1)
    }

    const replace:Function = function(replace:string){
        context.root.$router.replace(replace)
    }

    const push:Function = function(path:string, query?:Dictionary<string | (string | null)[] | null | undefined>){
        context.root.$router.push({
            path: path,
            query: query
        })
    }

    const getQuery:Function = function(){
        return context.root.$route.query
    }

    return {
        back,
        replace,
        push,
        getQuery
    }
}