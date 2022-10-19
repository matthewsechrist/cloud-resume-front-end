// This Cypress test checks the JSON response body of the API call for the visitor counter
describe('GraphQL POST Request internal to API Gateway Test', () => {
  // GraphQL query 
  const query = `{ visitor_counter{ body }}`;
    it.only('Visitor Counter POST Request', () => {      
      cy.request({
        method: "POST",
        url: 'https://api.matthewsechrist.cloud/graphql',
        body: { query : query },
      }).then((response) => {
        // Expects the nested JSON response to the API call to be body -> data -> visitor_counter -> body's value to be the vistor counter total 
        expect(response.body.data.visitor_counter).to.have.property('body')
        cy.log(response.body);
      });
    })
  }) 