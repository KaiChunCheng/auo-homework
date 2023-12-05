<script setup>
import { defineProps, computed } from "vue"

const props = defineProps({
  tasks: {
    type: Array,
    required: true,
    default: [],
  },
})

const taskCount = computed(() => {
  return props.tasks.filter((task) => task.title.length > 2).length
})
</script>

<template>
    <h2 class="text-2xl" v-if="tasks.length == 0">There is no task pending.</h2>
    <h2 class="text-2xl" v-else-if="tasks.length == 1">There is one task pending.</h2>
    <h2 class="text-2xl" v-else>There are {{ taskCount }} tasks pending.</h2>
</template>