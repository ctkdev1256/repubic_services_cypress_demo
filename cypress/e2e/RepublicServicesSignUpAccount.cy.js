
// npm package to mock data(email, name....)
import {faker} from '@faker-js/faker';

describe('Create account on Republic Services site', () => {

    it('Go to RP site. create account', () => {

        // go to url 
        cy.visit('/account')

        // 
        cy.get("classic-content-wrapper").shadow().find('form > div.do-not-account.text-color-primary-black.text-left.clear > div > span > strong').click({ force: true })

        cy.get("classic-content-wrapper").shadow().find('.h3.text-center.pb-3.singup-heading').should('be.visible')

        cy.get("classic-content-wrapper").shadow().find('#signupform-firstName').should('be.visible').type(faker.person.firstName(), { force: true })

        cy.get("classic-content-wrapper").shadow().find('#signupform-lastName').should('be.visible').type(faker.person.lastName(), { force: true })

        cy.get("classic-content-wrapper").shadow().find('#signupform-email').should('be.visible').type(faker.internet.email());

        cy.get("classic-content-wrapper").shadow().find('#signupform-password').should('be.visible').type("RpMockUpDemo12@#", { force: true })

        cy.get("classic-content-wrapper").shadow().find('.col-xs-12.btn.btn-tertiary').should('be.visible').click({ force: true })


        cy.intercept('/verify-email', () => {

            cy.get("classic-content-wrapper")
                .shadow()
                .find('h1')
                .should('have.value', 'Verify Your Email')
        })
    })
});

