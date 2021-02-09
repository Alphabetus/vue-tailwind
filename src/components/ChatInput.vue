<template>
  <div class="h-full">
    <div class="flex h-full">
      <div class="w-11/12">
        <textarea v-model="message" class="w-full h-full resize-none bg-gray-700 px-3 py-1 text-gray-100 text-right" placeholder="Spread Knowledge"></textarea>
      </div>
      <div class="w-1/12 bg-gray-500">
        <button class="h-full" @click="sendMessage">send</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatInput",
  props: {
    room: {
      type: Number,
      required: true
    }
  },
  data: function() {
    return {
      message: ""
    }
  },
  methods: {
    sendMessage() {
      global.socket.emit('new-message', this.message);
      this.message = "";
    }
  }
}
</script>