// const {expect} = require('chai');    // obj expect assert, -> distryktivnoe prisvaevanie, destryktyrizaciya
// babel -> new js to old js with var
// babel -> import if no -> rekvaer
// 1. Open Url
// 2. Input
// 3. Submit
// Before -  pered it inside describe.
// After
//////////////////////////////
//  stage.pasv.us ?
//  HW Test case na registration Page + Tests !!! 20  - 30 - 40??? Smoke test!
//////////////////////////////
//     describe('REGISTRATION PAGE',() => {
//         before(() => {
//             browser.maximizeWindow();
//             browser.url('https://stage.pasv.us/user/register');
//         })
//         it('should Title is correct', function () {
//             const actualText = $('//h1').getText();
//             const expectedText = 'User Register';
//             expect(actualText).eq(expectedText);
//         });
//         it('should Submit Button is not clickable ', function () {
//             const submitButton = $('//button[@type="submit"]');
//             const result = submitButton.isClickable();
//             expect(result).false;
//         });
//         it('should fill out firstName field ', function () {
//             const inputFirstName = $('//input[@name="firstName"]');
//             inputFirstName.setValue('Ilya');
//         });
//         it('should input first name is valid ', function () {
//             const inputFirstName = $('//input[@name="firstName"]');
//             browser.keys('Tab')
//             const result = inputFirstName.getAttribute('class');
//             expect(result).contains('is-valid')
//         });
//         it('should fill out lastName field ', function () {
//             const inputLastName = $('//input[@name="lastName"]');
//             inputLastName.setValue('Strijakov');
//         });
//         it('should input last name is valid ', function () {
//             const inputFirstName = $('//input[@name="lastName"]');
//             browser.keys('Tab')
//             const result = inputFirstName.getAttribute('class');
//             expect(result).contains('is-valid')
//         });
//         it('should fill out lastName field ', function () {
//             const inputLastName = $('//input[@name="email"]');
//             inputLastName.setValue('pasv.qa.student5@gmail.com');
//         });
//         it('should input email is valid ', function () {
//             const inputFirstName = $('//input[@name="email"]');
//             browser.keys('Tab')
//             const result = inputFirstName.getAttribute('class');
//             expect(result).contains('is-valid')
//         });
//         it('should fill out password field ', function () {
//             const inputLastName = $('//input[@name="password"]');
//             inputLastName.setValue('Nicole061920152015');
//         });
//         it('should input password is valid ', function () {
//             const inputFirstName = $('//input[@name="password"]');
//             browser.keys('Tab')
//             const result = inputFirstName.getAttribute('class');
//             expect(result).contains('is-valid')
//         });
//         it('should Submit Button is not clickable ', function () {
//             const submitButton = $('//button[@type="submit"]');
//             const result = submitButton.isClickable();
//             expect(result).true;
//         });
//     })


//PROJECT AUTOMATION TESTS.--------------PROGRESS MONITOR.


// describe('EDIT PROFILE', () => {
//     before(() => {
//         browser.maximizeWindow();
//         browser.url('https://stage.pasv.us/user/login');
//         $("//input[@name='email']").setValue('shapovalovihorolegovich@gmail.com');
//         $("//input[@name='password']").setValue('2804915wwW');
//         $("//button[@type='submit']").click();
//         $('//div[@id="user-section"]//a[@class="dropdown-toggle nav-link"]').click();
//         $("//button[text()='Settings']")
//
//     })
//     it('Check site t-shirt', function () {
//         $("//select[@name='tShirtSize']").selectByVisibleText('Men/Unisex - XL');
//         browser.pause(2000);
//     });
// })
// })










