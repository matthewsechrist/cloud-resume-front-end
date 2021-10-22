describe('API Gateway Test', () => {
    it.only('Visitor Test - GET Method', () => {
      cy.request('https://api.matthewsechrist.cloud/graphql')
    })
  })

  describe('Naked Domain Test', () => {
    it.only('Index.html Test', () => {
      cy.request('https://matthewsechrist.cloud')
    })
  })

describe('www Domain Test', () => {
    it.only('Index.html Test', () => {
      cy.request('www.matthewsechrist.cloud')
    })
  })
