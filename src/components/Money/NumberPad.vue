<template>
  <div class="numberPad">
    <div class="output">{{ output }}</div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button class="ok">OK</button>
      <button @click="inputContent"class="zero">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class NumberPad extends Vue {
  output: string = '0';

  inputContent(event: MouseEvent) {
    const button = (event.target as HTMLButtonElement);
    const input = button.textContent!;//！：把空的情况排除
    if(this.output.length === 16) { return;}
    if(this.output === '0') {
      if('0123456789'.indexOf(input) >= 0) {//输入的东西在0-9之剑大于0
        this.output =input;
      }else{
        this.output+=input;
      }
      return;
    }
    if(this.output.indexOf('.')>=0 && input === '.') {return;}
    this.output += input;
  }
  remove() {
    if(this.output.length === 1) {
      this.output = '0';
    }else {
      this.output = this.output.slice(0,-1);
    }
  }

  clear(){
    this.output = '0';
  }

  ok (){

  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.numberPad{
  .output{
    @extend %clearFix;
    @extend %innerShadow;
    font-size: 36px;
    font-family: Consolas, monospace;//win的字体特殊，后面加上比字体更抽象的编程字体
    padding: 9px 16px;//div高度72
    text-align: right;
    //内阴影 左右没有阴影
    min-height: 72px;
  }
  .buttons{
    @extend %clearFix;//继承 helper.scss里的%x,相当于复制了选择器 .buttons.%x；不会把clearfix复制一遍
    // display:flex;
    // flex-wrap: wrap;//换行
    > button{
      width: 25%;//宽度可以百分比，高度不行
      height: 64px;//7.9vh;//整个高度的7.9%
      float: left;//如果用float，父元素必须clearfix
      background: transparent;
      border: none;
      &.ok{
        height:64*2px;//会把下列空一行，说明不能用flex定位，改用float
        float: right;//一左一右，解决bug
      }
      &.zero {
        width: 25*2%;
      }
      $bg: #f2f2f2;
      &:nth-child(1){
        background: $bg;
      }
      &:nth-child(2),&:nth-child(5), {
      background：darken($bg,4%);
      }
      &:nth-child(3),&:nth-child(6), &:nth-child(9){
        background: darken($bg,4*2%);
      }
      &:nth-child(4),&:nth-child(7), &:nth-child(10){
        background: darken($bg,4*3%);
      }
      &:nth-child(8),&:nth-child(11), &:nth-child(13){
        background: darken($bg,4*4%);
      }
      &:nth-child(14){
        background: darken($bg, 4*5%)
      }
      &:nth-child(12){
        background: darken($bg, 4*6%)
      }
    }
  }
}
</style>