console.log("REFL - interactive line executor Like CLI")

console.log( process.version, process.release, process.argv  )

const fs = require('fs')

fs.mkdir('foo', {
  recursive: true
}, err => {
  console.log('foo done!');
  if(err) throw err
})
console.log('foo done, uncertain')

!fs.existsSync('bar') && fs.mkdirSync('bar');
console.log('bar done definitely');

const scaffold_done = (name) => { console.log(`${name} is done`) }

const nFolderName = process.argv[2] || 'Projects'
fs.mkdir(nFolderName, (err) => {
  console.log('done folder')
  fs.writeFile(`${nFolderName}/index.html`, `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="https://unpkg.com/wingcss"/>
    <link rel="stylesheet" href="app.css" />
  </head>
  <body>
    
  </body>
  <script src="app.js"></script>
  </html>`, () => scaffold_done('html'))
  fs.writeFile(`${nFolderName}/app.js`, '', () => scaffold_done('js'))
  fs.writeFile(`${nFolderName}/app.css`, 'body {\n\n}', () => scaffold_done('css'))
})


