<template>
  <header class="w-full text-sm">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div
        class="border-brand-gray-1 mx-auto flex h-full flex-nowrap border-b border-solid px-8"
      >
        <a :href="url" class="flex h-full items-center text-xl font-semibold">{{
          company
        }}</a>

        <nav class="ml-12 h-full font-semibold">
          <ul class="flex h-full list-none">
            <li class="h-full">
              <a href="/" class="flex h-full items-center py-2.5">Teams</a>
            </li>
            <li class="ml-9 h-full">
              <a href="/" class="flex h-full items-center py-2.5">Location</a>
            </li>

            <li class="ml-9 h-full">
              <a href="/" class="flex h-full items-center py-2.5"
                >Life at Hao Corp</a
              >
            </li>

            <li class="ml-9 h-full">
              <a href="/" class="flex h-full items-center py-2.5"
                >How we hire</a
              >
            </li>

            <li class="ml-9 h-full">
              <a href="/" class="flex h-full items-center py-2.5">Students</a>
            </li>

            <li class="ml-9 h-full">
              <a href="/" class="flex h-full items-center py-2.5">Jobs</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
      company: "Hao Careers",
      url: "https://careers.google.com",
    };
  },
};
</script>
