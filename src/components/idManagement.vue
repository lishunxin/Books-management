<template>
    <div class="idManagement">
      <header>账号管理<router-link :to="{path:'/homepage',query:{id:this.id}}" tag="i" class="el-icon-arrow-left"></router-link></header>
      <section>
        <div class="portrait">
          <span class="information">账号信息</span>
          <img :src="`http://134.175.148.124/img/${personal.head_pic}`">
          <span id="name">{{personal.nickname}}</span>
          <router-link :to="{path:'idDetails',query:{id:this.id}}" tag="i" class="el-icon-arrow-right"></router-link>
        </div>
        <div class="sexAndAge">
          <div class="sex">
            <span class="information">性别</span>
            <span class="unchangeable">不可修改</span>
          </div>
          <div class="age">
            <span class="information">年龄</span>
            <span class="unchangeable">不可修改</span>
          </div>
        </div>
        <div class="other">
          <div class="tel">
            <span class="information">手机号码</span>
            <span id="telNum">{{personal.phone}}</span>
            <router-link :to="{path:'/idDetails',query:{id:this.id}}" tag="i" class="el-icon-arrow-right"></router-link>
          </div>
          <div class="mailbox">
            <span class="information">邮箱</span>
            <span id="mailboxNum">{{personal.e_mail}}</span>
            <router-link :to="{path:'/idDetails',query:{id:this.id}}" tag="i" class="el-icon-arrow-right"></router-link>
          </div>
          <div class="signature">
            <span class="information">个性签名</span>
            <span id="signatureNum">{{personal.personality_signature}}</span>
            <router-link :to="{path:'/idDetails',query:{id:this.id}}" tag="i" class="el-icon-arrow-right"></router-link>
          </div>
        </div>
        <div class="area">
          <span class="information">地区</span>
          <el-cascader
            class="newArea"
            :options="options"
            change-on-select
          ></el-cascader>
        </div>
      </section>
    </div>
</template>

<script>
  import area from '../../static/areaJs'
  import axios from 'axios'
  import qs from 'qs'
  export default {
    name: "idManagement",
    data(){
      return{
        options:areajson, //areajson为从areaJson引入的json数据
        personal:[],
        id:''
      }
    },
    created:function(){
      let uid = this.$route.query.id
      this.id = uid
      axios.get(
        '/logined/userinfo',
        {
          params:{
            id:this.id
          }
        }).catch(error => function () {
          console.log(error)
        }).then((res) => {
          console.log(res.data)
          this.personal = res.data
          if(this.personal.nickname === null){
            this.personal.nickname = '编辑你的姓名吧'
          }else if(this.personal.phone === null){
            this.personal.phone = '手机号码呢'
          }else if(this.personal.e_mail === null){
            this.personal.e_mail = '邮箱呢'
          }else if(this.personal.personality_signature === null){
            this.personal.personality_signature = '个性签名呢'
          }
       })
    }
  }
</script>

<style scoped>
.idManagement{
  background-color:rgba(245,245,245,0.7) ;
  width:100%;
  min-height:13.34rem;
}
.idManagement header{
  width:100%;
  height:0.9rem;
  font-size: 0.38rem;
  line-height: 0.9rem;
  position:relative;
  border-bottom: 0.2rem solid rgba(245,245,245,0.7);
  background-color: #fff;
}
.idManagement header i{
  font-size: 0.38rem;
  position: absolute;
  left:0.4rem;
  top:0.3rem;
}
.portrait{
  width:100%;
  height:1.1rem;
  position:relative;
  border-bottom: 0.2rem solid rgba(245,245,245,0.7);
  background-color: #fff;
}
.information{
  font-size:0.3rem;
  color:rgb(24,24,24);
  position: absolute;
  left:0.4rem;
  line-height: 1.1rem;
}
.portrait img{
  width:0.25rem;
  height:0.25rem;
  border-radius: 50%;
  position: absolute;
  top:0.425rem;
  right: 2rem;
  font-size:0.22rem;
  text-align:center;
}
.portrait #name,#telNum,#mailboxNum,#signatureNum{
  font-size: 0.22rem;
  color: rgb(193,193,193);
  line-height:1.1rem;
  position: absolute;
  right: 0.85rem;
}
.portrait i,.tel i,.mailbox i,.signature i{
  font-size: 0.38rem;
  position:absolute;
  right:0.4rem;
  line-height: 1.1rem;
  color: rgb(193,193,193);
}
.sexAndAge{
  width:100%;
  height:1.8rem;
  border-bottom: 0.2rem solid rgba(245,245,245,0.7);
  background-color: #fff;
}
.sexAndAge .sex,.sexAndAge .age{
  height: 50%;
  line-height: 100%;
}
.unchangeable{
  font-size: 0.22rem;
  color: rgb(193,193,193);
  position: absolute;
  right: 0.4rem;
}
.other{
  width:100%;
  height: 2.7rem;
  border-bottom: 0.2rem solid rgba(245,245,245,0.7);
  background-color: #fff;
}
.tel,.mailbox,.signature{
  position: relative;
  height:0.9rem;
  width:100%;
}
.area{
  width: 100%;
  height:1.1rem;
  border-bottom: 0.2rem solid rgba(245,245,245,0.7);
  line-height: 0.9rem;
  position: relative;
  background-color: #fff;
}
.newArea >>> .el-input__inner{
  border:none;
}
.newArea{
  position: absolute;
  right:1rem;
  top:0.15rem;
}
</style>
