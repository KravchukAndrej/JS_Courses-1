let user = {
    firstName: 'Test',
    lastName: 'Automation',
    company: 'Samsung',
    password: 'Password1',
    birthDay: '1',
    birthMonth: '1',
    birthYear: '2000',
    state: 'Alabama',
    city: 'Birmingham',
    address: '801 Tom Martin Dr.Birmingham, AL 35211 ',
    address2: 'located off I-459 at the Grants Mill Road',
    postalCode: '35211',
    city: 'Birmingham',    
    additionalInfo: 'Some very closely information',
    homePhone: '+1 202-543-5155',
    mobilePhone:'+1 888-904-1932',    
    
    }

Feature('Store');

/*
Scenario('form filling', ({ I, homePage, authPage, createAccountPage, myAccountPage }) => {
    homePage.openStore();
    homePage.clickSignIn();
    authPage.fillNewUserEmail(Date.now() + '@test.com');
    authPage.clickCreateAccount();
    createAccountPage.fillNewUserForm(user);
    myAccountPage.seeMyAccount();
    pause();
    
});
*/

Scenario('choose a product', ({ I, homePage, authPage, createAccountPage, myAccountPage }) => {
    homePage.openStore();
    homePage.clickSignIn();
    const currentEmail = (Date.now() + '@test.com');
    authPage.fillNewUserEmail(currentEmail);
    authPage.clickCreateAccount();
    createAccountPage.fillNewUserForm(user);
    let currentUser = Object.assign({email: currentEmail}, user);
    myAccountPage.seeMyAccount();
    authPage.clickLogoutButton();
    authPage.waitForSignInFormLoad();
    authPage.fillExistUserEmail(currentUser.email);
    authPage.fillExistUserPassword(currentUser.password);
    authPage.clickSignInButton();
    myAccountPage.seeMyAccount();
    I.seeElement('#block_top_menu');
    I.seeElement('#block_top_menu a[title="T-shirts"]');
    I.click('#block_top_menu a[title="T-shirts"]');
    I.waitForVisible();
    I.waitForVisible(this.newUserEmailInput);
    pause();
});