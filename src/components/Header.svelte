<header>
  <a href="/binding" use:link use:active>Binding</a>
</header>

<script>
  import { link } from 'svelte-spa-router';
  import active from 'svelte-spa-router/active';
</script>

<style>
  :global(header a.active) {
    font-weight: bold;
    text-decoration: underline;
  }
</style>