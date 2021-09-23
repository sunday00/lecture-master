npm run dev

npx node-sass -w resources/scss/* -o resources/css/

npx node-sass -w flex-crash/resources/scss/ -o flex-crash/resources/css/

npx node-sass -w grid-crash/resources/scss/ -o grid-crash/resources/css/

plugin install uniBeautify
setting .vscode/setting.json

[
  ...,

  "files.associations": {
    "**/*.html": "html",
    "**/templates/*.html": "django-html",
    "**/templates/**/*.html": "django-html",
    "**/templates/**/*": "django-txt",
    "**/requirements{/**,*}.{txt,in}": "pip-requirements"
  },
  "emmet.includeLanguages": {
    "django-html": "html"
  },
  "unibeautify.enabled": true,
  "[django-html]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "Glavin001.unibeautify-vscode"
  },

  ...
]

jobs
fg %1


