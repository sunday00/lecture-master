<template>
  <ul>
    <li v-for="item in list" :key="item.id">
      <div class="points">
        {{ item.points }}
      </div>
      <a :href="item.url" target="_blank">{{ item.title }}</a>
      <small>
        <router-link :to="`/user/${item.user}`">
          {{ item.user }}
        </router-link>
      </small>
      <small>{{ item.time_ago }}</small>
    </li>
  </ul>
</template>

<script>
export default {
  props: [
    'name',
  ],
  data() {
    return {

    };
  },
  created() {
    this.$store.dispatch(`FETCH_${this.name.toUpperCase()}`);
  },
  computed: {
    list() {
      return this.$store.getters[this.name];
    },
  },
};
</script>

<style scoped lang="scss">

</style>
