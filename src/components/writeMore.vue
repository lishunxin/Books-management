<template>
    <div class="writeMore">
        <header>完善信息<router-link to="/signin" tag="i" class="el-icon-arrow-left"></router-link></header>
        <section>
            <el-form :model="form" ref="form" class="demo-ruleForm">
                <el-form-item label="" prop="photo">
                  <el-upload
                    class="avatar-uploader"
                    :action="url"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <div class="img" v-if="imageUrl">
                      <img :src="imageUrl" class="avatar">
                    </div>
                    <i class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </el-form-item>
                <el-form-item label="" prop="id">
                    <el-input v-model="form.id" placeholder="姓名"></el-input>
                </el-form-item>
                <el-form-item label="" prop="sex">
                  <el-select v-model="form.sex" placeholder="选择自己的性别吧" clearable>
                    <el-option
                      v-for="item in sexList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="" prop="age">
                  <el-select v-model="form.age" placeholder="你的年龄" clearable>
                    <el-option
                      v-for="item in ageList"
                      :key="item"
                      :label="item"
                      :value="item">
                    </el-option>
                  </el-select>
                </el-form-item>
              <el-form-item>
                <p>已对以上信息加密</p>
              </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="console.log(form)">进入云读</el-button>
                </el-form-item>
            </el-form>
        </section>
    </div>
</template>

<script>
    export default {
        name: "writeMore",
        data(){
            return{
              sexList: [{
                value: 1,
                label: '男'
              }, {
                value: 0,
                label: '女'
              }],
              ageList: [],
              imageUrl: '',
                form:{
                    name: '',
                    pw: '',
                    repw: '',
                    id: '',
                    sex: '',
                    age: ''
                }
            }
        },
        computed:{
            url(){
              return (process.env.NODE_ENV === 'development' ? '/api' : '')+"/uploadFile"
            }
        },
        methods: {
          handleAvatarSuccess(res, file) {

            console.log(res.status);
            this.imageUrl = URL.createObjectURL(file.raw);
          },
          beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg'||'image/png';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
              this.$message.error('上传头像图片只能是 JPG PNG 格式!');
            }
            if (!isLt2M) {
              this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
          }
        },
      created() {
        (function(ageList){
          for(var i = 10;i<60;i++){
            ageList.push(i)
          }
        })(this.ageList)
      }
    }
</script>

<style >
/*rem = 100px*/
.writeMore header{
    position: relative;
    width: 100%;
    height: 0.9rem;
    line-height: 0.9rem;
    font-size: 0.38rem;
    text-align: center;
    vertical-align: middle;
    border-bottom: 2px solid #d8d8d8;
}
.writeMore header i{
    color: black;
    font-size: 0.5rem;
    position: absolute;
    top:0.2rem;
    left: 0.4rem;
    text-decoration:none;
}
.writeMore section .demo-ruleForm{
    margin: 0.4rem 0.4rem;
}
.writeMore section .demo-ruleForm a{
    text-decoration:none;
}
.writeMore section .demo-ruleForm .avatar-uploader{
  width: 2rem;
  height: 2rem;
  margin: 0 auto;
  border-radius: 50%;
  background-color: #ccc;
}
.writeMore section .demo-ruleForm .avatar-uploader .el-upload{
  width: 100%;
  height: 100%;
  position: relative;
}
.writeMore section .demo-ruleForm .avatar-uploader .avatar{
  width: 100%;
  height: 100%;
}
.writeMore section .demo-ruleForm .avatar-uploader .img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
}
.writeMore section .demo-ruleForm .avatar-uploader .el-icon-plus{
  position: absolute;
  bottom: 0.08rem;
  right: 0.06rem;
  width: 0.4rem;
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.3rem;
  color: #FFF;
  border-radius: 50%;
  background-color: #5687ac;
}
.writeMore section .demo-ruleForm .el-select{
  width: 100%;
}
.writeMore section .demo-ruleForm .el-input input{
    font-size: .3rem;
    border:none;
    background-color: #f5f5f5;
}
.writeMore section .demo-ruleForm .el-input__inner:-moz-placeholder{
    color: #bfbfbf;
}
.writeMore section .demo-ruleForm .el-input__inner::-webkit-input-placeholder{
    color: #bfbfbf;
}
.writeMore section .demo-ruleForm .el-input__inner:-ms-input-placeholder{
    color: #bfbfbf;
}
.writeMore section .demo-ruleForm .el-form-item p{
  height: 0.24rem;
  line-height: 0.24rem;
  font-size: 0.22rem;
  text-align: left;
}
.writeMore section .el-button{width: 100%;}
</style>
