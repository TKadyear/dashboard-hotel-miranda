describe('Test the login ', () => {
  beforeEach(() => {
    cy.visit('login')
    cy.clearLocalStorage();
  })
  it('Try to access to a private route,and the relocation to login when the user is not authenticated', () => {
    cy.visit('/rooms')
    cy.location().should((loc) => expect(loc.pathname).to.eq('/dashboard-hotel-miranda/login'))
  });
  it('Text in the Sign In', () => {
    cy.contains('h1', 'Log in to your account');
  });
  it('Requires email', () => {
    cy.get("[data-cy=submit]")
      .click();
    cy.get("[data-cy=error-message]").should('contain', 'User can not be blank');
  })
  it('Requires password', () => {
    cy.get('[data-cy=user-input]')
      .type('tk@hotelmiranda.com');
    cy.get("[data-cy=submit]")
      .click();
    cy.get("[data-cy=error-message]").should('contain', 'Password can not be blank');
  })
  it('Requires valid user and password', () => {
    cy.get('[data-cy=user-input]')
      .type('tk@hotelmiranda.com');
    cy.get('[data-cy=password-input]')
      .type('Invalid');
    cy.get("[data-cy=submit]")
      .click();
    cy.get("[data-cy=error-message]").should('contain', 'User or password invalid');
  })
  it('Correct Login', () => {
    cy.get('[data-cy=user-input]')
      .type('tk@hotelmiranda.com');
    cy.get('[data-cy=password-input]')
      .type('Kadyear');
    cy.get("[data-cy=submit]")
      .click();
    cy.hash().should('eq', '');
  })

})
