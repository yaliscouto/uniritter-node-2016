module.exports = function () {
    const 
        chai = require('chai'),
        expect = chai.expect;
    chai.use(require('chai-subset'));

    this.Given(/^a valid note payload$/, function () {
        this.fixture = require('../fixtures/valid-note')
       });
    
    this.When(/^I (\w+) it against the \/(.*) endpoint$/, function (verb, endpoint) {
        var that = this;
        return this.doHttpRequest(endpoint, verb, that.fixture.request)
        .spread(function (response) {
            that.response = response;
            return response;
        });
    });
    
    this.Then(/^a payload containing the newly created resource$/, function () {
        expect(this.response.body).to.containSubset(this.fixture.request);
    });
};
