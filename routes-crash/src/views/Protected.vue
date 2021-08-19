<template>
  <div>
    <h1>Protected</h1>    

    now {{ username }} is logged.

    <p class="btns">
      <a @click="logout" class="btn">Logout</a>
      <router-link :to="{name: 'invoices'}">
        <botton class="btn">Invoices</botton>
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      username: window.user
    }
  },
  methods: {
    logout(){
      window.user = null
      this.$router.push({name: 'Home'})
    }
  }
}
</script>

<style lang="scss">
  .btn{
    margin-right: 1rem;
  }
</style>