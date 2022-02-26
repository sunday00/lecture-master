<template>
  <ul>
    <li v-for="item in this.$store.state.news" :key="item.id">
      <router-link :to="`/news/${ item.id }`">
        {{ item.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>

export default {
  data() {
    return {
      asks: [],
    };
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
  },
};
</script>

<style>

</style>
