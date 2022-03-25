<template>
  <section>
    <p class="user-container">
      <template v-if="this.$route.name === 'user'">
        <i class="fa-solid fa-user"></i>
        {{ user.id }}
      </template>
      <router-link :to="`/user/${user.id}`" v-else>
        <i class="fa-solid fa-user"></i>
        {{ user.id }}
      </router-link>
    </p>
    <p>{{ user.created }}</p>
    <p>{{ user.karma }}</p>
    <div v-show="this.$route.name === 'user'" v-html="user.about || ''"></div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      user: 'user',
    }),
  },
};
</script>
