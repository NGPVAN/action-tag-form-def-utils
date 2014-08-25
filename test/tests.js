var fdu = require("../main");

var _ = require('lodash');
var chai = require('chai').should();
var petition = require("./petition.json");

describe('Form definition utility', function () {
  describe('fields()', function () {
    it('extracts right number of fields', function () {
      var fields = fdu.fields(petition.form_elements);
      (fields.length).should.equal(17);
    });
    it('extracts fields with correct names', function () {
      var fields = fdu.fields(petition.form_elements);
      var names = _.pluck(fields, 'name');
      names.should.eql([ 'HeaderHtml',
                         'FirstName',
                         'LastName',
                         'AddressLine1',
                         'AddressLine2',
                         'City',
                         'StateProvince',
                         'PostalCode',
                         'HomePhone',
                         'EmailAddress',
                         'YesSignMeUpForUpdatesForBinder',
                         'Employer',
                         'WorkStateProvince',
                         'MarketSource',
                         'MailingId',
                         'TrackingPixel',
                         'submitForm' ]);
    });
  });
});
