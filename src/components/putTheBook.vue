<template>
<div>
  <div class="header">
    添书
  </div>
  <div class="line"></div>
  <div class="main">
    <div class="item">
      <span>书名&nbsp;&nbsp;</span>
      <input type="text" placeholder="请添加书名"/>
    </div>
    <div class="item">
      <span>作者</span>
      <input type="text" placeholder="请输入该作者名称"/>
    </div>
    <div class="item">
      <span>出版社</span>
      <input type="text" placeholder="请选择出版社"/>
    </div>
    <div class="item">
      <span>购买时间</span>
      <input type="text" placeholder="请选择购买时间"/>
    </div>
    <div class="item">
      <span>价格</span>
      <input type="text" placeholder="请选择价格"/>
    </div>
    <div class="line"></div>
  </div>
  <div class="putbook">
    <p>添加封面（仅用于书架展示）</p>
    <img src="../../src/assets/putbook.jpg"/>
    <div>完成</div>
  </div>
</div>
</template>

<script>
    export default {
        name: "putTheBook"
    }
</script>

<style scoped>
  .header{
    font-size: large;
  }
  .main{
    text-align: left;
    margin-left: 15px;
  }
  .item{
    margin-bottom: 0.23rem;
  }
  .item span{
    font-size:16px;
    text-align: left;
  }
  .item input{
    border:0;
  }
  .line{
    width: 100%;
    height: 0.15rem;
    background-color: rgb(241,241,241);
  }
  .putbook{
    text-align: left;
    margin-left: 10px;
  }
.putbook img{
  width: 0.65rem;
  height: 0.65rem;
  border: 1px solid #000;
}
  .putbook p{
    font-size: 16px;
  }
  .putbook div{
    text-align: center;
    margin: 0 auto;
    width: 6.33rem;
    height:0.8rem;
    font-size: 20px;
    line-height: 0.8rem;
    background-color: rgb(241,241,241);
  }
</style>
