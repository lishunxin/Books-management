<template>
 <div>
   <div class="search">
     <el-input
       placeholder="大家都在搜索：围城"
       prefix-icon="el-icon-search">
     </el-input>
   </div>
   <div class="ul">
     <el-menu :default-active="$route.path" class="nav"  mode="horizontal" @select="handleSelect">
       <el-menu-item index="1" style="padding: 0 11px" >关注</el-menu-item>
       <el-menu-item index="2" style="padding: 0 11px">首页</el-menu-item>
       <el-menu-item index="3" style="padding: 0 11px">订阅</el-menu-item>
       <el-menu-item index="4" style="padding: 0 11px">热门</el-menu-item>
       <el-menu-item index="5" style="padding: 0 11px">视频听说</el-menu-item>
       <el-menu-item index="6" style="padding: 0 11px">本地阅读</el-menu-item>
     </el-menu>
   </div>
       <div class="block">
         <el-carousel height="3.67rem" >
           <el-carousel-item  >
             <img src="../../src/assets/swiper1.png"/>
           </el-carousel-item>
           <el-carousel-item >
             <img src="../../src/assets/swiper2.png"/>
           </el-carousel-item>
           <el-carousel-item >
             <h3>3</h3>
           </el-carousel-item>

         </el-carousel>
       </div>
   <div class="fine">
     <div class="fineText">
       <span style="text-align: left">精品解读</span>
       <span style="text-align: right">更多</span>
     </div>
     <div>
       <el-row :gutter="40">
         <el-col :span="4">
           <div class="grid-content bg-purple">
             <img src="../../src/assets/fine1.png"/>
           </div>
         </el-col>
         <el-col :span="4">
           <div class="grid-content bg-purple">
             <img src="../../src/assets/fine2.png"/>
           </div>
         </el-col >
         <el-col :span="4">
           <div class="grid-content bg-purple">
             <img src="../../src/assets/fine3.png"/>
           </div>
         </el-col>
         <el-col :span="4">
           <div class="grid-content bg-purple">
             <img src="../../src/assets/fine4.png"/>
           </div>
         </el-col>
       </el-row>
     </div>
   </div>
     <div class="line"></div>
     <div class="newShare">
       <div class="joke1">
         <div class="jokeLeft">
           <img src="../../src/assets/joke1.png"/>
         </div>
         <div class="jokeRight">
           <p>抱着清醒游离戏谑的心来过生活把激荡宏阔留给艺术</p>
           <p>【戏年】钱小七七 3分钟前</p>
         </div>
       </div>
       <div class="joke2">
         <div class="jokeLeft">
           <img src="../../src/assets/joke2.png"/>
         </div>
         <div class="jokeRight">
           <p>鬼谷子纵横绝学智慧谋略感悟及历史故事</p>
           <p>【鬼谷子】小拉 5分钟前</p>
         </div>
       </div>
       <div class="joke3">
         <div class="jokeLeft">
           <img src="../../src/assets/joke3.png"/>
         </div>
         <div class="jokeRight">
           <p>拼接收账素材，用艺术读解时尚数据用时尚诠释艺术的生活</p>
           <p>【VISION】芒果人生 10分钟前</p>
         </div>
       </div>
     </div>

 </div>
</template>

<script>
  import ElementUI from 'element-ui'
    export default {
        name: "home"
    }
</script>

<style scoped>
.search{
  width:100%;
  margin-bottom: 0.19rem;
}
.search input{
    margin:0 auto;
  height: 0.65rem;
  width: 80%;
  }
.nav{
  text-color:#ccc;
  active-text-color:#000;
  default-openeds:6;
}
.block{
  width: 100%;
  height: 3.67rem;
  border-radius: 50px;
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
  .joke1,.joke2,.joke3{
    font-size: 16px;
    height: 5.03rem;
    overflow: hidden;
    zoom: 1;
  }
  .jokeLeft{
    float: left;
    width: 40%;
  }
  .jokeRight{
    float: right;
    height: 1.03rem;
    width: 50%;
  }
</style>
