<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item }}</li>
    </ul>
    <button @click="$emit('renew')">renew items</button>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style>

</style>
