<template>

  <ul class="types">
    <li :class="type === '-' && 'selected'"
        @click="selectType('-')">支出
    </li>
    <li :class="type === '+' && 'selected'"
        @click="selectType('+')">收入
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Types',
  props: ['xxx'],
  data() {//声明一个data保存当前选中的类型
    return {
      type: '-'//'-'表示支出，‘+’表示收入
    }
  },
  mounted() {
    console.log(this.xxx)
  },
  method: {
    selectType(type) {//type只能是‘-’和‘+’重的一个，否则保存
      if (type !== '-' && type !== '+') {
        throw new Error('type is unknown')
      }
      this.type = type
    }
  }

};
</script>

<style lang="scss" scoped>
.types {
  background: #c4c4c4;
  display: flex;
  text-align: center; //字居中
  font-size: 24px;

  > li {
    width: 50%; //不用确定的数字，容易出bug
    // line-height: 64px;
    height: 64px; //补充高度，这样不会超过高度，多加border可能会超过64
    display: flex;
    justify-content: center;
    align-items: center; //居中最好还是flex,3句话搞定居中
    position: relative; //父元相对定位
    &.selected::after { //当前li被选中
      //border-bottom: 4px solid ;不能用border,占用空间会让字体上跳
      content: '';
      position: absolute; //用绝对定位，selected消失，不影响布局
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;

    }
  }
}
</style>