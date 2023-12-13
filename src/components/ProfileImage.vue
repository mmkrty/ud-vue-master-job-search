<template>
  <img
    class="h-8 w-8 cursor-pointer rounded-3xl object-contain shadow-md hover:shadow-blue"
    alt="profile image"
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
