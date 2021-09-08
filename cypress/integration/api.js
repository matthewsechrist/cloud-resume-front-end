it('navigates', () => {
    cy.visit('https://matthewsechrist.cloud')
    cy.visit('http://matthewsechrist.cloud') // yup all good
  })