<template>
<layout content-prefix="layout">
  <div class="numberPad">
    <div class="output">100</div>
    <div class="buttons">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>清空</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button class="ok">OK</button>
      <button class="zero">0</button>
      <button>.</button>
    </div>
  </div>
  <div>
    <ul class="types">
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>
  </div>
      <div>tags</div>
      <div>
      
      <label class="notes">
      <span class="name">备注</span>
      <input type="text" placeholder="在这里输入备注">
      </label>
      </div>

  <div class="tags">

    <div class="new">
      <button>新增标签</button>
    </div>
    <ul class="current">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
  </div>
    </Layout>
  
</template>

<script lang="ts">
export default {
  name: "Money",
};
</script>
<style lang="scss">
  .layout-content{
    border: 3px solid red;
    display: flex;
    flex-direction: column-reverse;//代码倒过来了

  }
</style>
<style lang="scss" scoped>
 @import "../assets/style/helper.scss";
 .numberPad{
   .output{
     @extend %clearFix;
     @extend %innerShadow;
     font-size: 36px;
     font-family: Consolas, monospace;//win的字体特殊，后面加上比字体更抽象的编程字体
     padding: 9px 16px;//div高度72
     text-align: right;
     //内阴影 左右没有阴影
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
 .types{
   background:#c4c4c4;
   display: flex;
   text-align: center;//字居中
   font-size: 24px;
   > li{
     width:50%;//不用确定的数字，容易出bug
    // line-height: 64px;
     height: 64px;//补充高度，这样不会超过高度，多加border可能会超过64
     display:flex;
     justify-content: center;
     align-items: center;//居中最好还是flex,3句话搞定居中
     position: relative; //父元相对定位
     &.selected::after{//当前li被选中
        //border-bottom: 4px solid ;不能用border,占用空间会让字体上跳
       content: '';
       position: absolute;//用绝对定位，selected消失，不影响布局
       bottom: 0;
       left: 0;
       width: 100%;
       height: 4px;
       background: #333;

     }
   }
 }
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
       background: #d9d9d9;
       $h: 24px;
       height: $h;
       line-height: $h;
       border-radius: $h/2;
       padding: 0 16px;
       margin-right: 12px;
       margin-top: 4px;
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