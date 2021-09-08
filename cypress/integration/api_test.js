describe('Visitor Test', () => {
    it.only('Visit Visitor GET Test', () => {
      cy.request('https://ivinlkop0h.execute-api.us-east-1.amazonaws.com/default/visitors')
    })
  })