This angular project is manually created.

2 Type of configuration are present here.
   1. webpack config for module base application - using JIT compiler - use webpack.config.js
   2. webpack config for Standalone application - using AOT compiler  - use webpack-standalone.config.js

To start server for module base application just run command
   1. npm start

To start server for standalone application 
   replace value of build command with  "build": "webpack --config webpack.config.js" in package json script section. and then run npm start.
    ex: "build:  "build": "webpack --config webpack.config.js"
