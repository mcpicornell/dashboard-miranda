describe("Test the access to the App throw Login", () => {
    it("test if can be access to main route", () => {
        cy.visit("localhost:3000")
    })
    it("test if can be access to main route with wrong credentials", () => {
        cy.visit("localhost:3000")
        cy.get('input[name=email]').type("paquito")
        cy.get('input[name=password]').type("chocolatero{enter}")
    })
    it("test if can be access to main route with correct credentials", () => {
        cy.visit("localhost:3000")
        cy.get('input[name=email]').type("admin")
        cy.get('input[name=password]').type("admin{enter}")
    })
})