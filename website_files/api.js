function visitorCounter(){
  fetch("https://ouvqczo3q5hohh6vyr5lmxgbhu.appsync-api.us-east-1.amazonaws.com/graphql", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/graphql',
        'X-API-KEY': 'da2-puhkcdtr5nalldcr4qfc24xjqy'
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