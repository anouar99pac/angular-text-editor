# AngularTextEditor

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.0.

So, perhaps did you hear about CKeditor.

First, you need to install :

yarn add ng2-ckeditor --dev

Or;

npm install ng2-ckeditor --save-dev


Add source code script in your index.html :

<script src="https://cdn.ckeditor.com/4.5.11/full/ckeditor.js"></script>

Then add a CKEditorModule module.
Finaly some configuration in the component.

Demo: 

yarn start

![screenshot from 2017-08-11 01-09-15](https://user-images.githubusercontent.com/12816334/29196003-061984c2-7e32-11e7-8f74-09a862b1d068.png)


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
