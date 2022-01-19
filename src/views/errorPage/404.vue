<template>
  <div class="not-found-wrap">
    <div class="main-content">
      <img src="./../../assets/img/404.png" alt="" />
      <p class="tips">啊呀！你访问的页面不小心迷路了～</p>
      <el-button type="primary" @click="toHomePage">返回首页</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "notFound",
  data() {
    return {
      input: "",
    };
  },
  methods: {
    toHomePage() {
      this.$router.push("/dashboard");
    },
  },
};
</script>
<style lang="scss" scoped>
.not-found-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .main-content {
    width: 700px;
    text-align: center;
    img {
      width: 664px;
      height: 570px;
    }
  }
  .tips {
    color: #666666;
    margin-bottom: 22px;
  }
}
</style>
