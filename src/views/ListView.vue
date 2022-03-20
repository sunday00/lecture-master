<template>
  <div>
    <list-item :name="this.$route.name" />
  </div>
</template>

<script>
import ListItem from '@c/ListItem.vue';
import bus from '@u/bus';

export default {
  components: {
    ListItem,
  },
  created() {
    bus.$emit('start:spinner');
    this.$store.dispatch('FETCH_LIST', this.$route.name)
      .then(() => {
        bus.$emit('end:spinner');
      });
  },
};
</script>

<style>

</style>
