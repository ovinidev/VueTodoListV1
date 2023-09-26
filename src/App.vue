<script setup lang="ts">
import { ref } from "vue";
import Button from "./components/ButtonAction.vue";

const tasks = ref([
  {
    id: 0,
    name: "",
  },
]);

const newTask = ref("");

function addTask() {
  if (tasks.value) {
    tasks.value.push({
      id: Math.random(),
      name: newTask.value,
    });

    newTask.value = "";
  }
}

function removeTask(id: number) {
  tasks.value = tasks.value.filter((task) => task.id !== id);
}
</script>

<template>
  <main className="min-h-screen bg-zinc-900 flex items-start justify-center">
    <div
      className="flex mt-36 flex-col items-center space-y-4 px-6 w-full xsm:w-[30rem]"
    >
      <img className="h-12" src="./assets/vue.svg" />
      <h1 className="text-zinc-50 text-3xl">Todo List V1</h1>

      <div className="flex items-center gap-2 w-full">
        <input
          type="text"
          v-model="newTask"
          placeholder="Task"
          className="w-full p-2 rounded"
        />

        <Button @click="addTask" title="Create" />
      </div>

      <div className="space-y-2 w-full">
        <div
          className="flex item-center items-center justify-between text-zinc-50"
          v-for="(task, index) in tasks"
          v-bind:key="index"
        >
          <span className="text-zinc-50 text-xl">
            {{ task.name }}
          </span>

          <Button
            v-if="task.name.length"
            className="bg-primary p-2 rounded-md"
            @click="removeTask(task.id)"
            title="Apagar"
          />
        </div>
      </div>
    </div>
  </main>
</template>
