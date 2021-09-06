// api url
const api_url = 
    "https://ivinlkop0h.execute-api.us-east-1.amazonaws.com/default/visitors";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
     document.getElementById("visitors").innerHTML = data.results;
}
// Calling that async function
getapi(api_url);
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table

    // Setting innerHTML as tab variable
    document.getElementById("visitors").innerHTML = data.results;
