<template>
  <div>
    <div class="main">
      <div class="todos" v-for="(todo, index) of TODOS" :key="index">
        <span
          v-if="!todo.isEditing"
          style="flex-grow: 1"
          :class="{ done: todo.completed }"
          >{{ todo.name }}</span
        >

        <b-form-input
          v-else
          v-model="todo.name"
          class="border"
          @blur="doneEdit(todo)"
          @keyup.enter="doneEdit(todo)"
        ></b-form-input>

        <b-icon
          class="pointer"
          @click="completeDone(todo)"
          icon="check-circle"
          scale="1"
          variant="success"
        ></b-icon>

        <b-icon
          class="pointer"
          @click="todoEdit(todo)"
          icon="pencil-square"
          scale="1"
          variant="primary"
        ></b-icon>

        <b-icon
          class="pointer"
          @click="removeTodo(todo)"
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
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["TODOS"]),
  },
  components: {
    appInput: Input,
  },

  methods: {
    ...mapActions([
      "GET_TODOS_FROM_API",
      "TODO_DONE",
      "TODO_EDIT",
      "DONE_EDIT",
      "REMOVE_TODO",
    ]),
    completeDone(todo) {
      this.$store.dispatch("TODO_DONE", todo);
    },
    todoEdit(todo) {
      this.$store.dispatch("TODO_EDIT", todo);
    },
    doneEdit(todo) {
      this.$store.dispatch("DONE_EDIT", todo);
    },
    removeTodo(todo) {
      this.$store.dispatch("REMOVE_TODO", todo);
    },
  },
  mounted() {
    this.GET_TODOS_FROM_API();
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
