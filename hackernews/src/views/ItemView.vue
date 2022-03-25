<template>
  <div class="user-div">
    <UserProfile />
    <section>
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
import UserProfile from '@/components/UserProfile.vue';
import bus from '@u/bus.ts';

export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters({
      item: 'item',
    }),
  },
  created() {
    bus.$emit('start:spinner');
    this.$store.dispatch('FETCH_ITEM', this.$route.params.id)
      .then(() => {
        bus.$emit('end:spinner');
      });
  },
};
</script>

<style scoped lang="scss">
  .user-container {
    display: flex;
  }
</style>
