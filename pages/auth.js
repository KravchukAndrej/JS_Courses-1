const { clickSignIn } = require("./home");

const { I } = inject();

module.exports = {
  newUserEmailInput: {css: '#email_create'},
  createAccountButton: {css: '#SubmitCreate'},
  existUserEmailInput: {css: '#email'},
  existUserPasswordInput: {css: '#passwd'},
  signInButton: {css: '#SubmitLogin'},
  logoutButton: {css: 'a[title="Log me out"]'}, 


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

  waitForSignInFormLoad() {
    I.waitForVisible(this.existUserEmailInput);
    I.waitForVisible(this.existUserPasswordInput);
  },
   
  fillExistUserEmail(email){
    this.waitForSignInFromLoad();
    I.fillField(this.existUserEmailInput, email);
  },

  fillExistUserPassword(password){
    this.waitForSignInFromLoad();
    I.fillField(this.existUserPasswordInput, password);
  },

  clickSignInButton(){
    I.click(this.signInButton);
  },

  clickLogoutButton(){
    I.click(this.logoutButton);
  },
}

