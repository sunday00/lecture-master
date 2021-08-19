<template>
  <div class="login">
    <form class="form" @submit.prevent="login">
      <h1>Login</h1>
      
      <label for="username">username</label>
      <input v-model="username" type="text" name="username" class="input">
      <label for="password">password</label>
      <input v-model="password" type="text" name="password" class="input">

      <button class="btn">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      username: '',
      password: ''
    }
  },
  methods:{
    login(){
      // this is placeholder. should be api logged.
      window.user = this.username
      //

      const redirectPath = this.$route.query.redirect || '/protected'

      this.$router.push(redirectPath)
    }
  }
}
</script>