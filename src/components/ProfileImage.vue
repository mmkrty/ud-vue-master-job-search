<template>
  <img
    class="hover:shadow-blue h-8 w-8 rounded-3xl object-contain shadow-md"
    :src="imageLink"
  />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink: "../../public/Ruby_logo..png",
    };
  },
};
</script>
