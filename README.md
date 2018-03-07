# Vue.js Components Wrapper Example

This project is a simple example of creating packaging Vue.js components
for use in any HTML.

## Installation
To install the dependencies, run:

    $ npm install

## Sample Components

The components are defined in src/components:
* HelloComponent and Hello2Compoenet are simple message components.
* SimpleCounter demonstrates two-way binding of a scalar.
* SimpleContact demonstrates two-way binding of a object.

The file sampleComponents.js provides the Webpack "entry point" for the component
bundling process. This file imports the component defintions and includes the
code to register the components with the Vue.js runtime.

## Build Component Package

To create the component packages, run:

    $ npm run-script build

The results of the build process is two files and puts these in the dist folder.

The file sampleComponents.js wraps the components in a single JavaScript file. 
This JavaScript file will load and register the Vue.js components when loaded
in an HTML page

The file sampleComponentsAnguler.js provides AngularJS (Angular 1) wrappers for
the components in a module named "componentWrappers".
This file wraps each Vue.js component as an AngularJs "element" directive.
The directives allow the components to be used as "elements" within any AngularJs
application that includes the modules as a dependency. 

## Using "packaged" Vue.js Components in an HTML page

The index.html page uses the  sample components by importing Vue.js and
sampleComponents.js.
You can open the file in a browser.
The application reports events to the console log.

Notices that the page contains multiple instances of some components bound to separate
data.

## Using Vue.js Components in AngularJs Applications

The angular.html page uses the sample components by importing Vue.js, Angular,
sampleComponents.js, and sampleCompoenntsAngular.js
You can open the file in a browser.
The application reports events to the console log.

Notices that the page contains multiple instances of some components bound to separate
data.
