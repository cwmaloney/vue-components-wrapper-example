# Vue.js Components Packager

This project is a simple example of creating packaging Vue.js components for use in any HTML.

## Installation
Install the dependencies

    $ npm install

## Build Component Package

Create the component packages.

    $ npm run-script build

This will create a JavaScript file in the dist folder that wraps the component
in a Vue.js componenet.  When loaded by the browser, the JavaScript file will
register the Vue.js componenets

## Open the demo page

The index.html page uses the two sample components by referenceing the JavaScript file that wraps the Vue.js components created by the build step and stored in the dist folder.  You can open the page in a browswer after you have completed the build step.


