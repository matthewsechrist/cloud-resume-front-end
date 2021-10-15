function visitorCounter(){
    fetch("https://4wbq0ejcm0.execute-api.us-east-1.amazonaws.com/deployed/appsync", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/graphql',
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