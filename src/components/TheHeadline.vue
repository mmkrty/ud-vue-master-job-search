<template>
  <section>
    <h1>Build for everyone</h1>
    <h2>Find your next job at Hao Careers</h2>
  </section>
</template>

<script>
export default {
  name: "TheHeadline",
  data() {
    return {
      sample: "This is a sample",
    };
  },
  created() {
    console.log("TheHeadline created, look: ", this.sample);
  },
};
</script>
