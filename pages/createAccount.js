const { I } = inject();

module.exports = {
  titleRadioInput: { css: '#id_gender1'},
  firstNameInput: { css: '#customer_firstname' },
  lastNameInput: { css: '#customer_lastname' },
  birthDaySelect: { css: '#days' },
  birthMonthSelect: { css: '#months'},
  birthYearSelect: { css: '#years'},
  companyInput: { css: '#company' },
  stateSelect: { css: '#id_state' },
  postalCodeInput: { css: '#postcode' },
  passwordInput: { css: '#passwd' },
  receiveOffersInput: { css: '#optin'},
  cityInput: { css: '#city' },
  addressInput: { css: '#address1' },
  address2Input: { css: '#address2'},
  additionalInfoTextarea: { css: '#other' },
  homePhoneInput: { css:'#phone'},
  mobilePhoneInput: { css: '#phone_mobile'},
  regFormButton: { css: '#submitAccount'},

  fillNewUserForm(user) {
    this.waitForPageLoad();
    I.click(this.titleRadioInput);
    I.fillField(this.firstNameInput, user.firstName);
    I.fillField(this.lastNameInput, user.lastName);    
    I.fillField(this.passwordInput, user.password);
    I.click(this.birthDaySelect);
    I.selectOption(this.birthDaySelect, user.birthDay);
    I.click(this.birthMonthSelect);
    I.selectOption(this.birthMonthSelect, user.birthMonth);
    I.click(this.birthYearSelect);
    I.selectOption(this.birthYearSelect, user.birthYear);
    I.click(this.receiveOffersInput);
    I.fillField(this.companyInput, user.company);
    I.fillField(this.addressInput, user.address);
    I.fillField(this.address2Input, user.address2);
    I.click(this.stateSelect);
    I.selectOption(this.stateSelect, user.state);
    I.fillField(this.postalCodeInput, user.postalCode);
    I.fillField(this.cityInput, user.city);
    I.fillField(this.additionalInfoTextarea, user.additionalInfo);
    I.fillField(this.homePhoneInput, user.homePhone);
    I.fillField(this.mobilePhoneInput, user.mobilePhone);
    I.click(this.regFormButton);

    
    },

  waitForPageLoad() {
    I.waitForVisible(this.firstNameInput);
  },
}