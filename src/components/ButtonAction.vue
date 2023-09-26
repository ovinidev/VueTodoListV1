<script lang="ts">
export default {
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
  props: {
    title: String,
  },
};
</script>

<template>
  <button className="bg-primary p-2 text-zinc-50 rounded-md">
    {{ title }}
  </button>
</template>
