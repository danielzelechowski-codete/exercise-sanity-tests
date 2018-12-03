# Sanity tests for AngularJS todoMVC
------------
[![Build Status](https://travis-ci.org/danielzelechowski-codete/exercise-sanity-tests.svg?branch=master)](https://travis-ci.org/danielzelechowski-codete/exercise-sanity-tests)

An exercise project with instructions on how to run.  
The project contains sanity tests for the following scenarios:

* Editing can change the text of todo items.
* Todo items can be removed separately.
* Uncompleted todo items should not be visible in the completed filter.

Test scenarios and page objects can be found in:

* [Tests](https://github.com/danielzelechowski-codete/exercise-sanity-tests/tree/master/src/tests) for implementation.
* [Page Object Model](https://github.com/danielzelechowski-codete/exercise-sanity-tests/tree/master/src/pages).

## Getting Started
Following those instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
### Prerequisites

* [NodeJs](https://nodejs.org/en/ "NodeJs") runtime engine
* [Chrome](https://www.google.com/chrome/ "Chrome") and [FireFox](https://www.mozilla.org/en-US/ "FireFox")  for tests execution and display allure reporter
* [Java](http://www.oracle.com/technetwork/java/index.html "Java") for selenium grid and report generation 

In order to run tests locally you should run Selenium Standalone Server with ChromeDriver.

* [Selenium Standalone Server](https://www.seleniumhq.org/download/ "Selenium Standalone Server")
* [ChromeDriver](http://chromedriver.chromium.org/downloads/ "ChromeDriver")

Unzip the ChromeDriver file and run the following command:

> java -jar selenium-server-standalone-[version].jar
------------
**Install packages:**
> npm install

**Start Selenium grid:** *(start grid in separate terminal)*
> npm run grid

**Execute test suite:** *(npm test)
> npm run suite todoMvcTestSuite

**Execute single test:**
> npm run spec ./lib/tests/TodoAngularTest.js

**Show report:** *require installed java and firefox*
> npm run report


**Additional commands can be found in the package.json**
## Code Structure

### Tests
Test located under **/test** folder and file names ends with `Test.ts`
Suggestion: Use only 1 test, to keep it more readable and in case of failure we'll rerun only one test and not all tests in class(Mocha limitation)

##### Naming convention in tests:
Describe should hold name of the tests suite and it will be represented in report as one suite, and each test should hold file name of the test class
**Example** where `TodoAngularTest` is a suite name and test file name is `TodoAngularTest.ts`
 ```javascript
   describe('TodoAngularTest', () => {
        it('Check URL', () => {
            //some test implementation
        });
    });
```
### Pages
Page Object Model is used for tests and all page classes located under /pages folder. Each class represent an UI object/functionality.
For example: TodoAngularPage.ts holds main functionality of the page, while Button.ts class holds basic functionality of the button component

### Utils
TestHelperUtils with common describe method that suites all the tests.

### Report example
[Click](https://cloudinary.github.io/wdio-allure-ts-example/allure-report/index.html "Click")  for live report example

### Related project
[wdio-allure-ts](https://github.com/cloudinary/wdio-allure-ts)