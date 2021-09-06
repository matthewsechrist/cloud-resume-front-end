function updateCounter(){
fetch("https://ivinlkop0h.execute-api.us-east-1.amazonaws.com/default/visitors")
  .then(response => response.text())
  .then((body) => {
    document.getElementById("visitors").innerHTML=body
  })
  .catch(function(error) {
    console.log(error); 
  });  
}  

