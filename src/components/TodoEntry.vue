<template>
  <div>{{ todo.content }}</div>
</template>

<script>
export default {
  name: "TodoEntry",
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>