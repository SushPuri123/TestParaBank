/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
const fs = require('fs');
const env = 'qa'
const qaBaseUrl = Cypress.env(env).baseUrl;
Cypress.Commands.add('login', (username, password) => {
    cy.visit(`${qaBaseUrl}`);
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('input[type="submit"][value="Log In"]').click();
})

Cypress.Commands.add("generatedata",()=>{
    const filePath = 'cypress/fixtures/userData.json';
    const random_data =
    {"username":faker.person.firstName(),
        "firstName": faker.person.firstName(),
        "lastName": faker.person.lastName(),
        "password": faker.internet.password(10, false, /[a-zA-Z0-9!@#$%^&*()_+]/),
        "phoneNumber": faker.phone.number('###-###-####'),
        "ssn": faker.string.numeric(3) + '-' + faker.string.numeric(2) + '-' + faker.string.numeric(4),
        "address": {
            "street": faker.location.streetAddress(),
            "city": faker.location.city(),
            "state": faker.location.state(),
            "zipCode": faker.location.zipCode()
        }
    };
    cy.writeFile(filePath, random_data);

})