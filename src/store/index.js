import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newTodo: "",
    todos: [],
  },
  actions: {
    GET_TODOS_FROM_API({ commit }) {
      return axios("http://localhost:3000/todos", {
        method: "GET",
      }).then((todos) => {
        commit("SET_TODOS_TO_STATE", todos.data);
        return todos;
      });
    },

    TODO_DONE({ commit }, todo) {
      commit("DONE_TODO", todo);
    },
    TODO_EDIT({ commit }, todo) {
      commit("EDIT_TODO", todo);
    },
    DONE_EDIT({ commit }, todo) {
      commit("EDIT_DONE", todo);
    },
    REMOVE_TODO({ commit }, todo) {
      commit("TODO_REMOVE", todo);
    },
  },
  mutations: {
    SET_TODOS_TO_STATE: (state, todos) => {
      state.todos = todos;
    },
    DONE_TODO: (state, todo) => {
      todo.completed = !todo.completed;
    },
    EDIT_TODO: (state, todo) => {
      todo.isEditing = true;
    },
    EDIT_DONE: (state, todo) => {
      todo.isEditing = false;
    },
    TODO_REMOVE: (state, todo) => {
      let todos = state.todos;
      todos.splice(todos.indexOf(todo), 1);
    },
    createTodo(state, todo) {
      state.todos.push();
    },
  },
  getters: {
    TODOS(state) {
      return state.todos;
    },
  },
});
