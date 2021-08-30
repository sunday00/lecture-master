<template>
  <section
    class="dt w-100 tc bg-dark-gray white cover"
    style="background:url(http://mrmrs.github.io/photos/u/009.jpg) no-repeat center;"
  >
    <div class="dtc v-mid">
      <header class="white-70">
        <h2 class="f6 fw1 ttu tracked mb2 lh-title">
          HELLO WORLD
        </h2>
        <h3 class="f6 fw1 lh-title">
          NUXT VUE TACHYONS
        </h3>
      </header>
      <h1 class="f1 f-headline-l fw1 i white-60">
        APPPP
      </h1>
      <blockquote class="ph0 mh0 measure f4 lh-copy center">
        <p class="fw1 white-70">
          NOW LEARNING...
        </p>
        <cite class="f6 ttu tracked fs-normal">sunday00</cite>
      </blockquote>
      <div class="links">
        <nuxt-link
          v-for="post in posts"
          :key="post.id"
          :to="{name: 'posts-id', params:{id: post.id}}"
          class="no-underline near-white bg-animate bg-near-black hover-bg-gray hover-near-black inline-flex items-center ma2 tc br2 pa2"
        >
          {{ post.title }}
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    posts () {
      return this.$store.state.posts.all
    },
  },
}
</script>

<style lang="scss">
  .cover {
    height: calc(100vh - 8rem);
  }
</style>
