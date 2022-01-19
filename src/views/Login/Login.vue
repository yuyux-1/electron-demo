<template>
  <div class="login-container">
    <div class="login-left">
      <!-- <img
        src="./../../assets/img/login-bg.png"
        alt="login"
        width="468px"
        height="520px"
      /> -->
      <img src="./../../assets/img/login-bg.png" alt="login" height="100%" />
    </div>
    <div class="login-right">
      <div>
        <div>
          <img src="./../../assets/img/login-icon.png" alt="" />
        </div>
        <div class="login-desc">
          Welcome to the Healthcare management system
        </div>
        <div class="sub-desc">Enter your details to proceed further</div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
          <el-form-item prop="username">
            <el-input
              class="user-name"
              v-model="ruleForm.username"
              placeholder="User name"
              style="text-align: right"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="ruleForm.password"
              show-password
              placeholder="Password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="submitForm('ruleForm')"
              class="enter-btn"
              >Enter</el-button
            >
            <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "Please input a user name",
            trigger: "change",
          },
        ],
        password: [
          {
            required: true,
            message: "Please input a password",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm, "ruleForm");
          this.$message.success("登录成功");
          localStorage.setItem("ms_username", "admin");
          this.$router.push("/");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="scss">
.login-container {
  input::-webkit-input-placeholder {
    font-size: 18px;
  }
  .el-input--small .el-input__inner {
    height: 68px;
    line-height: 68px;
  }
  height: 520px;
  width: 1080px;
  padding: 12px;
  //   width: 100%;
  //   height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  min-width: 1200px;
  min-height: 600px;
  .login-left {
    width: 50%;
    text-align: center;
    padding: 12px;
    overflow: hidden;
  }
  .login-right {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    .login-desc {
      margin: 0 auto;
      font-size: 32px;
      font-weight: 600;
      color: #333;
      width: 414px;
      line-height: 36px;
      margin-top: 36px;
    }
    .sub-desc {
      font-weight: 400;
      color: #999;
      line-height: 22px;
      font-size: 16px;
      margin: 16px 0 42px 0;
    }
    .user-name {
      height: 72px;
      width: 420px;
    }
    .enter-btn {
      width: 420px;
      height: 50px;
      background: #00b8fb;
      border-radius: 10px;
      font-weight: 500;
      color: #000000;
      font-size: 18px;
    }
  }
}
</style>
