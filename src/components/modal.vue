<template>
<!--teleport传送组件，绑定在#modal dom节点中-->
  <teleport to="#modal">
    <div id="center">
      <h2>HOLA</h2>
    </div>
  </teleport>
</template>

<script>
export default {
name: "modal"
}
</script>

<style scoped>
#center {
  width: 200px;
  height: 200px;
  border: 2px solid black;
  background: white;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -100px;
}
</style>