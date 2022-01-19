<template>
  <div class="wrapper">
    <v-head></v-head>
    <v-sidebar></v-sidebar>
    <div class="content-box" :class="{ 'content-collapse': collapse }">
      <v-tags></v-tags>
      <div class="content">
        <transition name="move" mode="out-in">
          <keep-alive :include="tagsList">
            <router-view></router-view>
          </keep-alive>
        </transition>
        <el-backtop target=".content"></el-backtop>
      </div>
    </div>
  </div>
</template>

<script>
import vHead from "./Header.vue";
import vSidebar from "./Sidebar.vue";
import vTags from "./Tags.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      tagsList: [],
      collapse: false,
    };
  },
  components: {
    vHead,
    vSidebar,
    vTags,
  },
  computed: {
    ...mapGetters("user", ["getTagList"]),
  },
  watch: {
    "$store.state.user.isSidebarCollapse"(val) {
      this.collapse = val;
    },
    getTagList(val) {
      // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
      let arr = [];
      for (let i = 0, len = val.length; i < len; i++) {
        val[i].name && arr.push(val[i].name);
      }
      this.tagsList = arr;
    },
  },
};
</script>
