describe('Login to parabank.', () => {

beforeEach(function() {
    cy.fixture('userData').then((data) => {
      this.data = data;
    });
  });
  it('Log in with registered user credentials.', function() {
    cy.login(this.data.username, this.data.password);
    // Verify successful login by checking for a specific element on the home page
    cy.get('#leftPanel').should('be.visible');
//Click on the Open New Account link
    cy.get('a[href="openaccount.htm"]').click();
    cy.get('#type').select('SAVINGS');
cy.get('#fromAccountId').select('15009'); // Assuming 15009 is a valid account ID
    cy.get('input.button[value="Open New Account"]').click();  
    cy.get('#newAccountId').click();
    //Account activity
    cy.get('#newAccountId').select('November');
    cy.get('input.button[value="Find Transactions"]').click();

  });
})