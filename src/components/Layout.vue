<template>
  <div class="nav-wrapper">
    <div class="content" :class="classPrefix &&`${classPrefix}-content`"></div>//接受一个叫class-prefix，里面有可以供控制的类，但是不希望一个个的传给我
    //就传一个前缀，就对应10个不同的div，要控制div就在一个没有scoped的style，里面去写；给一个组件传你想要的类

        <slot/>
    <Nav />
  </div>
</template>
<script lang="ts">
export default {
    props:['classPrefix'],
    name:'Layout'
}
</script>

<style lang="scss" scoped>
.nav-wrapper {
  
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  overflow: auto;
  flex-grow: 1;
}    
</style>