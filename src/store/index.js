import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newTodo: "",
    todos: [
      { name: "todo 1", completed: false, isEditing: false },
      { name: "todo 2", completed: false, isEditing: false },
      { name: "todo 3", completed: false, isEditing: false },
    ],
  },
  mutations: {
    createTodo(state, todo) {
      state.todos.push(todo);
    },
  },
});
