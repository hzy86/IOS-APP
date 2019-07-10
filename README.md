### Context

This project was the response of a homework assigned by Wyze during my interview, where they asked me to research and demo a way to automate IOS app testing. The following sections were submitted as demo docuemntation.

[Demo Video Link](https://drive.google.com/open?id=1UNHGWH8mbTO03zPc8yVyQMGqoCeWB6hA)

### Understanding

    Appium is basically a HTTP server that provides API for testing,
    it communicates with WebDriver protocol 

### Codes in this demo
    - Xcode project for the demo app
        - build: iphone X simulator
        - version: 10.0
        - target os version: 12.2

    - Node.js for the Appium Script
        - tools
            - mocha: a testing framework for better readability
            - chai: an assertion library that works well with mocha
            - webdriverio: a Appium client that allows us to "speak in" WebDriver protocol
                           with clear wrapper functions

### Things to demonstrate in this screen recording

    - this note to help you understand
    - the test simulation & results report
        - start the appium server in a terminal
        - run the test script in another terminal
    - the Xcode setup
    - the NodeJS setup
