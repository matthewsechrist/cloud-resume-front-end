function visitorCounter(){
fetch("https://2q4tyukeqb.execute-api.us-east-1.amazonaws.com")
  .then(response => response.text())
  .then((body) => {
    document.getElementById("visitor_count").innerHTML=body;
  })
  .catch(function(error) {
    console.log(error); 
  });  
}  

visitorCounter();