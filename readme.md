# quilk-public-example-3rd-party-module

If you are here reading this then you could well be about to embark upon the creation of your own quilk module for the quilk module runner.

This module does very little, but it does demo the general required structure of a module.

Landed here and this makes no sense to you? Click here for a clearer picture: https://www.npmjs.com/package/quilk#custom-modules

**TIP**: The runner reads the package.json of the 3rd party module is it to run... it is looking for the `main` section... ie the kick off file for the module. Don't forget to enter one in yours, see the package.json file in this module for an example (note the `"main": "index.js",` in the package.json and the index.js file).