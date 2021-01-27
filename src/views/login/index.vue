<template>
  <div class="form">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
      <span style="color:white;font-size:30px;text-align: center;display:block;margin-bottom:30px">Login</span>
      <el-form-item label="账号" prop="account" style="width:90%;min-width:200px">
        <el-input v-model.number="ruleForm.account"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass" style="width:90%;min-width:200px">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off" style="margin-bottom:5px"></el-input>
      </el-form-item>
      <el-form-item style="display:flex;justify-content:center;margin-right:80px">
        <el-button type="primary" @click="jump">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import '@/mock/default.js'
export default {
  data () {
    var checkAccount = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('账户不能为空'))
      } else {
        if (this.ruleForm.checkAccount !== '') {
          this.$refs.ruleForm.validateField('check')
        }
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    return {
      ruleForm: {
        pass: '',
        account: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        account: [
          { validator: checkAccount, trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    // this.getLogin()
  },
  mounted () {
  },
  methods: {
    // submitForm (formName) {
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       alert('submit!')
    //     } else {
    //       console.log('error submit!!')
    //       return false
    //     }
    //   })
    // },
    // resetForm (formName) {
    //   this.$refs[formName].resetFields()
    // },
    getLogin () {
      // const that = this
      this.$axios.get('http://127.0.0.1:7002/api/login/') // 这是一个异步方法！
        .then(res => {
          // console.log(res.data.data)
          sessionStorage.setItem('loginState', JSON.stringify(res.data.data))
          // const loginState = JSON.parse(sessionStorage.getItem('loginState') || '[]')
          // console.log(loginState)
          // sessionStorage.setItem('role', res.data.data.role)
          const payload = res.data.data
          this.$store.commit('insertLoginState', payload)
        })
      // console.log(this.$store.state.loginState)
    },
    jump () {
      this.getLogin()
      setTimeout(() => {
        this.$router.push('/main')
      }, 100)
    }
  }
}
</script>

<style scoped>
.form {
  height: 100vh;
  width: 100vw;
  display:flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background: linear-gradient(to right, #feac5e, #c779d0, #4bc0c8);
}
.demo-ruleForm{
  /* flex-direction: column;
  justify-content: center;
  align-content: center; */
  width: 25vw;
  min-width: 400px;
  padding: 40px;
  padding-bottom: 20px;
  border: 1px solid #eee;
  /* background-color: #0e1422; */
  background: rgba(190,190,190, 0.3);
  /* filter: blur(10px); */
  border-radius: 40px;
  /* 高斯模糊 */
  z-index: 20;
  backdrop-filter: blur(30px);
}
</style>
