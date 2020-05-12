# debounceFun

防抖函数修饰器hook

- const fun = useDebounceFun(()=>{}, 1000);

  @param fun 需要被debounce修饰的函数

  @param timeOut debounce时间

  @return 被修饰过的函数

## 举个栗子

```
<template>
  <div @click="debounce">获取列表数据</div>
</template>

<script>
import { useLoadingFun } from "cutil/src/hooks/loadingFun"
import { useDebounceFun } from "cutil/src/hooks/debounce"

const debounce = useDebounceFun(
  useLoadingFun(async ()=>{
    new Promise((r,j)=>{
      setTimeout(()=>{
        r()
      },1000)
    })
  }),
  1000
)

return {
  debounce
}
</script>
```
