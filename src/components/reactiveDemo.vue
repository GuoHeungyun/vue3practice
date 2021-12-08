<template>
<div>
  <h2>reactive例子</h2>
  <button v-for="(item,index) in data.fruits"
          :key="index"
          @click="data.btnClick(index)">{{index}}:{{item}}
  </button>
  <div>reactive演示：选择了 data.currentSelect：{{data.currentSelect}}---- currentSelect：{{currentSelect}}</div>
  <button @click="overAction">点餐完成</button>
  <div>{{overText}}</div>
</div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref, toRefs,watch} from 'vue';

interface IData{
  fruits: string[];
  currentSelect: string;
  btnClick: (index:number) => void;
}

export default defineComponent({
  name: "reactiveDemo",
  setup(){
    const data:IData = reactive({
      fruits: ['菠萝','香蕉','橘子','柠檬'],
      currentSelect: '',
      btnClick: (index:number) => {
        data.currentSelect = data.fruits[index]
      }
    })
    // const obj = {
    //   fruits: ['菠萝','香蕉','橘子','柠檬'],
    //   currentSelect: '',
    //   btnClick: (index:number) => {
    //     data.currentSelect = data.fruits[index]
    //   }
    // }
    //toRefs批量创建ref类型数据, 并和以前数据关联
    const refData = toRefs(data);
    // console.log(data);
    // console.log(obj);
    // console.log(refData);
    const overText = ref('');
    const overAction = () => {
      overText.value = '点餐完成 | ' + overText.value;
      // document.title = overText.value;
    }
    //watch中只能是getter函数,ref,reactive对象或者数组
    watch([overText,()=>data.currentSelect],(newValue, oldValue) => {
      console.log(`new--->${newValue}`);
      console.log(`old--->${oldValue}`);
      document.title = newValue[0];
    });
    return{
      data,
      /*...data不行,结构后只是普通变量*/
      ...refData,
      overAction,
      overText
    }
  }
})
</script>

<style scoped>

</style>