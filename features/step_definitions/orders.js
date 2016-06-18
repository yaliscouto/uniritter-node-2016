module.exports = function () {
    const 
        chai = require('chai'),
        expect = chai.expect;
    chai.use(require('chai-subset'));

    this.Given(/^a valid order$/, function () {
        this.payload = {
            "data": {
                "type": "orders",
                "attributes": {
                    "items": [
                        { "product_id": "cfcad047-e1b7-43c2-b101-3ac4adcf9818", quantity: 1 },
                        { "product_id": "cfcad047-e1b7-43c2-b101-3ac4adcf9819", quantity: 3 }
                    ]
                }
            }
        }
        this.verb = 'post';
        this.endpoint = 'orders';
        this.expected = { statusCode: 201 };
    });
    
    this.When(/^I submit it to the API$/, function () {
        const that = this;
        return this.doHttpRequest(this.endpoint, this.verb, this.payload)
        .then(function(response) {
            that.response = response;
            return response;
        });
    });

    this.Then(/^I receive a success message$/, function () {
        expect(this.response.statusCode).to.equal(this.expected.statusCode);
    });
    
    this.Then(/^the new order id$/, function() {
        expect(this.response.body.data.id).to.not.be.undefined;
    })
}
