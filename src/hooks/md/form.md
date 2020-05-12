# form

包括表单验证，提交，自动提交，重置功能的逻辑hook

- const { reset, valid, commit } = useForm({
    fields: {},
    valid: {},
    commit(result){},
    autoCommit: true
})

    @prop fields    表单关联字段，建议用户自己创建interface以便于类型检查

    @prop valid     表单验证规则（cutil.formCheck规则）

    @prop commit    提交回调，验证结果会作为参数传入

    @prop autoCommit 传入true则为所有字段添加自动提交，传入数组则为数组中的字段添加

    @return reset 表单重置方法，重置为field传入的初始值

    @return valid 表单验证，返回验证结果

    @return commit 手动提交，表单验证结果通过参数传入

- type
    ```
    interface useFormOptions {
        valid?: Object,
        commit?: Function,
        autoCommit?: Boolean | string[] | [][] | Function[],
        fields: Object
    }
    ```



## 举个栗子

```
import { useForm } from "cutil/src/hooks/form"

interface useFormOptionsFieldsTest {
    timeRange: Ref<string>;
    time: Ref<string[]>;
    email: Ref<string>;
}

const useFormOptionsFieldsTest: useFormOptionsFieldsTest = {
    timeRange: ref("1"),
    time: ref([]),
    email: ref(""),
}

const { reset, valid, commit } = useForm({
    fields: useFormOptionsFieldsTest,
    //规则基于formCheck工具
    valid: {
        时间维度: ["empty",[1,2]],      //不为空，且值为1或2
        //如果useFormOptionsFieldsTest.timeRange.value===1则不为空，否则不验证
        日期: ()=>useFormOptionsFieldsTest.timeRange.value===1?["empty"]:[] },     
        邮箱地址：["empty","email"]     //不为空，且为email格式
    },
    commit(result){
        // result:表单验证结果,通过返回true,否则返回提示
    },
    autoCommit: ["timeRange"]           //当timeRange变化时自动提交
    //autoCommit: true                  //自动提交
})

return {
    ...useFormOptionsFieldsTest,
    reset, valid, commit
}
```