<template>
  <div class="tags">

    <div class="new">
      <button @click="create">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in dataSource" :key="tag"
          :class="{selected: selectedTags.indexOf(tag)>=0 }"
          @click="toggle(tag)">{{ tag }}</li>

    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component,Prop} from 'vue-property-decorator';

@Component
export default class Tags extends Vue{
 @Prop() readonly  dataSource: string[] | undefined;//只能写全局的构造函数props必须加括号
 selectedTags: string[]= [];//字符串数组,让ts识别加上：string

 toggle(tag: string) {
   const index =this.selectedTags.indexOf(tag);
   if(index >=0){//点击的时候selectedTags已经在tag里
     this.selectedTags.splice(index, 1);//从index开始删，数量为1
   }else {
     this.selectedTags.push(tag);
   }
   this.$emit('xxx',this.selectedTags)//xxx事件触发的时候把this.selectedTags传出去
 }

 create() {
   const name = window.prompt('请输入标签名');
   if(name === '') {
     window.alert('标签名不能为空');

   }else if (this.dataSource) {//不能直接push
     this.$emit('update:dataSource',
        [...this.dataSource, name]);

   }

 }
}
</script>

<style lang="scss" scoped>
.tags {
  flex-grow: 1;
  font-size: 14px;
  padding: 16px;
  display:flex;
  flex-direction: column-reverse;
  > .current {
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    > li{
      $bg:#d9d9d9;
      background: $bg;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;
      &.selected{
        background: darken($bg,50%);
        color: white;
      }
    }
  }
  > .new{
    padding-top: 16px;
    button{
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
</style>