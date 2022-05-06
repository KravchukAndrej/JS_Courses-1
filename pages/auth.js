const { clickSignIn } = require("./home");

const { I } = inject();

module.exports = {
  newUserEmailInput: {css: '#email_create'},
  createAccountButton: {css: '#SubmitCreate'},
  existUserEmailInput: {css: '#email'},
  existUserPasswordInput: {css: '#passwd'},
  signInButton: {css: '#SubmitLogin'},


  waitForPageLoad() {
    I.waitForVisible(this.newUserEmailInput);
  },
  
  fillNewUserEmail(email) {
    this.waitForPageLoad();
    I.fillField(this.newUserEmailInput, email);
  },

  clickCreateAccount() {
    I.click(this.createAccountButton);
  },
}

