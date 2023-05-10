const internetPage = require("../pageobjects/internet.page");

describe("Interacting with Elements", async function () {
  it("Get text for Element", async () => {
    await browser.url("./");
    let text = $("#page-footer").getText();
    let text1 = $("//*[@id='page-footer']").getText();
    // await console.log(text);
    // await console.log(text1);
    await internetPage.getLiText();
  });
});
