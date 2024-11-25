import { homePage } from "../../pages/homePage";
import testData from "../../fixtures/testData.json"

const homepage = new homePage();

describe('',()=>{


    before('',()=>{
        cy.login(testData.username,testData.password);
    })

    it('add to cart flow',()=>{

        homepage.searchForProduct(testData.product.productName);
        homepage.addToCartItem();
        homepage.getConfirmationMsg().should('contain',testData.messages.successMsg);
    })
})