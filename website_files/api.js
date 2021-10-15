function visitorCounter(){
//  fetch("https://ouvqczo3q5hohh6vyr5lmxgbhu.appsync-api.us-east-1.amazonaws.com/graphql", {
    fetch("https://switchfrenzy5i.korconnect.io/visitor", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/graphql',
        'X-API-KEY': 'g1mKoexDQl1PSIrb5icjXmaGEtlo3IY8qjwkPDy5'
      },
      body: JSON.stringify({
        query: `
          { visitor_counter{ body } }`,
      }),
    })
    .then(response => response.text())
    .then((body) => {
      const obj = JSON.parse(body);
      document.getElementById("visitor_count").innerHTML=obj.data.visitor_counter.body;
    })
    .catch(function(error) {
      console.log(error); 
    });  
  }  
  
  visitorCounter();