export class registerPage {
  weblocator = {
    firstName: "#input-firstname",
    lastName: "#input-lastname",
    email: "#input-email",
    telephone: "#input-telephone",
    password: "#input-password",
    confirmPassword: "#input-confirm",
    privacyPolicy: 'input[name="agree"]',
    submitBtn: ".btn.btn-primary",
  }

  openURL()
  {
    cy.visit(Cypress.env('URL'));
  }
  enterDetailinTextBox1(inputValue) {
    cy.get(this.weblocator.firstName).type(inputValue);
  }

  enterDetailinTextBox(locator, inputValue) {
    if(locator === this.weblocator.email)
    {
        //generate the random number and create unique value 
        inputValue = "f.m+"+Math.floor(Math.random() * 10000)+"@yopmail.com";
    }
    cy.get(locator).type(inputValue);
  }

  checkTheCheckBox(locator) {
    cy.get(locator).check();
  }

  clickOnElement(locator) {
    cy.get(locator).click();
  }

}
