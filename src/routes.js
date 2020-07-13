import VueRouter from "vue-router";
import todoList from "./components/todoList.vue";
import Create from "./components/Create.vue";

export default new VueRouter({
  routes: [
    {
      path: "/create",
      component: Create,
    },
    {
      path: "/todoList",
      component: todoList,
    },
  ],
  mode: "history",
});
