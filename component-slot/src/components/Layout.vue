<template>
  <div class="layout">
    <header>
      <slot name="header" />
    </header>
    <main>
      <slot />
    </main>
    <aside>
      <slot name="aside">
        aside fall back
      </slot>
    </aside>
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>

<style scoped lang="scss">
  .layout > header,
  .layout > footer {
    background-color: #41b883;
    padding: 1rem;
    color: #fff;
    font-weight: bold;
    font-size: 2rem;
  }
</style>