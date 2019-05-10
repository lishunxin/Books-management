<template>
    <div class="footer-wrap" id="footer-wrap">
      <router-link :to="{path: '/#', query: {'id': this.id}}">
      <img src="../../src/assets/icon/footer1.png"/>
    </router-link>
      <router-link :to="{path: '/bookcase', query: {'id': this.id}}">
        <img src="../../src/assets/icon/footer2.png" @click="tologin"/>
      </router-link>
      <router-link :to="{path: '/putTheBook', query: {'id': this.id}}">
        <img src="../../src/assets/icon/footer5.png" @click="tologin"/>
      </router-link>
      <router-link :to="{path: '/home', query: {'id': this.id}}">
        <img src="../../src/assets/icon/footer3.png" @click="tologin"/>
      </router-link>
      <router-link :to="{path: '/homepage', query: {'id': this.id}}">
        <img src="../../src/assets/icon/footer4.png" @click="tologin"/>
      </router-link>


    </div>
</template>

<script>
  import axios from 'axios'
  import qs from 'qs'
    export default {
        name: "footerWarp",
        methods:{
          tologin:function(){
            axios.get(
              '/isLogin',{
                params:{}
              }
            ).then((res) =>{
              console.log(res.data.status)
              if(!res.data.status){
                this.$router.push('/login')
              }
            }).catch(err => function(){
              console.log(err)
            })
          }
        }
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
