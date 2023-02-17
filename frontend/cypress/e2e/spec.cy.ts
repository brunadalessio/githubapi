describe('Funcionalidade de Pesquisa', () => {
  const searchTerm = 'cypress'

  beforeEach(() => {
    cy.intercept(
      'GET',
      '**?q=cypress**'
    ).as('getSearchResults')

    cy.visit('http://localhost:3000')

    cy.get('input[type="text"]')
      .as('searchField')
      .should('be.visible')

  })

  it.only('Digitou e clicou no botão de pesquisar', () => {
    cy.get('@searchField')
      .type(searchTerm)
    cy.get('button[type="submit"]')
      .should('be.visible')
      .click()

    cy.wait('@getSearchResults')
  })
})