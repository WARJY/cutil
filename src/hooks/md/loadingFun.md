# loadingFun

依赖于element-ui Loading组件的loading修饰器hook

- const fun = useLoadingFun(()=>{}, 10000, {
  fullScreent: true，
  lock: true,
  target: ".el-content",
  text: "加载中"
});

  @param fun 需要被loading修饰的函数

  @param timeOut 最大时间限制，超出后自动取消loading，默认10*1000

  @param options element-ui Loading服务options

  @return 被修饰过的函数

## 举个栗子

```
<template>
  <div @click="loading">筛选</div>
</template>

<script>
import { useLoadingFun } from "cutil/src/hooks/loadingFun"

const loading = useLoadingFun(async ()=>{
    console.log(1)
});

return {
  loading
}
</script>
```
