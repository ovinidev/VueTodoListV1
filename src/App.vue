<script setup lang="ts">
import { ref } from "vue";
import Button from "./components/Button.vue";
import { createUsers } from "./api/axiosInstance";
import { useUsers } from "./queries/users";
import { useMutation, useQueryClient } from "@tanstack/vue-query";

interface Task {
  id: number;
  name: string;
  isDone: boolean;
}

const tasks = ref<Task[]>([]);
const newTask = ref<string>("");

function addTask() {
  if (newTask.value) {
    tasks.value.push({
      id: Math.random(),
      name: newTask.value,
      isDone: false,
    });

    newTask.value = "";
  }
}

function removeTask(id: number) {
  tasks.value = tasks.value.filter((task) => task.id !== id);
}

function complete(id: number) {
  tasks.value = tasks.value.map((task) => {
    if (task.id === id) {
      return { ...task, isDone: !task.isDone };
    }

    return { ...task };
  });
}

const { data: users } = useUsers();

const queryClient = useQueryClient();

const { mutateAsync: createUser } = useMutation({
  mutationFn: createUsers,
  onSuccess: () => {
    queryClient.invalidateQueries(["users"]);
  },
});
</script>

<template>
  <main className="min-h-screen bg-zinc-900 flex items-start justify-center">
    <div
      className="flex mt-36 flex-col items-center space-y-4 px-6 w-full xsm:w-[30rem]"
    >
      <img className="h-12" src="./assets/vue.svg" alt="vue logo" />
      <h1 className="text-zinc-50 text-3xl">Todo List V1</h1>

      <div className="flex items-center gap-2 w-full">
        <input
          autofocus
          type="text"
          v-model="newTask"
          placeholder="Task"
          className="w-full p-2 rounded"
          @keyup.enter="addTask"
        />

        <Button @click="addTask" title="Create" />
      </div>

      <ul className="space-y-2 w-full" v-auto-animate>
        <li
          className="flex item-center items-center justify-between text-zinc-50"
          v-if="tasks"
          v-for="task in tasks"
          :key="task.id"
          @click="complete(task.id)"
        >
          <div className="flex items-center gap-2">
            <input :checked="task.isDone" type="checkbox" className="h-4 w-4" />

            <span
              class="cursor-pointer text-xl text-zinc-50"
              :class="{ 'line-through': task.isDone }"
            >
              {{ task.name }}
            </span>
          </div>

          <Button
            v-if="task.name.length"
            className="bg-primary text-base p-1.5 rounded-md"
            @click="removeTask(task.id)"
            title="Apagar"
          />
        </li>
      </ul>
    </div>
  </main>
</template>
