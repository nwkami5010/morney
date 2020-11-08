<template>
  
    <Layout>
    <div class="tags">
    <ul class="current">
    衣
    食
    住
    行</ul>
    <div class="new"></div>
    <button>新增标签</button>
    </div>
      <div>tags</div>
      <div>
      
      <label class="notes">
      <span class="name">备注</span>
      <input type="text">
      </label>
      </div>
      <div><ul class="types">
      <li class="selected">支出</li>
      <li class="selected">收入</li>
      </ul></div>
      <div><div>100</div></div>
    </Layout>
  
</template>

<script lang="ts">
export default {
  name: "Money",
};
</script>

