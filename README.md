# Didomi Challenge
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9

## Files and folders structure

- `backend/` - contains a json file to mock the Http requests
- `src/` - main application folder, contains all the source code
- `src/core` - this module is for classes used by all modules, such as route guards, HTTP interceptors, and application level services (logging, error handlers),
- `src/layout` - a container of components which are declared in the AppModule. The directory contains page-level components of content such as a common footer, navigation, and header.
- `src/modules` - The modules directory contains a collection of modules which are each independent of each other.
- `src/modules/consents` - contains all components, services and entities related to the consents feature 
- `src/modules/consents/components` - contains all the presentation components for the consents feature
- `src/modules/consents/data` - contains all the entities and services for the consents feature
- `src/modules/consents/pages` - contains all the container components for the consents feature
- `src/shared` - The shared module contains classes and resources which are used in more than one dynamically loaded module.
- `src/environments` - contains different env config files
- `src/index.html` - starting index.html file

## Development server
1 - run the mock backend: `npm run run-server`

2 - then run the ng app (dev mode) `npm start`

## Running unit tests
run `npm run test`

Unit tests executed using [Karma](https://karma-runner.github.io).

## Run Linting
run `npm run lint`

[codelyzer](http://codelyzer.com/) is used for linting
