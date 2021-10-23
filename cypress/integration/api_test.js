//This Cypress test checks the JSON response body of the API call for the visitor counter
describe('GraphQL POST Request internal to API Gateway Test', () => {
  const query = `{ visitor_counter{ body }}`;
    it.only('Visitor Counter POST Request', () => {      
      cy.request({
        method: "post",
        url: 'https://api.matthewsechrist.cloud/graphql',
        body: { query : query },
      }).then((res) => {
        expect(res.body.data.visitor_counter).to.have.property('body')
        cy.log(res.body);
      });
    })
  }) 