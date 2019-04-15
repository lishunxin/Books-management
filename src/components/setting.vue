<template>
    <div class="setting">
      <div class="set">
        &lt; 设置
      </div>
      <div class="line"></div>
      <div class="personage set2">
        <span>个人账号</span>
        <input typeof="text"/><br/>
        <span>密码修改</span>
        <input typeof="text"/>
      </div>
      <div class="line"></div>
      <div class="manage set2">
        <span>管理空间</span>
        <input/><br/>
        <span>个人隐私</span>
        <input/>
      </div>
      <div class="line"></div>
      <div class="skin set2">
        <span>皮肤管理</span>
        <input typeof="text"/><br/>
      </div>
      <div class="line"></div>
      <div class="message set2">
        <span>消息提醒</span>
        <input typeof="text"/><br/>
        <span >清楚缓存</span>
        <input typeof="text"/>
      </div>
      <div class="line"></div>
      <div class="friend set2">
        <span>邀请好友</span>
        <input typeof="text"/><br/>
        <span>关于云读</span>
        <input/>
        <div>退出当前账号</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "setting"
    }
</script>

<style scoped>
.setting{
  font-size: 16px;
}
  .line{
    height: 0.23rem;
    background-color: rgb(245,245,245);
  }
  .set2{

  }
</style>
