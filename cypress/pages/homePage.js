export class homePage
{
    weblocators ={
        searchBar : '.form-control.input-lg',
        searchicon: '.btn.btn-default.btn-lg',
        product : 'img[title="MacBook"]',
        addtocart: 'div[id="content"] div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(2) button:nth-child(1)',
        confirmMsg: '.alert.alert-success.alert-dismissible'
        

    }

    searchForProduct(productName)
    {
        cy.get(this.weblocators.searchBar).type(productName);
        cy.get(this.weblocators.searchicon).click();

    }

    addToCartItem()
    {
        //cy.get(this.weblocators.product).click();
        cy.get(this.weblocators.addtocart).click();
    }

    getConfirmationMsg()
    {
        return cy.get(this.weblocators.confirmMsg);
    }
}