describe('Open New Account on parabank.', () => {
    let userData;
  const env = 'qa';
  const qaBaseUrl = Cypress.env(env).baseUrl;

 beforeEach(function() {
    cy.fixture('userData').then((data) => {
      this.data = data;
      cy.login(this.data.username, this.data.password);
    });
    
  });

    it('Open a new account with the registered user.', function() {
      
      
    //     // Log in with registered user credentials
    //   cy.get('input[name="username"]').type(userData.username);
    //   cy.get('input[name="password"]').type(userData.password);
    //   cy.get('input[type="submit"][value="Log In"]').click();

      // Navigate to the Open New Account page
      cy.get('#leftPanel a[href="/parabank/openaccount.htm"]').click();

      // Select account type and submit
      cy.get('select[id="type"]').select('SAVINGS');
      cy.get('input[type="submit"][value="Open New Account"]').click();

      // Verify account creation success
      cy.get('.title').should('contain', 'Account Opened!');
    })
});
