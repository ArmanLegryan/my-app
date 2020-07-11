<template>
  <div>
    <app-input @add-todo="addTodo($event)"></app-input>

    <ul>
      <li v-for="(todo,index) of todos" :key="index">{{todo.name}}</li>
    </ul>
  </div>
</template>

<script>
import Input from "./Input";
export default {
  data() {
    return {
      todos: [
        { name: "todo 1", completed: false },
        { name: "todo 2", completed: false },
        { name: "todo 3", completed: false }
      ]
    };
  },
  components: {
    appInput: Input
  },
  methods: {
    addTodo(newTodo) {
      this.todos.push({ name: newTodo, completed: false });
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  & li {
    margin-bottom: 15px;
  }
}
</style>