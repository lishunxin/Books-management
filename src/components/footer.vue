<template>
    <div>
      <div class="yundu float">云读</div>
      <div class="shugui float">书柜</div>
      <img class="img float" src="../../src/assets/putbook.jpg"/>
      <div class="shuqian float">书签</div>
      <div class="mine float">我的</div>
    </div>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style scoped>
.img{
  height: 0.69rem;
  width: 0.69rem;
  border-radius: 50%;
}
  .float{
    float: left;
    width: 0.7rem;
    height: 0.7rem;
    font-size: 16px;
  }
</style>
