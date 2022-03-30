<template>
  <div>
    <!-- <input type="checkbox" :checked=checked /> -->
    <!-- <input type="checkbox" v-model="checked" /> -->
    <input type="checkbox" :value="value" @click="toggleCheck"/>
  </div>
</template>

<script>
export default {
  props: [ "value" ],
  methods: {
    toggleCheck() {
      this.$emit('input', !this.value);
    },
  },
}
</script>

<style>

</style>
