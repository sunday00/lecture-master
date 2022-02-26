<template>
  <ul>
    <li v-for="item in this.$store.state.jobs" :key="item.id">
      <router-link :to="`/jobs/${ item.id }`">
        {{ item.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>

export default {
  data() {
    return {
      jobs: [],
    };
  },
  created() {
    this.$store.dispatch('FETCH_JOBS');
  },
};
</script>

<style>

</style>
