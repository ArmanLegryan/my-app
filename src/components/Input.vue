<template>
  <div>
    <form>
      <input type="text" class="input" v-model="newTodo" placeholder="Name..." />
      <button @click.prevent="addTodo">Add ToDo</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: ""
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.length > 0) {
        this.$emit("add-todo", this.newTodo);
      }
      this.newTodo = "";
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  margin-bottom: 30px;
}

.input {
  width: 635px;
  outline: none;
}
</style>