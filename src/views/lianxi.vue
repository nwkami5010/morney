<template>
{{tag}}
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
@Component
export default class Lianxi extends Vue{
 @Prop() readonly dataSource: string[] | undefined;
 selectTags: string[]=[];

 toggle(tag){
   const index = this.selectTags.indexOf(tag);
   if(index>=0){
     this.selectTags.splice(index,1);
   }else{
     this.selectTags.push(tag);
   }
   this.$emit('xxx',this.selectTags);
 }

 create(){
   const name = window.prompt('请输入标签名');
   if(name ===''){
     window.alert('标签名不能为空');
   }else if(this.dataSource){
     this.$emit('update:dataSource',[...this.dataSource,name])
   }
 }
}
</script>

<style lang="scss" scoped>

</style>