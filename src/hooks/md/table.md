# table

包含表格数据，选择功能的逻辑hook

- const {
  data,
  select,
  selectChange
  } = useTable();

  @return data 表格绑定的数组

  @return select 带选择功能的表格，已选择 item 的数组

  @return selectChange 当选择发生变化的处理函数

  @return selectFilter 当选择发生变化时的处理函数（过滤已存在 item）

## 举个栗子

```
<template>
    <el-table :data="data" @select-change="selectChange">
    </el-table>
</template>

<script>
import { useTable } from "cutil/src/hooks/table"

const {
    data,
    select,
    selectChange,
    selectFilter,
} = useTable();

return {
    data,
    select,
    selectChange,
    selectFilter,
}
</script>
```
