<template>
  <div class="header">
    <!-- 折叠按钮 -->
    <!-- <div class="logo" :style="{ width: collapse ? '64px' : '250px' }">
      {{ collapse ? "logo" : "后台管理系统" }}
    </div> -->
    <div
      class="collapse-btn"
      @click="collapseChage"
      :style="{ marginLeft: collapse ? '64px' : '228px' }"
    >
      <i v-if="!collapse" class="el-icon-s-fold"></i>
      <i v-else class="el-icon-s-unfold"></i>
    </div>
    <div class="header-right">
      <div class="header-user-icon">
        <!-- 用户头像 -->
        <div class="user-avator">
          <img src="../../assets/img/img.jpg" />
        </div>
        <!-- 用户名下拉菜单 -->
        <el-dropdown class="user-name" trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            <!-- {{ username }} -->
            员工健康档案系统
            <i class="el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item divided command="loginout"
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      collapse: false,
      fullscreen: false,
      name: "linxin",
      message: 2,
    };
  },
  watch: {
    "$store.state.user.isSidebarCollapse"(val) {
      this.collapse = val;
    },
  },
  computed: {
    username() {
      let username = localStorage.getItem("ms_username");
      return username ? username : this.name;
    },
  },
  methods: {
    // 用户名下拉菜单选择事件
    handleCommand(command) {
      if (command == "loginout") {
        localStorage.removeItem("ms_username");
        this.$router.push("/login");
      }
    },
    // 侧边栏折叠
    collapseChage() {
      this.$store.commit("user/TOGGLE_SIDEBAR_COLLAPSE");
    },
  },
  mounted() {
    if (document.body.clientWidth < 1500) {
      this.collapseChage();
    }
  },
};
</script>
<style scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  font-size: 22px;
  color: #000;
}
.collapse-btn {
  float: left;
  padding: 0 21px;
  cursor: pointer;
  line-height: 60px;
}
.header .logo {
  float: left;
  background-color: #e69030;
  line-height: 60px;
}
.header-right {
  float: right;
  padding-right: 50px;
}
.header-user-icon {
  display: flex;
  height: 60px;
  align-items: center;
}
.user-name {
  margin-left: 10px;
}
.user-avator {
  margin-left: 20px;
}
.user-avator img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.el-dropdown-link {
  color: #000;
  cursor: pointer;
}
.el-dropdown-menu__item {
  text-align: center;
}
</style>
