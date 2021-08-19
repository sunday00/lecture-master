<template>
  <div>
    <h1>Invoices</h1>
  </div>
</template>

<script>
import{ onBeforeRouteLeave } from 'vue-router'

export default {
  setup(){
    onBeforeRouteLeave((to, from) => {
      return window.confirm('sure?')
    })
  }
}
</script>