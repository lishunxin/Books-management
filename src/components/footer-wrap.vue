<template>
    <div class="footer-wrap" id="footer-wrap">
      <div class="yundu float"><img src="../../src/assets/icon/footer1.png"/></div>
      <div class="shugui float"><img src="../../src/assets/icon/footer2.png"/></div>
      <div class="float" style="width: 20%"><img src="../../src/assets/icon/footer5.png"/></div>
      <div class="shuqian float"><img src="../../src/assets/icon/footer3.png"/></div>
      <div class="mine float"><img src="../../src/assets/icon/footer4.png"/></div>
      <div class="clear"></div>
    </div>
</template>

<script>
    export default {
        name: "footerWarp"
    }
</script>

<style scoped>
  .footer-wrap{
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 1rem;
    background-color: rgb(247,247,247);
  }
  .clear{
    clear: both;
  }
  .float{
    float: left;
    width: 14%;
    height:1rem;
    font-size: 16px;
    margin: 0 2%;
  }
  .float img{
    margin-bottom: 0.1rem;
    width: 0.8rem;
    height: 1rem;
  }
</style>
