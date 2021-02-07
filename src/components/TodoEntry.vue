<template>
  <div class="py-1 px-7">
    <div class="bg-gray-50 py-2 flex">

      <div class="self-center w-3/12">
        <button
            v-bind:class="{ 'bg-green-300': !isDeleted, 'border-green-300': !isDeleted, 'bg-red-200': isDeleted, 'border-red-300': isDeleted }"
            class="border p-2 text-sm rounded shadow"
            @click="completeTodo(todo.id)">

          Done
        </button>
      </div>

      <div class="self-center w-9/12">
        {{todo.content}}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TodoEntry",
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      isDeleted: false
    }
  }
  ,
  methods: {
    completeTodo(id) {
      axios.post( process.env.VUE_APP_APIBASE + '/api/delete', { id: id })
      this.isDeleted = true;
      const ctx = this;
      setTimeout(function(){
        ctx.$emit('remove-todo', id);
      }, 2500);
    }
  }
}
</script>