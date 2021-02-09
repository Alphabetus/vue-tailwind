<template>
  <div class="h-full border-b border-gray-300 px-3" style="height: calc(100vh - 160px)">
    <div v-for="message in messages" v-bind:key="message" class="flex justify-end my-1">
      <div class="bg-gray-500 text-dark rounded px-2 py-1 text-sm">{{message}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatRoom",
  props: {
    room: {
      type: Number,
      required: true
    }
  },
  data: function() {
    return {
      messages: []
    }
  },
  sockets: {
    newMessage(message) {
      this.messages.push(message)
    }
  }
}
</script>