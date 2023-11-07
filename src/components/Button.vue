<script setup lang="ts">
import { defineProps } from "vue";

const { title } = defineProps({
  title: String,
});
</script>

<template>
  <button
    type="button"
    className="bg-primary p-2 text-zinc-50 rounded-md"
    :text="title"
  />
</template>
