<template>
  <slot 
    name="title"
  >
    <h2>users</h2>
  </slot>
  <section>
    <ul 
      v-if="state === 'loaded'"
      class="userlist" 
    >
      <li
        v-for="item in data.results" 
        :key="item.email"
      >
        <div>
          <img
            width="48"
            height="48"
            :src="item.picture.large" 
            :alt="item.name.first + ' ' + item.name.last"
          >
        </div>
        <div>
          <div>{{ item.name.first }}</div>
          <slot />
          <div>{{ additionalInfo(item) }}</div>
        </div>
      </li>
    </ul>
    <slot 
      v-if="state === 'loading'"
      name="loading"
    >
      loading...
    </slot>
    <slot
      v-if="state === 'failed'" 
      name="error"
    >
      Oops...  
    </slot>
  </section>
</template>

<script>
const states = {
  idle    : 'idle',
  loading : 'loading',
  loaded  : 'loaded',
  failed  : 'failed',
}

export default {
    props:{
      additionalInfo : {
        type: Function,
        default: () => {}
      },

    },
    data(){
      return {
        state: 'idle',
        data: undefined,
        error: undefined,
        states
      }
    },
    mounted(){
      this.load();
    },
    methods: {
      async load(){
        this.state = 'loading';
        this.error = undefined;
        this.data = undefined;

        try{
          const response = await fetch('https://randomuser.me/api/?results=5');
          const json = await response.json();
          this.state = 'loaded';
          this.data = json;
          return response;
        } catch (err){
          this.state = 'failed';
          this.error = err;
          return err;
        }
      }
    },
}
</script>

<style lang="scss" scoped>
  section li {
    margin-bottom: 1rem;
  }
  img{
    border-radius: 50%;
  }
</style>