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

let currentUser = {

}

Feature('Store');

Scenario('form filling', ({ I, homePage, authPage, createAccountPage, myAccountPage }) => {
    const currentEmail = Date.now() + '@test.com`'
    homePage.openStore();
    homePage.clickSignIn();
    authPage.fillNewUserEmail(currentEmail);
    authPage.clickCreateAccount();
    currentUser.email = currentEmail;
    currentUser.password = 'Password1';
    createAccountPage.fillNewUserForm(user);
    myAccountPage.seeMyAccount();
    pause();
    
});
Scenario('choose a product', ({ I, homePage, authPage, createAccountPage, myAccountPage }) => {
    homePage.openStore();
    homePage.clickSignIn();
    authPage.fillNewUserEmail(currentEmail);
    authPage.clickCreateAccount();
    createAccountPage.fillNewUserForm(user);
    myAccountPage.seeMyAccount();
    pause();
    
});
