// npm nanoid package to mock data(email, name....)
import { nanoid } from 'nanoid/non-secure'

describe("Create account on Republic Services site", () => {

    it("Go to RP site. create account", () => {

        // variable to pass into type method
        const firstName = nanoid(7)
        const lastName = nanoid(7)
        const email = nanoid(5)

        // go to url
        cy.visit("/account");

        /*
            use shadow command because there is a shadow-rom to work to enable elements 
        */

        // click on account tab on the page
        cy.get("classic-content-wrapper")
            .shadow()
            .find(
                "form > div.do-not-account.text-color-primary-black.text-left.clear > div > span > strong"
            )
            .click({ force: true });

        // assert there is sign up element present on the page
        cy.get("classic-content-wrapper")
            .shadow()
            .find(".h3.text-center.pb-3.singup-heading")
            .should("be.visible");

        // assert if it is present,use nanoid to mock a fake first name on the input field box, then type into the box
        cy.get("classic-content-wrapper")
            .shadow()
            .find("#signupform-firstName")
            .should("be.visible")
            .type(firstName, { force: true });

        //  assert if it is present, use nanoid to mock a fake last name on the input field box, then type into the box
        cy.get("classic-content-wrapper")
            .shadow()
            .find("#signupform-lastName")
            .should("be.visible")
            .type(lastName, { force: true });

        // assert there is email element present on the page, then type if it is present
        cy.get("classic-content-wrapper")
            .shadow()
            .find("#signupform-email")
            .should("be.visible")
            .type(email + "145@yahoo.com");

        // use faker-js to mock a nanoid email on the email input field box, then type
        cy.get("classic-content-wrapper")
            .shadow()
            .find("#signupform-password")
            .should("be.visible")
            .type("RpMockUpDemo12@#", { force: true });

        // assert there is email element present on the page, then click
        cy.get("classic-content-wrapper")
            .shadow()
            .find(".col-xs-12.btn.btn-tertiary")
            .should("be.visible")
            .click({ force: true });

        // intercepting ajax call for response verification
        cy.intercept("/verify-email/", () => {
            cy.get("classic-content-wrapper")
                .shadow()
                .find("h1")
                .should("have.value", "Verify Your Email");
        });
    });
});
