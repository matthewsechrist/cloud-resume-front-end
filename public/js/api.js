function updateCounter(){
fetch("https://ivinlkop0h.execute-api.us-east-1.amazonaws.com/default/visitors")
  .then(response => response.text())
  .then((body) => {
    document.getElementById("visitor_count").innerHTML=body
  })
  .catch(function(error) {
    console.log(error); 
  });  
}  

console.log(body);