# pagination

包含页码，页数，页码变化的分页逻辑 hook

- const { page, pageSize, pageCount, pageChange } = usePagination()

  @return page 分页页码

  @return pageSize 分页每页页数

  @return pageCount 分页页数

  @return pageChange 当页码发生变化的处理函数

## 举个栗子

```
<template>
    <el-pagination background layout="prev, pager, next" 
    :current-page.scyn="page" 
    :page-size="pageSize" 
    :page-count="pageCount"
	@current-change="pageChange">
	</el-pagination>
</template>

<script>
import { usePagination } from "cutil/src/hooks/pagination"

const { 
    page, 
    pageSize, 
    pageCount, 
    pageChange 
} = usePagination()

return {
    data,
    select,
    selectChange,
    selectFilter,
}
</script>
```
