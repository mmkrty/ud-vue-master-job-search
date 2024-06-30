<template>
  <main>
    <section class="flex h-screen flex-col pb-20 pt-10">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1"></div>

        <div class="col-start-20 col-span-5">
          <the-headline />
          <job-search-form />
        </div>

        <div class="col-span-5 col-start-7"></div>

        <div class="col-span-1 col-start-12"></div>
      </div>
    </section>
  </main>
</template>

<script>
import TheHeadline from "./TheHeadLine.vue";
import JobSearchForm from "./JobSearchFrom.vue";

export default {
  name: "TheHero",
  components: {
    TheHeadline,
    JobSearchForm,
  },
};
</script>
