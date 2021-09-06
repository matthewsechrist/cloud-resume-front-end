

const getData = async () => {
    const response = await fetch("https://ivinlkop0h.execute-api.us-east-1.amazonaws.com/default/visitors”)
    const data = await response.json()
    
    console.log(data)
}

getData()
