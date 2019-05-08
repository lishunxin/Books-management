<template>
<div class="homepage">
  <header>我<router-link to="/mailbox" tag="i" class="el-icon-message"></router-link></header>
  <section>
    <div class="information">
      <div class="portrait"><img :src="homeData.head_pic" alt="head-portrait"></div>
      <h1>{{homeData.nickname}}</h1>
      <p>{{homeData.personality_signature}}</p>
      <h3>{{homeData.id}}</h3>
      <router-link to="/idManagement" tag="i" class="el-icon-arrow-right"></router-link>
    </div>
    <div class="about-book">
      <div class="about-me">
        <div class="about-me-item">
          <el-badge is-dot class="item" hidden="ishidden">{{homeData.user_follow}}</el-badge>
          <p>关注者</p>
        </div>
        <div class="about-me-item">
          <el-badge is-dot class="item" hidden="ishidden">{{homeData.user_collect}}</el-badge>
          <p>收藏</p>
        </div>
        <div class="about-me-item">
          <el-badge is-dot class="item" hidden="ishidden">{{homeData.user_fans}}</el-badge>
          <p>粉丝</p>
        </div>
      </div>
      <div class="bookshelf">
        <span>我的书架</span>
        <div class="newBook" v-show="newShow">
          <span>新增</span>
          <img src="../assets/fine1.png" alt="newBook1">
          <img src="../assets/fine2.png" alt="newBook2">
        </div>
        <router-link to="" tag="i" class="el-icon-arrow-right"></router-link>
      </div>
      <div class="read-book">
        <span>已读书籍</span>
        <router-link to="" tag="i" class="el-icon-arrow-right"></router-link>
      </div>
    </div>
    <div class="p-and-n">
      <div class="present">
        <img src="../assets/icon/present.png" alt="present">
        <h2>礼物单</h2>
        <h3>已有13个礼物</h3>
      </div>
      <div class="news">
        <img src="../assets/icon/news.png" alt="news">
        <h2>消息提醒</h2>
        <h3>已收到5条消息</h3>
      </div>
    </div>
    <div class="other">
      <div class="q-and-a">
        <span>我的问答</span>
        <router-link to="" tag="i" class="el-icon-arrow-right"></router-link>
      </div>
      <div class="personal-setting">
        <span>隐私设置</span>
        <p>分享对谁可见</p>
        <router-link to="" tag="i" class="el-icon-arrow-right"></router-link>
      </div>
      <div class="more">
        <span>更多</span>
        <router-link to="" tag="i" class="el-icon-arrow-right"></router-link>
      </div>
    </div>
  </section>
  <footerWrap></footerWrap>
</div>
</template>

<script>
import footerWrap from './footer-wrap.vue'
import axios from 'axios'
import qs from 'qs'
export default {
  name: "homepage",
  components:{
    'footerWrap':footerWrap
  },
  data(){
    return{
      homeData : [],
      isHidden : true,
      newShow : false,
      newData : []
    }
  },
  created:function(){
    this.getData(),
    this.getNew()
  },
  match:{

  },
  methods:{
    getData:function () {
      axios.get(
        '/userLogedin/homepage',
      {
        params:{
          id: this.id
        }
      }).catch(error => function (){
        console.log(error)
      }).then((response) => {
        let homeData = response.data
        this.homeData.push(homeData)
        console.log(homeData)
        console.log(this.homeData)
      })
    },
    getNew : function () {
      axios.get(
        '/getBooksByUserId',
        {
          params:{
            userId: 35
          }
      }).catch(error => function (){
        console.log(error)
      }).then((res) => {
        let newData = res.data
        if(newData === null){
          this.newShow = false
        }else if(newData.length > 3){
          newData.length = 2
        }
        this.newData.push(newData)
      })
    }
  }
}
</script>

<style scoped>
.homepage{
  box-sizing: border-box;
}
.homepage header{
  width:100%;
  height:0.9rem;
  font-size: 0.38rem;
  line-height: 0.9rem;
  position:relative;
}
.homepage header i{
  font-size: 0.38rem;
  position: absolute;
  right:0.4rem;
  top:0.3rem;
  color: rgb(193,193,193);
}
.information{
  width:100%;
  height:2.2rem;
  position: relative;
  padding:0.425rem;
  box-sizing: border-box;
  border-bottom: 0.2rem solid rgba(245,245,245,0.7);
}
.homepage .information .portrait img{
  width:1.35rem;
  height:1.35rem;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  position:absolute;
  left:0.4rem;
  font-size: 0.22rem;
}
.homepage .information h1{
  color: rgb(18,18,18);
  font-size:0.3rem;
  text-align: left;
  margin-left: 2rem;
}
.homepage .information p{
  color:rgb(163,163,163);
  font-size:0.22rem;
  text-align: left;
  margin-left: 2rem;
}
.homepage .information h3{
  color: rgb(141,141,141);
  font-size:0.24rem;
  text-align: left;
  margin-left: 2rem;
  line-height: 1rem;
}
.homepage .information i{
  color: rgb(220,220,220);
  font-size: 0.38rem;
  position: absolute;
  right:0.4rem;
  top:0.9rem;
}
.about-book{
  height:4.1rem;
  width:100%;
  padding:0 0.4rem;
  box-sizing: border-box;
  border-bottom: 0.2rem solid rgba(245,245,245,0.7);
}
.about-me{
  height:1.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 0.01rem solid rgba(245,245,245,0.7);
}
.about-me-item .item{
  color: rgb(79,79,79);
  font-size: 0.28rem;
}
.about-me-item p{
  color: rgb(224,224,224);
  font-size:0.22rem;
}
.item >>> .el-badge__content{
  border:none;
  width:0.12rem;
  height:0.12rem;
}
.homepage section .el-badge{
  display:block;
}
.bookshelf,.read-book{
  width:100%;
  height:1.22rem;
  border-bottom: 0.01rem solid rgba(245,245,245,0.7);
  text-align: left;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
}
.bookshelf span,.read-book span{
  font-size:0.3rem;
  vertical-align: middle;
}
.newBook img{
  width:0.5rem;
  height:0.65rem;
  border-radius: 0.05rem;
}
.newBook{
  font-size: 0.22rem;
  color:rgb(193,193,193);
  display: inline-block;
  position:absolute;
  top:0.28rem;
  right:0.6rem;
}
.newBook span{
  font-size:0.22rem;
  padding-bottom: 0.35rem;
}
.bookshelf i,.read-book i{
  font-size:0.38rem;
  color:rgb(193,193,193);
  position:absolute;
  right:0rem;
  top:0.4rem;
}
.p-and-n{
  width:100%;
  height:1.4rem;
  border-bottom: 0.2rem solid rgba(245,245,245,0.7);
  text-align: left;
  box-sizing: border-box;
  display:flex;
}
.p-and-n .present,.p-and-n .news{
  width:50%;
  position: relative;
  padding-left: 1rem;
}
.p-and-n h2{
  font-size: 0.26rem;
  color:rgb(9,9,9);
  position:absolute;
  left:1.6rem;
  top:0.35rem;

}
.p-and-n h3{
  font-size: 0.2rem;
  color:rgb(192,192,192);
  position:absolute;
  left:1.6rem;
  top:0.75rem;
}
.p-and-n img{
  width:0.6rem;
  height:0.6rem;
  vertical-align: middle;
}
.q-and-a,.personal-setting,.more{
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width:100%;
  height:1.1rem;
  font-size: 0.3rem;
  position: relative;
  text-align: left;
  line-height:1.1rem;
  padding:0 0.4rem;
}
.q-and-a i,.personal-setting i,.more i{
  color:rgb(193,193,193);
  position:absolute;
  right:0.4rem;
  top:50%;
  transform: translateY(-50%);
}
.personal-setting p{
  font-size: 0.22rem;
  color:rgb(193,193,193);
  position:absolute;
  right: 1.05rem;
  display: inline-block;
}
</style>
