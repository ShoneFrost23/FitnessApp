# MyFitnessApp

## Author Steps

### Get the dependencies for working on angular
Inside the project directory on cmd
To work on development webserver localhost:4200 <br/>
npm i <br/>
npm start <br/>

### Get the electron dependencies
To view it in electron app refer https://fireship.io/lessons/desktop-apps-with-electron-and-angular/ <br/>
npm install electron --save-dev <br/>
npm install electron-packager -g <br/>
npm install electron-packager --save-dev <br/>

### To View the electron App  
npm run electron-build 

### Packaging as executable 
!!Run cmd as administrator for packaging  If developing on windows some symlinks error for packaging on electron <br/>
To package it for mac windows use --overwrite flag if it asks <br/> 
electron-packager . --platform=win32 <br/>
electron-packager . --platform=darwin <br/>
for linux just see the documentation for electron packager and figure it out <br/>

### Moving the files 
you cant COPY/PASTE packaged mac app <br/>
but you can CUT/PASTE it <br/>
Also do compression in 7 zip. normal zip did not work <br/> 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
