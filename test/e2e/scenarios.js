'use strict';

describe('Save form', function() {

  describe('Should update master', function() {

    beforeEach(function() {
      browser.get('index.html');
    });

    it('should save user to master clicking the SAVE button', function() {
      var firstName = element(by.model('user.firstName'));
      var lastName = element(by.model('user.lastName'));
      
      firstName.clear();
      lastName.clear();

      firstName.sendKeys('Rocky');
      lastName.sendKeys('Barbola');

      element(by.css('.save')).click();
      
      element(by.css('.master')).getText().then(function(txt){
        expect(txt).toContain('Rocky','Enter Rocky Barbola as user, now the master should be Rocky');
      });
    });

  });
  
});