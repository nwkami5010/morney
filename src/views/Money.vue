<template>
<layout content-prefix="layout">
  <NumberPad :value.sync="record.amount"/>//:value="record.amount" @update:value="onUpdateAmount"/>
  <Types :value.sync="record.type" />//如果想给组件一个初始的值，想在更新的时候拿到最新的值
  ,用.sync 一开始可以得到value,value变化的时候触发update.value就可以了

  //:value="record.type"  @update:value="onUpdateType"/>
  <Notes @update:value="onUpdateNotes"/>
  <Tags ：data-source.sync="tags" @update:value="onUpdateTags" @update:selected="onUpdateTags"/>//
</Layout>
  
</template>

<script lang="ts" >
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component} from 'vue-property-decorator';

type Record = { //在ts中声明类型
  tags: string[];
  notes: string;
  type: string;
  amount: number;
}
@Component({//Components写在装饰器里，不能写下面，否则就变成data
  components: {Tags, Notes, Types, NumberPad}
})
export default class Money extends Vue {
  tags=['衣','食','住','行']//改成ts以后，：换成=
  record: Record = {tags: [],notes:'',type:'-',amount:0}//初始值

  onUpdateTags(value: string[]){
    this.record.tags = value
  }
  onUpdateNotes(value: string){
    this.record.notes= value
  }
  onUpdateType(value: string){
    this.record.type = value
  }
  onUpdateAmount(value: string){
    this.record.amount= parseFloat(value);//amount是数字，parseFloat兼顾小数点
  }
}


</script>
<style lang="scss">
  .layout-content{

    display: flex;
    flex-direction: column-reverse;//代码倒过来了

  }
</style>
