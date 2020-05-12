# select

包含下拉选项数据，多选，loading，选择回调功能的逻辑hook

- const {
    select,
    selectArr,
    loading,
    selectFun
} = useSelect(true, ()=>{});

  @param muti 是否多选，默认为false

  @param callback 搜索的回调函数

  @return select 下拉选项绑定的数据

  @return selectArr 下拉选项多选绑定的数组

  @return loading 是否在loading状态

  @return selectFun 当选择发生变化时的处理函数

## 举个栗子

```
<template>
    <el-select v-model="selectArr" :loading="loading" @change="selectFun">
        <el-option value="1" label="选项1"></el-option>
    </el-select>
</template>

<script>
import { useSelect } from "cutil/src/hooks/select"

const {
    select,
    selectArr,
    loading,
    selectFun
} = useSelect(true, ()=>{
    console.log(111)
});

return {
    select,
    selectArr,
    loading,
    selectFun
}
</script>
```
