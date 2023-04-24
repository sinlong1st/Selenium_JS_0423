const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function firstTest() {
  // Launch the driver
  let driver = await new Builder().forBrowser("chrome").build();

  // Navigate to the application
  await driver.get("https://google.com");

  // Actions:
  await driver
    .findElement(By.name("q"))
    .sendKeys("Hello Tai Nguyen", Key.RETURN);
  setInterval(function () {
    driver.quit();
  }, 50000);
  // Close the browser
}

firstTest();
