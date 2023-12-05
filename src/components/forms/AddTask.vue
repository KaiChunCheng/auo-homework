<script setup>
import {ref,defineEmits } from "vue";

const taskName = ref("");

const emits = defineEmits(["add-task"]);

const addTask = () =>{
    emits("add-task",taskName.value);
    taskName.value = "";
    // this.$emit("add-task", this.taskName)
    // this.taskName = ""
}
</script>

<template>
  <div class="flex items-center gap-4 mt-4 ml-4 mr-4">
    <input
      v-model.trim="taskName"
      @keydown.enter="addTask"
      type="text"
      class="w-full input input-bordered"
      placeholder="Enter Your Task here"
    />
    <button @click="addTask" class="custom-btn btn btn-primary">Add Task</button>
  </div>
</template>
<style scoped>
.custom-btn {
  background-color: #006895;
  color: white;
}
</style>