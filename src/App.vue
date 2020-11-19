<template>

  <router-view/>

</template>

<style lang="scss">
@import "../src/assets/style/reset.scss";
@import "../src/assets/style/helper.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  line-height: 1.5;
  font-family: $font-hei;
  font-size: 6px

}

.clearfix::after {
  content: '';
  display: block;
  clear: both;
}

a {
  text-decoraion: none;
}
</style>
