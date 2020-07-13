<template>
  <div>
    <app-input @add-todo="addTodo($event)"></app-input>

    <div class="main">
      <div class="todos" v-for="(todo,index) of todos" :key="index">
        <span
          v-if="!todo.isEditing"
          style="flex-grow: 1"
          :class="{done: todo.completed}"
        >{{todo.name}}</span>

        <b-form-input
          v-else
          v-model="todo.name"
          class="border"
          @blur="doneEdit(todo)"
          @keyup.enter="doneEdit(todo)"
        ></b-form-input>

        <!-- <button @click="todoDone(todo)">done</button> -->
        <b-icon
          class="pointer"
          @click="todoDone(todo)"
          icon="check-circle"
          scale="1"
          variant="success"
        ></b-icon>

        <!-- <button @click="editTodo(todo)">edit</button> -->
        <b-icon
          class="pointer"
          @click="editTodo(todo)"
          icon="pencil-square"
          scale="1"
          variant="primary"
        ></b-icon>

        <!-- <button @click="removeTodo(index)">delete</button> -->
        <b-icon
          class="pointer"
          @click="removeTodo(index)"
          icon="x-circle"
          scale="1"
          variant="danger"
        ></b-icon>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "./Input";
export default {
  data() {
    return {
      todos: [
        { name: "todo 1", completed: false, isEditing: false },
        { name: "todo 2", completed: false, isEditing: false },
        { name: "todo 3", completed: false, isEditing: false }
      ]
    };
  },
  components: {
    appInput: Input
  },
  methods: {
    addTodo(newTodo) {
      this.todos.push({ name: newTodo, completed: false, isEditing: false });
    },
    editTodo(todo) {
      todo.isEditing = true;
    },
    doneEdit(todo) {
      todo.isEditing = false;
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    todoDone(todo) {
      todo.completed = !todo.completed;
    }
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
button {
  cursor: pointer;
  outline: none;
}

.main {
  display: flex;
  flex-direction: column;

  & .todos {
    margin-bottom: 15px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & button {
      margin-left: 10px;
    }
  }

  & .done {
    text-decoration: line-through;
  }
}

.todoDone {
  text-decoration: line-through;
}

.pointer {
  margin-left: 10px;
  cursor: pointer;
}
</style>