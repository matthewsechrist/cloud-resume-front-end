describe('Visitor Test', () => {
    it.only('Visitor Test - GET Method', () => {
      cy.request('https://ivinlkop0h.execute-api.us-east-1.amazonaws.com/default/visitors')
    })
  })

  describe('Index.html Test', () => {
    it.only('Index.html Test', () => {
      cy.request('https://matthewsechrist.cloud')
    })
  })