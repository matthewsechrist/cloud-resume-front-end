describe('API Gateway Test', () => {
    it.only('Visitor Test - GET Method', () => {
      cy.request('https://2q4tyukeqb.execute-api.us-east-1.amazonaws.com')
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
