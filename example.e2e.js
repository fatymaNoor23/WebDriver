const LoginPage = require("./pageobjects/login.page");
const securePage = require("./pageobjects/secure.page");
const SecurePage = require("./pageobjects/secure.page");

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await LoginPage.open();

    await LoginPage.login("tomsmith", "SuperSecretPassword!");
    // await expect(SecurePage.flashAlert).toBeExisting();
    await assert.equal(securePage.flashAlert.isExisting(), true);

    await expect(SecurePage.flashAlert).toHaveTextContaining(
      "You logged into a secure area!"
    );
  });
});
const LoginPage = require("./pageobjects/login.page");
const SecurePage = require("./pageobjects/secure.page");

describe("My Login application", () => {
  it("should login with valid credentials", () => {
    LoginPage.open();

    LoginPage.login("tomsmith", "SuperSecretPassword!");
    expect(SecurePage.flashAlert).toBeExisting();
    expect(SecurePage.flashAlert).toHaveTextContaining(
      "You logged into a secure area!"
    );
  });

  it("should logout and verify logout alert message", () => {
    SecurePage.btnLogout.click();

    expect(SecurePage.flashAlert).toHaveTextContaining(
      "You loggedin to the secure area!"
    );
  });
});
