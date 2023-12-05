<script setup>
import { v4 as uuid } from 'uuid';

import { getTasks, saveTasks } from "@/auo-lib/storage.js";
import { ref, reactive, onBeforeMount } from "vue";
import AddTaskForm from "@/components/forms/AddTask.vue";
import Header from '@/components/information/Header.vue';
import TaskItem from "@/components/tasks/Item.vue";

const title = "TODO List";
const tasks = reactive([]);

const removeTask = (id) => {
  if (id) {
    const taskIndex = tasks.findIndex((task) => task.id == id)

    if (taskIndex >= 0) {
      tasks.splice(taskIndex, 1);
      saveTasks(tasks);
    }
  }
}

const addTask = (taskName) => {
  if (taskName != "") {
    const task = {
      id: uuid(),
      title: taskName,
      checked: false,
    };
    tasks.unshift(task);
    // local storage
    // localStorage.setItem(STORAGE_NAME,JSON.stringify(this.tasks))
    saveTasks(tasks);
  }
}
 
const saveChecked = ()=>{
  console.log(tasks);
  saveTasks(tasks);
}

onBeforeMount(() => {
  const datas = getTasks();
  if (datas) {
    
    const filteredDatas = datas.filter(data => data.checked !== true);
    // console.log(filteredDatas);
    tasks.push(...filteredDatas);
  }
})


</script>

<template>
  <!-- <h1 class="title">{{ title }}</h1>
  <div class="divider"></div> -->
  <AddTaskForm @add-task="addTask" />

  <div class="divider"></div>
  <div class="content mt-4 ml-4 mr-4">
    <h2 class="text-2xl" v-if="tasks.length == 0">Let's add some tasks to Todo List!</h2>
    <div>
      <Header :tasks="tasks" />
      <ul>
        <TaskItem @remove-task="removeTask" @checked-task='saveChecked' v-for="task in tasks" :task="task" />
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* .title {
  @apply main-font gradient-bg text-white text-5xl;
} */
.content {
  @apply main-font text-slate-900 text-5xl;

}

/* .gradient-bg {
  background-image: linear-gradient(to left, #ffffff, #006895);
} */
.main-font {
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: Arial, sans-serif;
}

/* .btnTest{
  @apply flex items-center mt-4 gap-2;
} */
</style>