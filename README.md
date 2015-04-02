# Testing MEAN Applications

## Mocha

A testing framework for JavaScript. Runs in the browser and in node.js.
http://mochajs.org/

## Chai

An assertion library for JavaScript. Runs in the browser and in node.js.
Works with any testing framework. I like to use it with Mocha. http://chaijs.com/

- BDD or TDD style assertions (Should, Expect, Assert)
- I prefer BDD. Feels more readable.

## Karma

A test runner for the browser. http://karma-runner.github.io/

- Works with Mocha, but also Jasmine and others
- Works with popular CI tools. Travis CI, Jenkins, Circle CI etc.
- Can you PhantomJS, Chrome, Firefox, other devices

## Gulp

Streaming build system for node.js http://gulpjs.com/

- Binds it all together
- Use npm packages to integrate other frameworks (Mocha, Chai, Karma)

## Taking it a step further

### Istanbul https://gotwarlost.github.io/istanbul/

Code coverage tool for JavaScript

- Karma integrates with it http://karma-runner.github.io/0.8/config/coverage.html
- Works with node.js

### Coveralls https://coveralls.io/

- Easily see how much of your code has test coverage
- Do we need 100% coverage?

### Sinon http://sinonjs.org/

Spies, stubs, mocks

### Protractor http://angular.github.io/protractor

End to end testing for your Angular apps
