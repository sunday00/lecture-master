<div>
  <h1>Hello {name}!</h1>
  <img {src} alt="adorable avatar" style="border-radius:50%;">
  <Child></Child>
  {someTag}
  {@html someTag}
</div>
<div>
  <button on:click={toggleBtnColor} class="{btnColor}">{btnColor}</button>

  <br>

  <button on:click={increaseRef}>ref++</button>
  {ref} : {double}

  <br>

  <button on:click={increaseRef2}>ref++</button>
  {ref2} : {double2}

  <br><br>

<button on:click={pushNumToArr}>+</button>
<ul>
  {#each arr as ar}
    <li>{ar}</li>
  {/each}
</ul>


</div>

<script>
  let name = 'banana';
  let src = 'https://api.adorable.io/avatars/100/abott@adorable.io.png';

  import Child from './Child'

  let someTag = "<h3>This is html tag</h3>";

  let btnColor = 'red';
  function toggleBtnColor () {
    btnColor = btnColor == 'red' ? 'blue' : 'red';
  }

  let ref = 0;
  $: double = ref * 2;
  function increaseRef () {
    ref++;
  }

  let ref2 = 0;
  let double2 = ref2 * 2;
  function increaseRef2 () {
    ref2++;
    double2 = ref2 * 2;
  }
  
  $: console.log(`btn color = ${btnColor}`);

  $: if ( ref2 % 2 ) {
    console.log(ref2);
  }

  let arr = [1,2,3];
  function pushNumToArr () {
    arr.push(arr.length+1);
    console.log(arr);
    // still not work. need blow

    arr = arr;
  }

</script>

<style lang="sass">
  button.red {
    background-color: tomato;
  }

  button.blue {
    background-color: cornflowerblue;
  }
</style>