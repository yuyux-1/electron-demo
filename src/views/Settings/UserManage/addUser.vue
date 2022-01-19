<template>
  <div>
    add user
    <el-input v-model="input" placeholder="请输入内容"></el-input>
  </div>
</template>
<script>
export default {
  name: "addUser",
  data() {
    return {
      input: "",
    };
  },
};
</script>
