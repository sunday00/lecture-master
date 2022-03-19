<template>
  <list-item name="news" />
</template>

<script>
import ListItem from '@c/ListItem.vue';
import bus from '@u/bus.ts';

export default {
  components: {
    ListItem,
  },
  created() {
    bus.$emit('start:spinner');
    this.$store.dispatch('FETCH_NEWS')
      .then(() => {
        bus.$emit('end:spinner');
      });
  },
};
</script>

<style scoped lang="scss">

</style>
