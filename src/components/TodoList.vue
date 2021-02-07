<template ref="test">
  <div class="grid grid-cols-2 bg-blue-100 border-b border-t border-blue-300">

    <div class="border-r border-blue-300 py-4">
      <h3 class="font-bold">Add new Item</h3>
      <div>
        <input
            class="w-8/12 border border-blue-300 p-1 rounded-l inline-block border-r-0"
            v-model="content"
            placeholder="What do you have in mind?">

        <button class="w-3/12 border border-blue-300 border-l-0 rounded-r inline-block p-1" @click="newTodo">OK</button>
      </div>
    </div>

    <div class="py-4">
      <h3 class="font-bold">Workload List</h3>
      <div v-for="todo in list" v-bind:key="todo.id">
        <!-- pass component -->
        <TodoEntry :todo="todo"/>
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
      list: []
    }
  },
  methods: {
    newTodo() {
      this.$emit("newTodo");
      this.content = null;
    },

    getList() {
      axios.post('http://localhost:3000/api/get')
      .then(function (res){
        return res.data;
      })
    }
  },
  mounted() {
    axios.post('http://localhost:3000/api/get')
    .then(res => (this.list = res.data));
  }
}
</script>