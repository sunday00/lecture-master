git init

git remote add origin https://github.com/sunday00/lecture-master.git

git checkout -b 'svelte-tuto'

git aa

git c "re upload"

git push -u origin 'svelte-tuto'

* * *

git clone -b js-svelte-tuto --single-branch https://github.com/sunday00/lecture-master.git

* * *

https://dev.to/alexparra/basic-svelte-app-with-parcel-30i5

npm init -y

npm i parcel parcel-bundler svelte parcel-plugin-svelte -D

touch .gitignore

echo "node_modules" >> ./.gitignore
echo "dist" >> ./.gitignore
echo ".cache" >> ./.gitignore
echo ".env" >> ./.gitignore

mkdir src

./src/index.html
```
<script src="./index.js"></script>
```

./src/index.js
```
import App from './components/App.svelte';

export default new App({
  target: document.body,
  props: {
    name: 'Svelte',
  },
});
```

./src/components/App.svelte
```
<script>
  export let name;
</script>

<style>
  
</style>

// html tags ex
<h1>Hello {name}!</h1>
```

./package.json
```
...

"scripts": {
    "dev": "parcel src/index.html",
    "build": "parcel build src/index.html"
}

...
```

$shell
```
npm run dev
```
