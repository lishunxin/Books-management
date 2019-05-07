<template>
 <div>
   <div class="search">
     <el-input style="width: 98%;"
       placeholder="大家都在搜索：围城"
       prefix-icon="el-icon-search">
     </el-input>
   </div>
   <div class="ul" style="width: 98%">
     <el-menu :default-active="$route.path" class="nav"  mode="horizontal" @select="handleSelect" style="width: 100%">
       <el-menu-item index="1" style="padding: 0 3% 0 2%" >关注</el-menu-item>
       <el-menu-item index="2" style="padding: 0 3%">首页</el-menu-item>
       <el-menu-item index="3" style="padding: 0 3%">订阅</el-menu-item>
       <el-menu-item index="4" style="padding: 0 3%">热门</el-menu-item>
       <el-menu-item index="5" style="padding: 0 3%">视频听说</el-menu-item>
       <el-menu-item index="6" style="padding:  0 2% 0 3%">本地阅读</el-menu-item>
     </el-menu>
   </div>
       <div class="block">
         <el-carousel height="3.67rem" style="width: 100%;">
           <el-carousel-item >
             <img src="../../src/assets/swiper1.png"/>
           </el-carousel-item>
           <el-carousel-item style="width: 100%;">
             <img src="../../src/assets/swiper2.png"/>
           </el-carousel-item>
           <el-carousel-item style="width: 100%;">
             <h3>3</h3>
           </el-carousel-item>

         </el-carousel>
       </div>
   <div class="fine">
     <div class="fineText">
       <span style="text-align: left;margin-right: 25%">精品解读</span>
       <span style="text-align: right;margin-left: 15%">更多</span>
     </div>
     <div class="book">
       <ul style="width: 100%">
         <li  v-for="item in options"> <img :src="`http://134.175.148.124/img/${item.book_pic}`"/><span>{{item.title_1}}</span></li>
       </ul>
     </div>
   </div>
     <div class="line"></div>
   <p style="font-size: 14px;text-align: left;margin:0 0 18px 10px">最新共享</p>
   <div class="newShare">
     <ul>
       <li style="list-style: none" v-for="item in options2" class="joke">
         <div class="jokeLeft">
           <img :src="`http://134.175.148.124/img/${item.book_pic}`"/>
         </div>
         <div class="jokeRight">
           <p>{{item.brief}}</p>
           <br/><br/><br/><br/><br/>
           <p>{{item.nickname}}钱小七七 3分钟前</p>
         </div>
         <div class="clear"></div>
       </li><br/>
     </ul>
   </div>
<footerWrap></footerWrap>
 </div>
</template>

<script>
  import footerWrap from './footer-wrap'
  import ElementUI from 'element-ui'
  import axios from 'axios'
    export default {
    components:{footerWrap: footerWrap},
        name: "home",
      data(){
          return{
            options:'',
            title_1:'',
            book_pic:'',
            options2:'',
            nickname:'',
            brief:''
          }
      },
      created:function () {
        axios.get('http://134.175.148.124/getRealBooks', {
        params: {
        }
      }).then((response) => {
        console.log(response.data)
        this.options = response.data

      })
        .catch(function (err) {
          console.log(err);
        })
      },
      methods:{

      },
      mounted:function () {
        axios.get('http://134.175.148.124/getNewBook', {
          params: {
            "count":"4"
          }
        }).then((response) => {
          console.log(response.data)
          this.options2 = response.data

        })
          .catch(function (err) {
            console.log(err);
          })
      }
    }
</script>

<style scoped>
.search{
  width:96%;
  margin-bottom: 0.19rem;
}
.clear{
  clear: both;
}
.line{
  width: 100%;
  height: 10px;
  background:rgba(245,245,245,0.7);
}
.ul{
  margin-bottom: 10px;
}
.search input{
    margin:0 auto;
  height: 0.65rem;
  width: 96%;
  }
.nav{
  width: 90%;
  margin:0 5%;
  text-color:#ccc;
  active-text-color:#000;
  default-openeds:6;
}
.book{
  width: 100%;
  margin-top: 0.3rem;
}
.book ul{
  width: 100%;
}
.book ul li{
  font-size: 14px;
  float: left;
  list-style: none;
  width: 20%;
  margin: 0.4rem 2.2%;
}
.book ul li img{
  width: 100%;
}
.block{
  width: 100%;
  height: 3.67rem;
  border-radius: 50px;
  margin-bottom: 0.3rem;
}
.block img{
  width: 90%;
}
  .fine{
    font-size: 14px;
  }
  .fine img{
    width: 1rem;
    height: 2.06rem;
  }
.grid-content{
  min-height: 36px;
  margin:0.15rem;
}
  row-bg{
    padding: 10px 0;
  }
  .joke{
    width: 100%;
    font-size: 16px;
    margin-bottom: 10px;

  }
  .jokeLeft{
    float: left;
    width: 40%;
  }
.jokeLeft img{
  width: 100px;
  height: 150px;
}
  .jokeRight{
    float: right;
    height: 1.03rem;
    width: 58%;
  }
</style>
