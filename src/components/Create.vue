<template>
  <div>
    <app-input @add-todo="addTodo()"></app-input>

    <div class="main">
      <div class="todos" v-for="(todo, index) of todos" :key="index"></div>
    </div>
  </div>
</template>

<script>
import Input from "./Input";
import { mapState } from 'vuex';

export default {
  components: {
    appInput: Input
  },
  computed: {
    ...mapState(['todos']),
  },
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

.pointer {
  margin-left: 10px;
  cursor: pointer;
}
</style>
