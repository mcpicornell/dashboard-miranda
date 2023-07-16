describe("Test the access to the App throw Login", () => {
    it("test if can be access to main route", () => {
        cy.visit("localhost:3000")
        cy.url("localhost:3000").should('include', '/')
        cy.get('h1').should('not.exist')
        cy.wait(500)
    })
    it("test that can't be access to main route with wrong credentials", () => {
        cy.visit("localhost:3000/login")
        cy.get('input[name=email]').type("paquito")
        cy.get('input[name=password]').type("chocolatero{enter}")
        cy.get('h1').should('not.exist')
        cy.wait(500)
    })
    it("test that can be access to main route with correct credentials", () => {
        cy.visit("localhost:3000")
        cy.get('input[name=email]').type("admin")
        cy.get('input[name=password]').type("admin{enter}")
        cy.url("localhost:3000").should('include', '/')
        cy.get('h1').should('contain', 'Dashboard')
        cy.wait(500)
    })
})