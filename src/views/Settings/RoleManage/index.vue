<template>
  <div class="user-manager-wrap">
    <div class="search-wrap">
      <div class="filter-wrap">
        <el-row :gutter="12">
          <el-col :span="8">
            <span class="label">角色编号：</span>
            <el-input
              v-model="roleAccount"
              placeholder="请输入角色编号"
              class="input-box"
            ></el-input>
          </el-col>
          <el-col :span="8">
            <span class="label">角色名称：</span>
            <el-input
              v-model="roleName"
              class="input-box"
              placeholder="请输入角色名称"
            ></el-input>
          </el-col>
          <el-col :span="8">
            <span class="label">使用状态：</span>
            <el-select v-model="status" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
        </el-row>
      </div>
      <div class="btn-wrap">
        <el-button type="primary" size="medium">搜索</el-button>
        <el-button size="medium">重置</el-button>
      </div>
    </div>
    <div class="list-wrap">
      <div>
        <el-button type="primary" size="medium" @click="addRole"
          >新增</el-button
        >
      </div>
      <el-table :data="tableData" border class="list-table">
        <el-table-column prop="roleAccount" label="角色编号" width="120">
        </el-table-column>
        <el-table-column prop="roleName" label="角色名称"> </el-table-column>
        <el-table-column prop="roleDesc" label="角色说明"> </el-table-column>
        <el-table-column prop="startTime" label="启用时间"> </el-table-column>
        <el-table-column prop="endTime" label="停用时间"> </el-table-column>
        <el-table-column prop="useType" label="使用状态"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >查看</el-button
            >
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "roleManage",
  data() {
    return {
      roleAccount: "",
      roleName: "",
      status: "",
      currentPage: 1,
      tableData: [
        {
          roleAccount: "1",
          startTime: "2016-05-02",
          endTime: "2016-09-02",
          roleName: "王小虎",
          roleDesc: "张三",
          useType: "普通用户",
        },
        {
          roleAccount: "2",
          startTime: "2016-05-04",
          endTime: "2016-09-02",
          roleName: "王小虎",
          roleDesc: "李四",
          useType: "普通用户",
        },
        {
          roleAccount: "3",
          startTime: "2016-05-01",
          endTime: "2016-09-02",
          roleName: "王小虎",
          roleDesc: "王五",
          useType: "普通用户",
        },
        {
          roleAccount: "4",
          startTime: "2016-05-03",
          endTime: "2016-09-02",
          roleName: "王小虎",
          roleDesc: "赵六",
          useType: "普通用户",
        },
      ],
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    addRole() {
      this.$router.push("/addRole");
    },
  },
};
</script>
<style lang="" scoped></style>
