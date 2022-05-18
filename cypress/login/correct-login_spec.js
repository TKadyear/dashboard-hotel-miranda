describe('Test the login ', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Correct Login', () => {
    cy.get('[data-cy=user-input]')
      .type('tk@hotelmiranda.com');
    cy.get('[data-cy=password-input]')
      .type('Kadyear');
    cy.get("[data-cy=submit]")
      .click();
    cy.url().should('include', '/');
  })

})
