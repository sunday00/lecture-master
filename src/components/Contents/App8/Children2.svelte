<div class="bg-blue-200" on:mouseenter={enter} on:mouseleave={leave}>
    <slot name="name" {isEnter}></slot>
    <slot name="email" {isEnter}></slot>
    <slot name="greet" {isEnter}></slot>
</div>

<script>
    let isEnter = false;

    function enter () {
        isEnter = true;
    }
    function leave () {
        isEnter = false;
    }
</script>