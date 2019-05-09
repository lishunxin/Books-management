<template>
  <div class="putTheBook">
    <div class="header">
    <i class="el-icon-arrow-left" @click="back"></i>
    <span class="case">添书</span>
   </div>
    <section>
      <el-form :model="form" ref="form" :rules="rules" class="demo-ruleForm" label-width="2rem">
        <el-form-item label="书名" prop="title_1">
          <el-input v-model="form.title_1" placeholder="请输入书名"></el-input>
        </el-form-item>
        <el-form-item label="作者" prop="author_1">
          <el-input v-model="form.author_1" placeholder="请输入作者"></el-input>
        </el-form-item>
        <el-form-item label="出版社" prop="press_1">
          <el-input v-model="form.press_1" placeholder="请输入出版社"></el-input>
        </el-form-item>
        <el-form-item label="购买时间" prop="buy_time">
          <el-date-picker
            v-model="form.buy_time"
            type="datetime"
            placeholder="选择购买时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="价格" prop="price">
          <el-input v-model="form.price" placeholder="请输入价格"></el-input>
        </el-form-item>
        <el-form-item label="上传封面" prop="book_pic">
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
        <el-form-item>
          <el-button type="primary" :disabled="isSendIng" @click="toSend('form')">完成</el-button>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
  export default {
    name: "putTheBook",
    data(){
      return{
        id:'',
        isSendIng: false,
        rules: {
          title_1: [
            { required: true, message: '请输入书名', trigger: 'blur' }
          ],
          author_1: [
            { required: true, message: '请输入作者', trigger: 'blur' }
          ],
          press_1: [
            { required: true, message: '请输入出版社', trigger: 'blur' }
          ],
          buy_time: [
            { required: true, message: '请输入购买时间', trigger: 'blur' }
          ],
          price: [
            { required: true, message: '请输入价格', trigger: 'blur' }
          ],
          book_pic: [
            { required: true, message: '请输入上传图片', trigger: 'blur' }
          ]
        },
        imageUrl: '',
        form:{
          title_1: '',
          author_1: '',
          press_1: '',
          buy_time: '',
          price: '',
          book_pic: '',
          user_id: '55'
        }
      }
    },
    computed:{
      url(){
        return (process.env.NODE_ENV === 'development' ? '/api' : '')+"/uploadFile"
      }
    },
    created:function(){
      let uid = this.$route.query.id
      this.id = uid
    },
    methods: {
      back:function () {
        this.$router.back(-1)
      },
      handleAvatarSuccess(res, file) {
        this.form.book_pic = res.status;
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
      },
      toSend(form){
        this.$refs[form].validate((valid) => {
          this.isSendIng = true;
          if (valid) {
            this.form.buy_time = this.form.buy_time.toISOString()
            this.$http.post((process.env.NODE_ENV === 'development' ? '/api' : '')+'/logined/addBook', this.form)
              .then((res)=>{
                this.isSendIng = false;
                if(!res.data){return false;}
                if(res.data.status === -1){
                  this.$message({
                    type: 'error',
                    message: '添加失败',
                    center: true
                  });
                  return false;
                }
                alert('添加成功');
                console.log('添加成功')
              })
              .catch((res)=>{
                this.isSendIng = false;
                console.log(res);
              })
          } else {
            this.isSendIng = false;
            console.log('error add!');
            return false;
          }
        });
      }
    }
  }
</script>

<style >
  /*rem = 100px*/
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
  .putTheBook header{
    position: relative;
    width: 100%;
    height: 0.9rem;
    line-height: 0.9rem;
    font-size: 0.38rem;
    text-align: center;
    vertical-align: middle;
    border-bottom: 2px solid #d8d8d8;
  }
  .putTheBook section .demo-ruleForm{
    margin: 0.4rem 0.4rem 0 0;
  }
  .putTheBook section .demo-ruleForm a{
    text-decoration:none;
  }
  .putTheBook section .demo-ruleForm .avatar-uploader{
    width: 3rem;
    height: 4rem;
    margin: 0 auto;
    background-color: #ccc;
  }
  .putTheBook section .demo-ruleForm .avatar-uploader .el-upload{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .putTheBook section .demo-ruleForm .avatar-uploader .avatar{
    width: 100%;
    height: 100%;
  }
  .putTheBook section .demo-ruleForm .avatar-uploader .img{
    width: 100%;
    height: 100%;
  }
  .putTheBook section .demo-ruleForm .avatar-uploader .el-icon-plus{
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
  .putTheBook section .demo-ruleForm .el-input{width: 100%}
  .putTheBook section .demo-ruleForm .el-input input{
    font-size: .3rem;
    border:none;
    background-color: #f5f5f5;
  }
  .putTheBook section .demo-ruleForm .el-input__inner:-moz-placeholder{
    color: #bfbfbf;
  }
  .putTheBook section .demo-ruleForm .el-input__inner::-webkit-input-placeholder{
    color: #bfbfbf;
  }
  .putTheBook section .demo-ruleForm .el-input__inner:-ms-input-placeholder{
    color: #bfbfbf;
  }
  .putTheBook section .el-button{
    width: 100%;
    transform: translateX(-0.6rem);
  }
  .el-picker-panel{
    width: 6rem;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  .el-time-panel{
    width: 3rem
  }
</style>
