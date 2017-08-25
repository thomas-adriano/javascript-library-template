# javascript-library-template
A Javascript library template project UMD (CommonJS, AMD, global variable) ready.


# Gettig started
* Clone this repo;
* Copy cloned content to your project's root folder;
* Rename a few properties from the following files:

## package.json
* [main](https://docs.npmjs.com/files/package.json#main) property to your library distributable file name;
* [module](https://github.com/rollup/rollup/wiki/pkg.module) property to your project entry source file.

## webpack.config.js
* [output.library](https://webpack.js.org/guides/author-libraries/#add-librarytarget) to your library exported object name;
* add needed [externals](https://webpack.js.org/guides/author-libraries/#add-externals);

