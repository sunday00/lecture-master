<h1>Data bind 1</h1>

<div>
    <input bind:value="{greet}">
    <p>{greet}</p>
</div>

<script>
    // let greet;
    let greet = 'default';
</script>