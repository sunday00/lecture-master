<h1>Hello {name}!</h1>
<img {src} alt="adorable avatar" style="border-radius:50%;">
<Child></Child>
{someTag}
{@html someTag}


<script>
  let name = 'banana';
  let src = 'https://api.adorable.io/avatars/100/abott@adorable.io.png';

  import Child from './Child'

  let someTag = "<h3>This is html tag</h3>";

</script>

<style>

</style>