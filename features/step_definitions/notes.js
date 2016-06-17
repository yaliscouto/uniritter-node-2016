module.exports = function () {
    const 
        chai = require('chai'),
        expect = chai.expect;
    chai.use(require('chai-subset'));

    this.Given(/^a valid note payload$/, function () {
        this.fixture = require('../fixtures/valid-note')
       });
};
