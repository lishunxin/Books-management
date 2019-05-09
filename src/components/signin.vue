<template>
    <div class="signin">
        <header>注册<router-link :to="{path:'/login',query:{id:this.id}}" tag="i" class="el-icon-arrow-left"></router-link></header>
        <section>
            <el-form :model="form" :rules="rules" ref="form" class="demo-ruleForm">
                <el-form-item label="" prop="user">
                    <el-input v-model="form.user" placeholder="手机号/邮箱"></el-input>
                </el-form-item>
                <el-form-item label="" prop="password">
                    <el-input v-model="form.password" type="password" placeholder="密码"></el-input>
                </el-form-item>
                <el-form-item label="" prop="repw">
                    <el-input v-model="form.repw" type="password" placeholder="确认密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <router-link :to="{path:'/completeInformation',query:{id:this.id}}">
                      <el-button type="primary" :disabled="isSendIng" @click="toSend('form')">下一步，完善个人信息</el-button>
                    </router-link>
                </el-form-item>
                <el-form-item>
                    <p>注册即代表同意我们的<a href="javascript:">服务协议</a>和<a href="javascript:">隐私政策</a></p>
                </el-form-item>
            </el-form>
        </section>
        <footer>
            <p>已有账号，直接登录</p>
        </footer>
    </div>
</template>

<script>
  import qs from 'qs'
    export default {
        name: "signin",
        data(){
          var checkPw = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请再次输入密码'))
            } else if (value !== this.form.password) {
              callback(new Error('两次输入密码不一致!'))
            } else {
              callback()
            }
          };
            return{
              id:'',
              isSendIng: false,
              rules: {
                user: [
                  { required: true, message: '请输入账号', trigger: 'blur' },
                  { len: 11,  message: '手机号11位数字', trigger: 'blur' }
                ],
                password: [
                  { required: true, message: '请输入密码', trigger: 'blur' }
                ],
                repw: [
                  { required: true, validator: checkPw, trigger: 'blur' }
                ]
              },
                form:{
                    user: '',
                    password: '',
                    repw: ''
                }
            }
        },
      created:function(){
        let uid = this.$route.query.id
        this.id = uid
      },
        methods:{
            toSend(form){
              this.$refs[form].validate((valid) => {
                this.isSendIng = true;
                if (valid) {
                  this.$http.get((process.env.NODE_ENV === 'development' ? '/api' : '')+'/isRegister?'+qs.stringify({user: this.form.user}))
                    .then((res)=>{
                      if(!res.data){
                        this.isSendIng = false;
                        return false;
                      }
                      if(res.data.status === -1){
                        this.isSendIng = false;
                        this.$message({
                          type: 'error',
                          message: '该号码已被注册',
                          center: true
                        });
                        return false;
                      }
                      console.log(this.form.password);
                      this.$http.post((process.env.NODE_ENV === 'development' ? '/api' : '')+'/register', {user: this.form.user, password: this.form.password})
                        .then((res)=>{
                          if(!res.data){
                            this.isSendIng = false;
                            return false;
                          }
                          if(res.data.status === -1){
                            this.isSendIng = false;
                            this.$message({
                              type: 'error',
                              message: '注册失败',
                              center: true
                            });
                            return false;
                          }
                          this.isSendIng = false;
                          this.$router.push('/writeMore');
                        })
                        .catch((res)=>{
                          this.isSendIng = false;
                          console.log(res);
                        })
                    })
                    .catch((res)=>{
                      this.isSendIng = false;
                      console.log(res);
                    })
                } else {
                  this.isSendIng = false;
                  console.log('error send!');
                  return false;
                }
              });
                //this.$router.push('/writeMore')
            }
        }
    }
</script>

<style >
/*rem = 100px*/
.signin header{
    position: relative;
    width: 100%;
    height: 0.9rem;
    line-height: 0.9rem;
    font-size: 0.38rem;
    text-align: center;
    vertical-align: middle;
    border-bottom: 2px solid #d8d8d8;
}
.signin header i{
    color: black;
    font-size: 0.5rem;
    position: absolute;
    top:0.2rem;
    left: 0.4rem;
    text-decoration:none;
}
.signin section .demo-ruleForm{
    margin: 0.4rem 0.4rem;
}
.signin section .demo-ruleForm a{
    text-decoration:none;
}
.signin section .demo-ruleForm .el-input input{
    font-size: .3rem;
    border:none;
    background-color: #f5f5f5;
}
.signin section .demo-ruleForm .el-input__inner:-moz-placeholder{
    color: #bfbfbf;
}
.signin section .demo-ruleForm .el-input__inner::-webkit-input-placeholder{
    color: #bfbfbf;
}
.signin section .demo-ruleForm .el-input__inner:-ms-input-placeholder{
    color: #bfbfbf;
}
.signin section .el-button{width: 100%;}
.signin footer{
    width: 100%;
    position: absolute;
    bottom: 0;
}
.signin footer P{
    height: 1.9rem;
    line-height: 1.9rem;
    font-size: 0.28rem;
}
</style>
