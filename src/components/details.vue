<template>
<div>
  <div class="header">
    <i class="el-icon-arrow-left" @click="back"></i>
    <span class="case">云读详情</span>

  </div>
  <div class="detail">
    <div class="left">
      <img :src="`/img/${book_pic}`"/>
    </div>
    <div class="right">
      <h3>{{title_1}}</h3>
      <i class="el-icon-caret-right"></i>
      <span>简介</span>
      <p>南京作家葛亮的</p>
      <p>四部短片小说之</p>
      <p>人生如戏，戏若人生</p>
    </div>
  </div>
  <div class="login">

  </div>
</div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "details",
      data(){
          return{
            title_1:'',
            book_pic:'',
            id:'',
            bookId:''
          }
      },
      created:function(){
        let uid = this.$route.query.id
        this.id = uid
        let book = this.$route.query.bookId
        this.bookId = book
        axios.get('/getABook', {
          params: {
            'bookId': "this.bookId"
          }
        }).then((response) => {
          console.log(response.data)
          this.title_1 = response.data.title_1
          this.book_pic = response.data.book_pic

        })
          .catch(function (err) {
            console.log(err);
          })
      },
      methods:{
      back:function () {
        this.$router.back(-1)
      }
      }
    }
</script>

<style scoped>
  .header{
    width: 80%;
    font-size: 28px;
    margin-bottom: 0.5rem;
  }
  .el-icon-arrow-left{
    margin-left: 10%;
  }
  .header i{
    font-size: 26px;
  }
  .case{
    margin: 0 1.9rem;
  }
  .left img{
    width: 128px;
    height: 173px;
  }
  .detail .left{
    float: left;
    margin: 0 0.5rem 0 0.5rem;
  }
  .detail .right{
    float: left;

  }
  .detail .right i{
    font-size: 20px;
  }
  .detail .right h3{
    font-size: 20px;
  }
  .detail .right span{
    font-size: 20px;
  }
  .detail .right p{
    font-size: 16px;
    color: rgb(192,192,192);
  }
</style>
