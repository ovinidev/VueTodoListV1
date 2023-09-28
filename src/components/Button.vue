<script lang="ts">
import { onMounted } from "vue";

export default {
  props: {
    title: String,
  },
  setup(props) {
    props.title;

    onMounted(() => {
      console.log("Renderizou", props.title);
    });
  },
};
</script>

<template>
  <button type="button" className="bg-primary p-2 text-zinc-50 rounded-md">
    {{ title }}
  </button>
</template>
