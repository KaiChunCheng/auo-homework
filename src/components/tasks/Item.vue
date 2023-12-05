<script setup>
import { saveTasks } from "@/auo-lib/storage.js";
import { defineProps } from "vue";



const props = defineProps({
  task:{
    type:Object,
    required: true,
  },
})

const removeTask= (e) => {
  console.log(e.currentTarget);
  const btn = e.currentTarget
  const id = btn?.dataset.taskid
  if (id) {
    emits("remove-task", id)
  }
}

const checkedTask = (e)=> {
  const checkbox = e.checked
  // console.log(task);
  // const checked = checkbox?.dataset.taskchecked;
  console.log(checkbox);
  emits("checked-task")

}

const emits = defineEmits(["remove-task","checked-task"])



</script>

<template>
  <li class="flex items-center justify-between border-b main-font">
    <div class="flex items-center gap-3">
      <input type="checkbox" v-model="task.checked" @change="checkedTask(task)" class="w-6 h-6">
      <!-- <label v-if="task.checked == true" class="line-through">{{ task.title }}</label> -->
      <label :class="{ 'line-through': task.checked }">{{ task.title }}</label>
    </div>
    <button :data-taskid="task.id" @click="removeTask" class="btn btn-circle ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1.5em"
        viewBox="0 0 448 512"
      >
        <path
          d="M163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3C140.6 6.8 151.7 0 163.8 0zM32 128H416L394.8 467c-1.6 25.3-22.6 45-47.9 45H101.1c-25.3 0-46.3-19.7-47.9-45L32 128zM143 239c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"
        />
      </svg>
    </button>
    
  </li>
</template>

<style scoped>
.list-font {
  @apply main-font ;
}
.main-font {
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 4px;
    font-family: Arial, sans-serif;
    font-size: 32px;
}
.btn-circle {
    border-radius: 50%; 
    background-color: #006895; 
    color: white; 
}
</style>