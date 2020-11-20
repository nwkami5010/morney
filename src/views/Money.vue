<template>
<layout content-prefix="layout">
  <NumberPad :value.sync="record.amount" @submit="saveRecord"/>//:value="record.amount" @update:value="onUpdateAmount"/>
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
import {Component, Watch} from 'vue-property-decorator';
//import moedl from '@/model.js';//ts不能直接引入js
import recordListModel from '@/models/recordListModel';
import tagListModel from '@/models/tagListModel';
const recordList = recordListModel.fetch()
// eslint-disable-next-line no-undef
const tagList = tagListModel.fetch();


@Component({//Components写在装饰器里，不能写下面，否则就变成data
  components: {Tags, Notes, Types, NumberPad}
})
export default class Money extends Vue {
  tags= tagList//改成ts以后，：换成=
  recordList: RecordItem[] = JSON.parse(window.localStorage.getItem('recordList') ||'[]');
  record: RecordItem = {tags: [],notes:'',type:'-',amount:0}//初始值

  onUpdateTags(value: string[]){
    this.record.tags = value
  }
  onUpdateNotes(value: string){
    this.record.notes= value
  }

  onUpdateAmount(value: string){
    this.record.amount= parseFloat(value);//amount是数字，parseFloat兼顾小数点
  }
  saveRecord() {
    const deepClone: RecordItem = recordListModel.clone(this.record);
    deepClone.createdAt = new Date();
    this.recordList.push(deepClone);//点ok触发submit事件，将this.record存进recordlist
  }
   // localStorage.set('recordList',JSON.stringify(this.recordList));//重复性高。每个保存的地方都要写localStorage
  @Watch('recordList')//('recordList')
    onRecordListChange(){
      recordListModel.save(this.recordList);

    }

}


</script>
<style lang="scss">
  .layout-content{

    display: flex;
    flex-direction: column-reverse;//代码倒过来了

  }
</style>
