# NPM in a Chrome App

using creationix's awesome commonjs style, cached file module loader.

## Just a basic prototype for now - come back later for more

## Known Issues:

* the tar parser (or gzip lib) I'm using seems to be a flakey

## TODO

* need to switch to using chrisdickinsons awesome inflate js module
* actually use chrome-app-module-loader for loading down-loaded js modules in
  scripts elements.
* add parsing of package.json files/objects
* implement publishing to npm registry
* use js-git to access from git repos 
