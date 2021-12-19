<template>
  <div id="login-container">
    <el-form
      class="loginForm"
      :model="loginForm"
      ref="loginFormRef"
      :rules="rules"
      :inline="false"
      size="normal"
    >
      <el-form-item>
        <h1 class="loginTitle">ECharts常用图表</h1>
      </el-form-item>
      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          placeholder="请输入用户名"
          prefix-icon="el-icon-search"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="loginForm.password"
          placeholder="请输入密码"
          prefix-icon="el-icon-search"
        ></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <!-- gutter是指两个el-col之间的间隔 -->
        <el-row :gutter="40">
          <el-col :span="15" :offset="0">
            <el-input
              v-model="loginForm.code"
              placeholder="请输入验证码"
            ></el-input>
          </el-col>
          <el-col :span="9" :offset="0">
            <el-input
              v-model="loginForm.code"
              placeholder="请输入验证码"
            ></el-input>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-row :gutter="20">
          <el-col :span="12" :offset="0">
            <el-button class="btn" type="primary" @click="handleLogin">
              登&nbsp;录
            </el-button>
          </el-col>
          <el-col :span="12" :offset="0">
            <el-button class="btn">取&nbsp;消</el-button>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: '123456',
        code: 'yes'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
          // { min: 3, max: 5, message: '长度在 5 到  个字符', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleLogin() {
      this.$refs.loginFormRef.validate((valid) => {
        if (valid) {
          window.sessionStorage.setItem('token', this.loginForm.username)
          this.$message.success('验证通过')
          this.$router.push('/home')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
#login-container {
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  .loginTitle {
    text-align: center;
  }
  .loginForm {
    height: 400px;
    width: 450px;
    box-shadow: 0 0 30px #cac6c6;
    border-radius: 10px 10px;
    padding: 20px 30px;
  }
  .btn {
    width: 100%;
  }
}
</style>
