<template>
    <div class="footer-wrap" id="footer-wrap">
      <router-link :to="{path: '/#', query: {'uid': this.uId}}">
      <img src="../../src/assets/icon/footer1.png"/>
    </router-link>
      <router-link :to="{path: '/bookcase', query: {'uid': this.uId}}">
        <img src="../../src/assets/icon/footer2.png"/>
      </router-link>
      <router-link :to="{path: '/putTheBook', query: {'uid': this.uId}}">
        <img src="../../src/assets/icon/footer5.png"/>
      </router-link>
      <router-link :to="{path: '/home', query: {'uid': this.uId}}">
        <img src="../../src/assets/icon/footer3.png"/>
      </router-link>
      <router-link :to="{path: '/homepage', query: {'uid': this.uId}}">
        <img src="../../src/assets/icon/footer4.png"/>
      </router-link>


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
    overflow: hidden;
    background-color: rgb(247,247,247);
  }

  .footer-wrap img{
    display: block;
    width: 0.8rem;
    height:1rem;
    font-size: 16px;
    margin: 0 0.37rem 0.1rem 0.37rem;
  }
</style>
