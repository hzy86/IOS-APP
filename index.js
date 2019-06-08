const wdio = require("webdriverio");
const assert = require('chai').assert;

// set capacities
const opts = {
    port: 4723,
    capabilities: {
      platformName: "iOS",
      platformVersion: "12.2",
      deviceName: "iPhone X",
      app: "/Users/hzy86/Library/Developer/Xcode/DerivedData/Automation_Test_Demo-ejuhnwdvbiwnxgfjqcwquiyruszv/Build/Products/Debug-iphonesimulator/Automation_Test_Demo.app"
    }
  };
  
/* A Test Suite */
describe('Testing redirecting between Camera view and Settings view', function() {
    let client;

    // connect to the Appium server before running the first test case
    before(async function () {
    client = await wdio.remote(opts);
    });
    
    // disconnect from the Appium server after running all test cases
    after(async function () {
    await client.deleteSession();
    });

    /* A Test Case */
    it('clicking Camera should redirect to LiveStream view', async function() {
        // find the camara button and click
        let camera = await client.$("~cameraButton");
        await camera.click();

        // assert if redirected to the live stream page
        let liveStreamPage = await client.$("~LiveStream Page");
        await assert.isTrue(await liveStreamPage.isDisplayed());
    });

    /* A Test Case */
    it('clicking Settings button should redirect to Settings view', async function() {
        // find the settings button and click
        let settings = await client.$("~settingsButton");
        await settings.click();

        // assert if redirected to the settings page
        let settingsPage = await client.$("~settingsPage");
        await assert.isTrue(await settingsPage.isDisplayed());
    });
});