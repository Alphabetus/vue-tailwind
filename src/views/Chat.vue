<template>
  <div class="flex bg-gray-700 h-screen absolute left-0 w-screen text-gray-300" style="height: calc(100vh - 3rem); top: 3rem">
    <div class="w-3/12 border-r border-gray-300 h-full pt-3">
      <h1 class="font-bold">Users</h1>
      <div>
        user list
      </div>
    </div>
    <div class="w-9/12 bg-gray-700 h-full pt-3">
      <h2 class="font-bold">Room</h2>
      <div>
        <ChatRoom :room="0"/>
      </div>

      <div class="w-full" style="height: 72px">
        <ChatInput :room="0"/>
      </div>
    </div>
  </div>
</template>

<script>
import ChatRoom from "@/components/ChatRoom";
import ChatInput from "@/components/ChatInput";
export default {
  name: "Chat",
  components: {
    ChatRoom,
    ChatInput
  }
}
</script>