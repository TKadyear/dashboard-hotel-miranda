describe('Test relocation to login If the user is not authenticated ', () => {
  // beforeEach(() => {
  //   cy.visit('/')
  // })
  it('Home', () => {
    cy.url().should('include', '/login');
  })

})
