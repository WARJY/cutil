# timeOutFun

包含开始和清除的定时器函数hook

- const {
    run, clear
} = useTimeOutFun(()=>{},1000);

  @return run 直接执行并清除timer

  @return clear 手动清除timer

## 举个栗子

```
<script>
import { useTimeOutFun } from "cutil/src/hooks/timeOutFun"

const { run, clear } = useTimeOutFun(async ()=>{
    console.log(1)
},1000);

return {}
</script>
```
