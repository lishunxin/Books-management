<template>
    <div class="login">
        <header>登录云读<router-link to="/signin">注册</router-link></header>
        <section>
            <div class="logo"><img src="../../src/assets/logo.png" alt="LOGO"></div>
            <el-form :model="form" :rules="rules" ref="form" class="demo-ruleForm">
                <el-form-item label="" prop="user">
                    <el-input v-model="form.user" placeholder="手机号/邮箱"></el-input>
                </el-form-item>
                <el-form-item label="" prop="password">
                    <el-input v-model="form.password" type="password" placeholder="密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" :disabled="isLoginIng" @click="toLogin('form')">登录</el-button>
                </el-form-item>
                <el-form-item>
                    <a href="javascript:" class="phoneLogin">手机验证码登录</a>
                    <a href="javascript:" class="forgetPw">忘记密码</a>
                </el-form-item>
            </el-form>
        </section>
        <footer>
            <div class="title">
                <p>登录方式</p>
            </div>
            <div class="items">
                <a href="javascript:" class="item"><img src="../../src/assets/icon/qq.png" alt="qq"></a>
                <a href="javascript:" class="item"><img src="../../src/assets/icon/weixin.png" alt="weixin"></a>
                <a href="javascript:" class="item"><img src="../../src/assets/icon/weibo.png" alt="weibo"></a>
            </div>
        </footer>
    </div>
</template>

<script>
  import qs from 'qs'
    export default {
        name: "login",
        data(){
            return{
                id:'',
                isLoginIng: false,
                rules: {
                  user: [
                    { required: true, message: '请输入账号', trigger: 'blur' }
                  ],
                  password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                  ]
                },
                form:{
                  user: '',
                  password: ''
                }
            }
        },
      methods: {
        toLogin(form){
          this.$refs[form].validate((valid) => {
            this.isLoginIng = true;
            if (valid) {
              this.$http.post((process.env.NODE_ENV === 'development' ? '/api' : '')+'/login_p', this.form)
                .then((res)=>{
                  this.isLoginIng = false;
                  if(!res.data){return false;}
                  if(res.data.status === -1){
                    this.$message({
                      type: 'error',
                      message: '账号或密码错误',
                      center: true
                    });
                    return false;
                  }
                  alert(res.data.status);
                  this.id = res.data.status
                })
                .catch((res)=>{
                  this.isLoginIng = false;
                  console.log(res);
                })
            } else {
              this.isLoginIng = false;
              console.log('error login!');
              return false;
            }
          });
        }
      }
    }
</script>

<style >
/*rem = 100px*/
.login header{
    position: relative;
    width: 100%;
    height: 0.9rem;
    line-height: 0.9rem;
    font-size: 0.38rem;
    text-align: center;
    vertical-align: middle;
}
.login header a{
    color: rgb(29, 99, 152);
    font-size: 0.33rem;
    position: absolute;
    right: 0.4rem;
    text-decoration:none;
}
.login section .logo{
    
    margin: 0.6rem auto 0.9rem;
}
.login section .logo img{
    width: 2.34rem;
    height: 2.34rem;
}
.login section .demo-ruleForm{
    margin: 0 0.4rem;
}
.login section .demo-ruleForm .el-input input{
    font-size: .3rem;
    text-align: center;
    border:none;
    background-color: #f5f5f5;
}
.login section .demo-ruleForm .el-input__inner:-moz-placeholder{
    text-align: center;
    color: #bfbfbf;
}
.login section .demo-ruleForm .el-input__inner::-webkit-input-placeholder{
    text-align: center;
    color: #bfbfbf;
}
.login section .demo-ruleForm .el-input__inner:-ms-input-placeholder{
    text-align: center;
    color: #bfbfbf;
}
.login section .el-button{width: 100%;}
.login section .phoneLogin{
    float: left;
    font-size: 0.25rem;
    text-decoration:none;
    color: black;
}
.login section .forgetPw{
    float: right;
    font-size: 0.25rem;
    text-decoration:none;
    color: black;
}
.login footer{
    width: 100%;
    position: absolute;
    bottom: 0;
}
.login footer .title{
    width:100%;
    height: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center
}
.login footer .title p{
    font-size: 0.23rem;
}
.login footer .title::before, .login footer .title::after{
    content: '';
    display: block;
    width: 1.9rem;
    height: 0.02rem;
    background-color: #d8d8d8;
}
.login footer .items{
    width:100%;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center
}
.login footer .items a{
    display: block;
    margin: 0 0.5rem;
}
.login footer .items img{
    height: .8rem;
    width: .8rem;
}
.el-message{
  height: 0.5rem;
  font-size: 0.3rem;
  background-color: transparent;
  border-color: transparent;
}
</style>
