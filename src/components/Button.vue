<script lang="ts">
import { toRefs } from "vue";

export default {
  props: {
    title: String,
  },
  setup(props) {
    const { title } = toRefs(props);

    return {
      title,
    };
  },
};
</script>

<template>
  <button type="button" className="bg-primary p-2 text-zinc-50 rounded-md">
    {{ title }}
  </button>
</template>
