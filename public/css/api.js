

const getVisitorCount = async () => {
    const response = await fetch("https://ivinlkop0h.execute-api.us-east-1.amazonaws.com/default/visitors”)
    const data = await response.json()
    
    var visitor_count = document.getElementById("body");
visitor_count.value = data;
    
  
    
    console.log(visitor_count)
}

getVisitorCount()

alert(visitor_count);
