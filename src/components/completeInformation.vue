<template>
  <el-container>
    <el-header>完善信息<router-link :to="{path:'/signin',query:{id:this.id}}" tag="i" class="el-icon-arrow-left"></router-link></el-header>
    <el-main>
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess">
        <img v-if="imageUrl" :src="imageUrl" class="avatar" alt="upload-portrait">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <el-input v-model="input" placeholder="输入你的名字吧" class="name"></el-input>
      <el-select v-model="value" placeholder="选择自己的性别吧" class="sex">
        <el-option
          v-for="sex in options"
          :key="sex.value"
          :label="sex.label"
          :value="sex.value">
        </el-option>
     </el-select>
    <el-select v-model="value" placeholder="你的年龄呢" class="age">
      <el-option
        v-for="item in ageOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <p>已对以上信息加密</p>
    <el-form>
      <el-form-item>
        <router-link :to="{path:'/',query:{id:this.id}}"><el-button type="primary" @click="tohome">进入云读</el-button></router-link>
      </el-form-item>
    </el-form>
    </el-main>
  </el-container>
</template>

<script>
  import age from '../../static/ageJs'
  import axios from 'axios'
  import qs from 'qs'
  export default {
    name: "completeInformation",
    data() {
      return {
        id:'',
        imageUrl: '',
        input:'',
        options: [{
          value: '选项1',
          label: '男'
        }, {
          value: '选项2',
          label: '女'
        }],
        value: '',
        ageOptions: agejson
      }
    },
    created:function(){
      let uid = this.$route.query.id
      this.id = uid
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      tohome:function () {
        let data =
          {
            id : this.id,
            name : this.input,
            sex : this.options.value,
            age : this.ageOptions.value,
            imageUrl : this.imageUrl
          }
        axios.post(
          '/logined/updatebasic',data
          ).catch(error => function (){
          console.log(error)
        }).then((response) => {
          console.log(response)
        })
      }
    }
  }
</script>

<style scoped>
.el-container .el-header{
  width:100%;
  height:0.9rem;
  font-size: 0.38rem;
  line-height: 1.2rem;
  position:relative;
  border-bottom: 0.01rem solid rgba(245,245,245,0.7);
}
.el-container .el-header i{
  font-size: 0.38rem;
  position: absolute;
  left:0.4rem;
  top:0.45rem;
}
.avatar-uploader .el-upload {
  border: 0.01rem dashed #d9d9d9;
  border-radius: 0.06rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 0.38rem;
  color: #8c939d;
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  background-color: rgba(245,245,245,0.7);
  border-radius: 50%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.avatar {
  width: 2rem;
  height: 2rem;
  display: block;
  border-radius: 50%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.name >>> .el-input__inner,.sex >>> .el-input__inner,.age >>> .el-input__inner{
  width:6.5rem;
  background: rgba(245,245,245,0.7);
}
.el-container p{
  font-size: 0.22rem;
  color: rgb(52,52,52);
  margin-top: 0.35rem;
  margin-bottom: 0.35rem;
  margin-left: 0.4rem;
  text-align: left;
}
.el-container .el-button{
  width:6.5rem;
  background-color: rgb(87,135,173);
}
</style>
