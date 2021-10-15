function visitorCounter(){
    fetch("https://tuufqjdvzjfwrdfbvxz2p44auq.appsync-api.us-east-1.amazonaws.com/graphql", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/graphql',
        'X-API-KEY': 'da2-flzuu6sevfezdpi7oosqnhhzf4'
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