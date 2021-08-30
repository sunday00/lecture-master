<template>
  <nav class="flex justify-between bb b--white-10">
    <nuxt-link
      class="link white-70 hover-white no-underline flex items-center pa3"
      :to="{name: 'index'}"
    >
      <svg
        class="dib h1 w1"
        data-icon="grid"
        viewBox="0 0 32 32"
        style="fill:currentcolor"
      >
        <title>Super Normal Icon Mark</title>
        <path d="M2 2 L10 2 L10 10 L2 10z M12 2 L20 2 L20 10 L12 10z M22 2 L30 2 L30 10 L22 10z M2 12 L10 12 L10 20 L2 20z M12 12 L20 12 L20 20 L12 20z M22 12 L30 12 L30 20 L22 20z M2 22 L10 22 L10 30 L2 30z M12 22 L20 22 L20 30 L12 30z M22 22 L30 22 L30 30 L22 30z" />
      </svg>
    </nuxt-link>
    <div class="flex-grow pa3 flex items-center">
      <nuxt-link
        class="f6 link dib white dim mr3 mr4-ns"
        :to="{name: 'posts-id', params:{id:'balut'}}"
      >
        Post
      </nuxt-link>
      <a class="f6 link dib white dim mr3 mr4-ns" href="#0">Sign In</a>
      <a class="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20" href="#0">Sign Up</a>
    </div>
  </nav>
</template>

<style lang="scss">
  .ba {
    border-style: solid;
    border-width: 1px;
  }

  .bb {
    border-bottom-style: solid;
    border-bottom-width: 1px;
  }

  .b--white-20 {
    border-color: rgba(255, 255, 255, .2);
  }

  .b--white-10 {
    border-color: rgba(255, 255, 255, .1);
  }

  .br-pill {
    border-radius: 9999px;
  }

  .dib {
    display: inline-block;
  }

  .flex {
    display: flex;
  }

  .items-center {
    align-items: center;
  }

  .justify-between {
    justify-content: space-between;
  }

  .h1 {
    height: 1rem;
  }

  .link {
    text-decoration: none;
    transition: color .15s ease-in;
  }

  .link:link,
  .link:visited {
    transition: color .15s ease-in;
  }

  .link:hover {
    transition: color .15s ease-in;
  }

  .link:active {
    transition: color .15s ease-in;
  }

  .link:focus {
    transition: color .15s ease-in;
    outline: 1px dotted currentColor;
  }

  .w1 {
    width: 1rem;
  }

  .white-70 {
    color: rgba(255, 255, 255, .7);
  }

  .white {
    color: #fff;
  }

  .hover-black:hover {
    color: #000;
  }

  .hover-black:focus {
    color: #000;
  }

  .hover-white:hover {
    color: #fff;
  }

  .hover-white:focus {
    color: #fff;
  }

  .hover-bg-white:hover {
    background-color: #fff;
  }

  .hover-bg-white:focus {
    background-color: #fff;
  }

  .pa3 {
    padding: 1rem;
  }

  .pv2 {
    padding-top: .5rem;
    padding-bottom: .5rem;
  }

  .ph4 {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .mr3 {
    margin-right: 1rem;
  }

  .no-underline {
    text-decoration: none;
  }

  .f6 {
    font-size: .875rem;
  }

  .dim {
    opacity: 1;
    transition: opacity .15s ease-in;
  }

  .dim:hover,
  .dim:focus {
    opacity: .5;
    transition: opacity .15s ease-in;
  }

  .dim:active {
    opacity: .8;
    transition: opacity .15s ease-out;
  }

  .bg-animate,
  .bg-animate:hover,
  .bg-animate:focus {
    transition: background-color .15s ease-in-out;
  }

  @media screen and (min-width: 30em) {
    .mr4-ns {
      margin-right: 2rem;
    }
  }
</style>
