import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
    },
    {
      path: "/",
      component: () =>
        import(/* webpackChunkName: "home" */ "../components/common/Home.vue"),
      meta: { title: "自述文件" },
      children: [
        {
          path: "/dashboard",
          component: () =>
            import(
              /* webpackChunkName: "dashboard" */ "../views/Dashboard/Dashboard.vue"
            ),
          meta: { title: "系统首页" },
        },
        {
          path: "/userManage",
          component: () =>
            import(
              /* webpackChunkName: "dashboard" */ "../views/Settings/UserManage/index.vue"
            ),
          meta: { title: "用户管理" },
        },
        {
          path: "/addUser",
          component: () =>
            import(
              /* webpackChunkName: "dashboard" */ "../views/Settings/UserManage/addUser.vue"
            ),
          meta: { title: "新增用户" },
        },
        {
          path: "/roleManage",
          component: () =>
            import(
              /* webpackChunkName: "dashboard" */ "../views/Settings/RoleManage/index.vue"
            ),
          meta: { title: "角色管理" },
        },
        {
          path: "/addRole",
          component: () =>
            import(
              /* webpackChunkName: "dashboard" */ "../views/Settings/RoleManage/addRole.vue"
            ),
          meta: { title: "新增角色" },
        },
        {
          path: "/moduleManage",
          component: () =>
            import(
              /* webpackChunkName: "dashboard" */ "../views/Settings/ModuleManage/index.vue"
            ),
          meta: { title: "模块管理" },
        },
        
        // {
        //   // 权限页面
        //   path: "/permission",
        //   component: () =>
        //     import(
        //       /* webpackChunkName: "permission" */ "../components/page/Permission.vue"
        //     ),
        //   meta: { title: "权限测试", permission: true },
        // },
        {
          path: "/404",
          component: () =>
            import(/* webpackChunkName: "404" */ "../views/errorPage/404.vue"),
          meta: { title: "404" },
        },
        {
          path: "/403",
          component: () =>
            import(/* webpackChunkName: "403" */ "../views/errorPage/403.vue"),
          meta: { title: "403" },
        },
     
      ],
    },
    {
      path: "/login",
      component: () =>
        import(/* webpackChunkName: "login" */ "../views/Login/Login.vue"),
      meta: { title: "登录" },
    },
    {
      path: "*",
      redirect: "/404",
    },
  ],
});
