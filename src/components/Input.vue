<template>
  <div>
    <form>
      <input type="text" class="input border" v-model="newTodo" placeholder="Name..." />
      <button class="btn border" @click.prevent="addTodo">Add ToDo</button>
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
        this.newTodo.trim();
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
  display: flex;
}

.input {
  width: 625px;
  padding: 5px 5px 5px 5px;
  border-right: none !important;
}

.btn {
  padding: 7px 7px 7px 7px;
  cursor: pointer;
  color: green;
  background-color: rgb(245, 245, 239);
}

.border {
  height: 30px;
  border: 1px solid green;
  outline: none;
}
</style>