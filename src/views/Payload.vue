<template>
  <div class="mt-3 bg-blue-100 py-4 border-t border-blue-300 shadow-sm">
    <h2>Todo List</h2>
    <div class="mx-auto w-1/4">
      <small>Endpoint usage, read and write data into simplistic node server supported by mysql database</small>
    </div>
  </div>

  <TodoList  class="mt-3 shadow-sm" ref="todoList" @new-todo="updateTodos"/>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
export default {
  name: "Payload",
  components: {
    TodoList
  },
  methods: {
    updateTodos() {
      console.log("event triggered");
    }
  }
}
</script>