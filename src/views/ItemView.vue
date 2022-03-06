<template>
  <div>
    <section>
      <p class="user-container">
        <router-link :to="`/user/${item.user}`">
          <i class="fa-solid fa-user"></i>
          {{ item.user }}
        </router-link>
      </p>
      <p>{{ item.id }}</p>
      <h2>{{ item.title }}</h2>
      <p>{{ item.time_ago }}</p>
      <div v-html="item.content" />
    </section>
    <section>

    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      item: 'item',
    }),
  },
  created() {
    this.$store.dispatch('FETCH_ITEM', this.$route.params.id);
  },
};
</script>

<style scoped lang="scss">
  .user-container {
    display: flex;
  }
</style>
