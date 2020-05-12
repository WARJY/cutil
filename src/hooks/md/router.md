# router

包含路由刷新，前进，后退，重定向，传参功能的逻辑 hook

- const {
  refresh,
  back,
  replace,
  push,
  getQuery
  } = useRouter(context);

  @param context setupContext

  @return refresh 刷新当前页面

  @return back 后退

  @return replace 重定向

  @return push 推入新页面

  @return getQuery 获取上个页面的传参

## 举个栗子

```
<template>
    <div @click="refresh">刷新</div>
    <div @click="back">刷新</div>
    <div @click="replace('home/index')">刷新</div>
    <div @click="push('home/detail', {id:1})">刷新</div>
</template>

<script>
import { useRouter } from "cutil/src/hooks/router"

export default {
    setup(props, context){
        const {
            refresh,
            back,
            replace,
            push,
            getQuery
        } = useRouter(context);

        onMounted(()=>{
            let query = getQuery()
        })

        return {
            refresh,
            back,
            replace,
            push,
            getQuery
        }
    }
}
</script>
```
