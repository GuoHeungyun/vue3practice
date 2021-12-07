<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>
    <button v-for="(item,index) in fruits"
            :key="index"
            @click="btnClick(index)">{{index}}:{{item}}
    </button>
    <div>选择了{{currentSelect}}</div>
  </div>
  <reactive-demo></reactive-demo>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import reactiveDemo from "@/components/reactiveDemo.vue";

export default defineComponent({
  name: 'App',
  components: {
    reactiveDemo
  },
  setup(){
    const fruits = ref(['菠萝','香蕉','橘子','柠檬'])
    const currentSelect = ref('')
    const btnClick = (index:number) => {
      currentSelect.value = fruits.value[index]
    }
    return{
      fruits,
      currentSelect,
      btnClick
    }
  }
});
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
