<template>
  <label class="notes">
    <span class="name">备注</span>
    <input type="text" v-model="value"  placeholder="在这里输入备注">

  </label>
</template>

<script lang="ts">
import Vue from 'vue';
import  {Component,Watch} from 'vue-property-decorator';

@Component
export default class Notes extends Vue{
 value = '';
 @Watch('value')//ts的watch写法
  onValueChange(value: string){
   this.$emit('update:value', value)
 }
}
</script>

<style lang="scss" scoped>
.notes{
  font-size: 14px;
  background:#f5f5f5;
  //display: block;//默认是inline-block
  padding-left: 16px;

  align-items: center;//垂直居中
  display:flex;//让输入框宽度拉长
  .name{
    padding-right:16px;
  }
  input{//点击整个padding都可以输入
    height: 64px;//height,line-height,padding都可以
    flex-grow: 1;//让input变宽
    background:transparent;
    border:none;
    padding-right: 16px;//右边的padding放input里面
  }
}
</style>