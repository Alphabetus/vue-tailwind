<template ref="test">
  <div class="grid grid-cols-2 bg-blue-100 border-b border-t border-blue-300">

    <div class="border-r border-blue-300 py-4">
      <h3 class="font-bold">Add new Item</h3>
      <div>
        <input
            class="w-8/12 border border-blue-300 p-1 rounded-l inline-block border-r-0"
            v-model="content"
            placeholder="What do you have in mind?"
            v-on:keydown="checkForEnter">

        <button class="w-3/12 border border-blue-300 rounded-r inline-block p-1 bg-blue-300" @click="newTodo">Add</button>
      </div>
    </div>

    <div class="py-4">
      <h3 class="font-bold">Workload List</h3>
      <div v-for="todo in list" v-bind:key="todo.id">
        <!-- pass component -->
        <TodoEntry :todo="todo" @remove-todo="removeTodo"/>
      </div>
    </div>

  </div>
</template>


<script>
const axios = require('axios');
import TodoEntry from "./TodoEntry";
export default {
  name: "TodoList",
  components: {
    TodoEntry
  },
  data: function() {
    return {
      content: null,
      list: [],
      isDeleted: false
    }
  },
  methods: {
    newTodo() {
      console.log("new todo");
      axios.post('http://localhost:3000/api/post', { content: this.content })
      .then(() => {
        console.log("yooo");
        this.updateList();
      })
      this.content = null;
    },
    updateList() {
      axios.post('http://localhost:3000/api/get')
      .then((res) => {
        console.log("list updated");
        this.list = res.data;
      })
    },
    checkForEnter(event) {
      if (event.keyCode === 13) {
        this.newTodo();
      }
    },
    removeTodo(id) {
      this.cleanUpTodo(id);
      axios.post('http://localhost:3000/api/delete', { id: id });
    },
    cleanUpTodo(id) {
      const idValidator = (el) => el.id === id;
      const indexToDelete = this.list.findIndex(idValidator);
      this.list.splice(indexToDelete, 1);
    }
  },
  mounted() {
    this.updateList();
  }
}
</script>