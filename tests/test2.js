const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function test2() {
  // Launch the driver
  let driver = await new Builder().forBrowser("chrome").build();

  // Navigate to the application
  await driver.get("https://github.com/login");

  // Grab an element from the page
  //
  // Display the title
  const title = await driver.getTitle();
  console.log(title);

  //  check the title
  if ((await driver.getTitle()) === "Sign in to GitHub · GitHub") {
    console.log("Test 2 succeed");
  } else {
    console.log("Test case failed");
    return;
  }
  // Input username and password
  await driver.findElement(By.name("login")).sendKeys("sinlong1st");
  await driver.findElement(By.name("password")).sendKeys("123456", Key.RETURN); //input wrong pw
  if (
    await driver
      .findElement(By.className("flash-close js-flash-close"))
      .isDisplayed() // The gitub error shows up cause we input wrong pw
  ) {
    console.log("Step 2 of the test succeed!");
  }

  // Set interval and Close the browser
  setInterval(function () {
    driver.quit();
  }, 50000);
}

test2();
