<template>
  <div class="flex w-full flex-row flex-nowrap">
    <job-filters-side-bar />
    <job-listings />
  </div>
</template>

<script>
import JobFiltersSideBar from "@/components/JobResults/JobFiltersSidebar/JobFiltersSideBar.vue";
import JobListings from "@/components/JobResults/JobListings.vue";

export default {
  name: "JobResultsView",
  components: {
    JobFiltersSideBar,
    JobListings,
  },
};
</script>
