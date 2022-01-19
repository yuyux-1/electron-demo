<template>
  <div class="electron-demo-wrap">
    <el-button @click="handleHome">渲染进程=>主进程</el-button>
    <div>
      <p class="title">clipboard</p>
      <div>
        <span>
          <el-input
            v-model="copyText"
            placeholder="请输入内容"
            style="width: 220px; margin-right: 20px"
          ></el-input>
        </span>
        <el-button type="primary" @click="handleCopy">复制</el-button>
        {{ readText }}
        <el-button type="primary" @click="handleCopyImg">复制图片</el-button>
        <div><img :src="copyImg" alt="" /></div>
      </div>
    </div>
    <div>
      <p class="title">BrowserWindow</p>
      <el-button type="primary" @click="handleCreateWin">新建窗口</el-button>
    </div>
  </div>
</template>
<script>
import { ipcRenderer, clipboard } from "electron";
export default {
  name: "dashboard",
  data() {
    return {
      copyText: "我是要复制的文字",
      readText: "",
      copyImg: "",
    };
  },
  created() {
    ipcRenderer.on("hello-click", () => {
      this.$message({
        message: "主进程=>渲染进程",
        type: "success",
      });
    });
    ipcRenderer.on("trayIconClick", (ev, data) => {
      console.log("trayIconClick!!!", data);
    });
  },
  methods: {
    handleHome() {
      ipcRenderer.invoke("home");
    },
    handleCopy() {
      clipboard.writeText(this.copyText);
      this.readText = clipboard.readText();
    },
    handleCopyImg() {
      this.copyImg = clipboard.readImage().toDataURL();
      console.log(this.copyImg);
    },
    handleCreateWin() {
      ipcRenderer.invoke("new-win");
    },
  },
};
</script>
<style lang="sass" scoped>
.electron-demo-wrap
  background: #fff
  padding:24px
  .title
    font-weight:700
    margin-bottom:16px
</style>
