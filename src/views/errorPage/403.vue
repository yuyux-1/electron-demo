<template>
  <div class="no-permission-wrap">
    <div class="main-content">
      <img src="./../../assets/img/403.png" alt="" />
      <p class="tips">啊呀！你无权访问该页面……</p>
      <el-button type="primary" @click="toHomePage">返回首页</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "noPermission",
  data() {
    return {};
  },
  methods: {
    toHomePage() {
      this.$router.push("/dashboard");
    },
  },
};
</script>
<style lang="scss" scoped>
.no-permission-wrap {
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
