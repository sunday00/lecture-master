<header>
<ul class="flex border-b">
  <li class="-mb-px mr-1">
    <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="/binding" use:link use:active>Binding</a>
  </li>
  <li class="mr-1">
    <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="/binding2" use:link use:active>Binding2</a>
  </li>
  <li class="mr-1">
    <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="/lifecycle" use:link use:active>LifeCycle</a>
  </li>
  <li class="mr-1">
    <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="/tick" use:link use:active>Tick</a>
  </li>
</ul>
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
  header li {
    margin-bottom: 20px;
    margin-top: 20px;
  }
</style>