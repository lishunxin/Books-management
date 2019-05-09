<template>
<div>
  <div class="header">
    <i class="el-icon-arrow-left" @click="back"></i>
    <span class="case">书柜</span>
    <i class="el-icon-search"></i>
  </div>
  <div class="ul">
    <el-menu :default-active="$route.path" class="nav"  mode="horizontal" @select="handleSelect">
      <el-menu-item index="1" style="padding: 0 2% 0 8%;font-size: 18px;" @click="getbook">文学</el-menu-item>
      <el-menu-item index="2" style="padding: 0 2% 0 3%;font-size: 18px;">商业</el-menu-item>
      <el-menu-item index="3" style="padding: 0 2% 0 3%;font-size: 18px;">小说</el-menu-item>
      <el-menu-item index="4" style="padding: 0 2% 0 3%;font-size: 18px;">科学</el-menu-item>
      <el-menu-item index="5" style="padding: 0 2% 0 3%;font-size: 18px;">玄幻</el-menu-item>
      <el-menu-item index="6" style="padding: 0 2% 0 3%;font-size: 18px;">设计</el-menu-item>
    </el-menu>
  </div>
  <div class="book">
    <ul>
      <li @click="todetails" v-for="item in options"> <img :src="`http://134.175.148.124/img/${item.book_pic}`"/><span>{{item.title_1}}</span></li>
    </ul>

  </div>
</div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "bookcase",
      data(){
          return{
            title_1:'',
            options:'',
            book_pic:'',
            id:''
          }
      },
      created:function(){
        let uid = this.$route.query.id
        this.id = uid
      },
      methods:{
        back:function () {
          this.$router.back(-1)
        },
        todetails:function () {
          this.$router.push({path:'/details',query:{id:this.id}})

        },
          getbook:function () {
              axios.get('/getBooks', {
                params: {
                'count': "10"
              }
            }).then((response) => {
              console.log(response.data)
              this.title_1=response.data.title_1
              this.options=response.data
              console.log(this.options)
            })
              .catch(function (err) {
                console.log(err);
              })
          }
      }
    }
</script>

<style scoped>
  .header{

    font-size: 28px;
    margin-bottom: 0.3rem;
  }
  .el-icon-arrow-left{
    margin-right: 2rem;
  }
  .el-icon-search{
    margin-left: 2rem;
  }
  .header i{
    font-size: 26px;
  }
  .book{
    margin-top: 0.3rem;
  }
  .book ul{
    width: 100%;
  }
  .book ul li{
    font-size: 14px;
    float: left;
    list-style: none;
    width: 23%;
    margin: 0.4rem 5%;
  }
  .book ul li img{
    width: 100%;
  }
</style>
