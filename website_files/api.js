//function visitorCounter(){
//fetch("https://2q4tyukeqb.execute-api.us-east-1.amazonaws.com")
//  .then(response => response.text())
//  .then((body) => {
//    document.getElementById("visitor_count").innerHTML=body;
//  })
//  .catch(function(error) {
//    console.log(error); 
//  });  
//}  
//
//visitorCounter();

function visitorCounter(){
  fetch("https://ewufbufplbf7vnnjwn6mojnspq.appsync-api.us-east-1.amazonaws.com/graphql", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/graphql',
        'X-API-KEY': 'da2-aiszdcipufepxgs6532iaxnr6m'
      },
      body: JSON.stringify({
        query: `
        query  { visitor_counter{ body }}`,
      }),
    })
    .then(response => response.text())
    .then((body) => {
      document.getElementById("visitor_count").innerHTML=body;
    })
    .catch(function(error) {
      console.log(error); 
    });  
  }  
  //
  visitorCounter();