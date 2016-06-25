module.exports = function () {
    const 
        _ = require('lodash'),
        chai = require('chai'),
        expect = chai.expect;
        
  //Scenario: posting product
        
  this.Given(/^a valid product/, function () {
         this.payload ={
            data: {
                type: 'product',
                attributes: {
                    name: "product1",
                    price: 1.0
                    }
                }
            }
    });
    
     this.When(/^I submit it to the API$/, function () {
        const 
            that = this
        return this.doHttpRequest('products/', 'post', this.payload)
        .then((response) => {
            that.validProduct = response.body;
            return response;
        })
        .catch(error => {
            that.error = error;
            return error;
        })
    });
    
    this.Then(/^ I receive a success message$/, function () {
        expect(this.validProduct.status).equals(201);
    });
    
     this.Then(/^ I receive the new product id$/, function () {
        expect(this.validProduct.id);
    });
    
}