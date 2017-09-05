# javascript-library-template
A Javascript library template project [UMD](https://github.com/umdjs/umd) ([CommonJS](http://wiki.commonjs.org/wiki/CommonJS), [AMD](http://requirejs.org/docs/start.html), [global variable](https://developer.mozilla.org/en/docs/Web/HTML/Element/script)) ready.


# Gettig started
* Clone this repo;
* copy cloned content to your project's root folder;
* in package.json, change the value of:
  * [main](https://docs.npmjs.com/files/package.json#main) property to your library distributable file name. Should be equal to webpack.config.js' output.filename property (more below);
  * [module](https://github.com/rollup/rollup/wiki/pkg.module) property to your project entry source file.

* in webpack.config.js:
  * change the value of [output.library](https://webpack.js.org/guides/author-libraries/#add-librarytarget) to your library exported object name;
  * change de value of [output.filename](https://webpack.js.org/configuration/output/#output-filename) to your library file name;
  * add needed [externals](https://webpack.js.org/guides/author-libraries/#add-externals).

# Examples
## Lib side
Considering a package.json with properties:
```json
{
    ...
    "main": "dist/example-lib.js",
    "module": "src/main.js"
}
```
A webpack.config.js with properties:
```javascript
    ...
    output: {
        ...
        library: "exampleLib",
        filename: "example-lib.js"
    }
```
And a source code written like this:
```javascript
export {fnOne, fnTwo} ;

function fnOne() {
    return "fnOne";
}

function fnTwo() {
    return "fnTwo";
}
```
## Client side 

It would be possible to import it via script tag:
```html
<html>
<head>
...
</head>
<body>
...
<script src="example-lib.js"></script>
</body>
</html>
```
```javascript
// script tag import generates a global object property
// the property exampleLib comes from webpack.config.js' output.library property
exampleLib.fnTwo();
```
It would also be possible to import it via CommonJs:
```
npm i --save library-name
```
```javascript
//the name "example-lib" comes from webpack.config.js' output.filename property
const exampleLib = require("example-lib");
exampleLib.fnOne();
exampleLib.fnTwo();
```
And, finally, as an AMD module:
```javascript
//the name "example-lib" comes also from webpack.config.js' output.filename property
requirejs(["example-lib.js"], function(exampleLib) {
    exampleLib.fnOne();
    exampleLib.fnTwo();
});
```
# License
[MIT](http://opensource.org/licenses/MIT)