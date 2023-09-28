<script lang="ts">
export default {
  props: {
    title: String,
  },
  setup(props) {
    props.title;
  },
};
</script>

<template>
  <button type="button" className="bg-primary p-2 text-zinc-50 rounded-md">
    {{ title }}
  </button>
</template>
