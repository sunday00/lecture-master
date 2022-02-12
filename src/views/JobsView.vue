<template>
  <ul>
    <li v-for="item in jobs" :key="item.id">{{ item }}</li>
  </ul>
</template>

<script>
import { fetchJobs } from '@a/index';

export default {
  data() {
    return {
      jobs: [],
    };
  },
  created() {
    fetchJobs().then((res) => {
      this.jobs = res.data;
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
  },
};
</script>

<style>

</style>
