# Grunt Template

A template with grunt.

`npm run build` => concatenates all the js files in source to dist/index.js then babel transpiles and minifies dist/index.js. Keep in mind, concat will concatenate the files in alphabetical order so do consider the naming the of your files. Also keep in mind since there is no bundler, put script tags for the libraries you use in the dist/index.html unless you want to configure a bundler.

`npm run dev` => runs build then runs a watcher on which on any change in js files in src which rebuild and start an express server on port 5000. So while the build and server are triggered on save, you still need to refresh the browser to see changes.
