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
import {ref} from 'vue'
import {useRoute, useRouter} from 'vue-router'

export default {
  setup(){
    const username = ref('')
    const password = ref('')

    const router = useRouter()
    const route = useRoute()

    const login = () => {
      // this is placeholder. should be api logged.
      window.user = username.value
      //

      const redirectPath = route.query.redirect || '/protected'

      router.push(redirectPath)
    }

    return {username, password, login}
  },
}
</script>