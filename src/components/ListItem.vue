<template>
  <ul>
    <li v-for="item in list" :key="item.id">
      <div class="points">
        {{ item.points }}
      </div>
      <template v-if="name === 'ask'">
        <router-link :to="`/ask/item/${item.id}`">{{ item.title }}</router-link>
      </template>
      <template v-else>
        <a :href="item.url" target="_blank">{{ item.title }}</a>
      </template>
      <small>
        <a v-if="name === 'jobs'" :href="item.url" target="_blank">
          {{ item.domain }}
        </a>
        <router-link v-else :to="`/user/${item.user}`">
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
    // this.$store.dispatch(`FETCH_${this.name.toUpperCase()}`);
  },
  computed: {
    list() {
      // return this.$store.getters[this.name];
      return this.$store.getters.list;
    },
  },
};
</script>

<style scoped lang="scss">

</style>
