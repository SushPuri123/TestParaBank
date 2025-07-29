
/// <reference types="cypress" />
describe('Register on parabank.', () => {
  let userData;
  const env = 'qa'
  const qaBaseUrl = Cypress.env(env).baseUrl;
  beforeEach(() => {
    cy.generatedata();
    cy.fixture('userData').then((data) => {
      userData = data;
    });
  });
  it('Find and book an appointment near you.', () => {
  
    cy.visit(`${qaBaseUrl}`);
    cy.get('#loginPanel > :nth-child(3) > a').click();


    cy.get('input[id="customer.firstName"]').type(userData.firstName);
    cy.get('input[id="customer.lastName"]').type(userData.lastName);
    cy.get('input[id="customer.address.street"]').type(userData.address.street);
    cy.get('input[id="customer.address.city"]').type(userData.address.city);
    cy.get('input[id="customer.address.state"]').type(userData.address.state); 
    cy.get('input[id="customer.address.zipCode"]').type(userData.address.zipCode);
    cy.get('input[id="customer.phoneNumber"]').type(userData.phoneNumber);
    cy.get('input[id="customer.ssn"]').type(userData.ssn);

    cy.get('input[id="customer.username"]').type(`${userData.username}`);
    cy.get('input[id="customer.password"]').type(userData.password);
    cy.get('input[id="repeatedPassword"]').type(userData.password);
cy.get('input[type="submit"][value="Register"]')
  .click();


  })
})
