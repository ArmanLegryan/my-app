<template>
  <div id="app">
    <div class="container">
      <h1 class="title">My ToDo App</h1>

      <app-todo-list></app-todo-list>
    </div>
  </div>
</template>

<script>
import todoList from "./components/todoList";
export default {
  components: {
    appTodoList: todoList
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  width: 100%;
  max-width: 900px;
  margin: 5vh auto;
}

.container {
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
  height: 90vh;
}

.title {
  text-align: center;
  margin-bottom: 30px;
}
</style>
