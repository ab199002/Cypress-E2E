import { registerPage } from "../../pages/registerPage"
import registerData from "../../fixtures/registerData.json"

const registerpage = new registerPage();
describe('test register flow',()=>{


    it('registration Flow',()=>{
        registerpage.openURL();
        console.log(registerpage.weblocator.firstName);
        //registerpage.enterDetailinTextBox1(registerData.firstName);
        registerpage.enterDetailinTextBox(registerpage.weblocator.firstName,registerData.firstName);
        registerpage.enterDetailinTextBox(registerpage.weblocator.lastName,registerData.lastName);
        registerpage.enterDetailinTextBox(registerpage.weblocator.email,registerData.email);
        registerpage.enterDetailinTextBox(registerpage.weblocator.telephone,registerData.telephone);
        registerpage.enterDetailinTextBox(registerpage.weblocator.password,registerData.password);
        registerpage.enterDetailinTextBox(registerpage.weblocator.confirmPassword,registerData.password);
        registerpage.checkTheCheckBox(registerpage.weblocator.privacyPolicy);
        registerpage.clickOnElement(registerpage.weblocator.submitBtn);

    })
})