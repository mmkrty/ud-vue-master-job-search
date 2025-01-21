<template>
  <h1 class="text-6xl font-bold">Job Results page</h1>
  <h2>{{ experiment }}</h2>
</template>

<script>
export default {
  name: "JobResultsView",
  computed: {
    experiment() {
      console.log(this.$router);
      return "experiment";
    },
  },
};
</script>
