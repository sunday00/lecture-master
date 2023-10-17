```shell
mkdir project
cd project
npm init -y
npm i typescript
npx tsc --init --rootDir ./src --outDir ./dist --esModuleInterop --module commonjs --strict true --allowJS true --checkJS true
mkdir src dist
touch index.ts

npx tsc --build
node dist/index.js 
```