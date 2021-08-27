<template>
  <div>
    <div>My nav bar</div>
    <Nuxt />
    <div>My footer</div>
  </div>
</template>

<style lang="scss">
  :root {
    --navy: #112F41;
    --teal: #068587;
    --teal-light: #4FB99F;
    --yellow: #F2B134;
    --main-bg-color: coral;
  }

  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    padding: 1rem;
    background: var(--navy);
    color: white;
  }

  a {
    color: var(--teal-light);
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover{
      color: var(--teal);
    }
  }

  h1,h2,h3,h4 {
    color: var(--yellow);
  }

  .button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;

    &:hover{
      color: #fff;
      background-color: #3b8070;
    }
  }

  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;

    &:hover {
      color: #fff;
      background-color: #35495e;
    }
  }
</style>
