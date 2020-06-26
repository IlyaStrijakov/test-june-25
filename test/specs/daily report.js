const login = require("./login");
describe('EDIT PROFILE', () => {
    before(() => {
        login();
    })
    it('Check size t-short ', function () {
        $("//select[@name='tShirtSize']").selectByVisibleText('Men/Unisex - XL');
        browser.pause(2000);
    });
}) 