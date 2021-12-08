<template>
<div>
  <h3>模块化引用</h3>
  <div>{{nowTime}}</div>
  <button @click="getNowTime">显示时间</button>
</div>
</template>

<script>
import {nowTime,getNowTime} from "@/hooks/useNowTime";

export default {
  name: "nowTime",
  setup(){
    return{nowTime,getNowTime}
  }
}
</script>

<style scoped>

</style>