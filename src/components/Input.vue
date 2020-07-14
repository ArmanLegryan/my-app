<template>
  <div>
    <form>
      <b-input-group>
        <b-form-input
          class="border"
          v-model="newTodo"
          placeholder="Name..."
          @keydown.enter.prevent="addTodo"
        ></b-form-input>
        <b-input-group-append>
          <b-button @click.prevent="addTodo" variant="outline-success">Add Item</b-button>
        </b-input-group-append>
      </b-input-group>
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
      this.$store.commit("createTodo", {
        name: this.newTodo,
        completed: false,
        isEditing: false
      });
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

.border {
  border-color: #28a745 !important;
}
</style>