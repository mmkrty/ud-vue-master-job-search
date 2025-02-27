<template>
  <div>
    <job-filters-side-bar />
  </div>
</template>

<script>
import JobFiltersSideBar from "@/components/JobResults/JobFiltersSidebar/JobFiltersSideBar.vue";

export default {
  name: "JobResultsView",
  components: {
    JobFiltersSideBar,
  },
};
</script>
