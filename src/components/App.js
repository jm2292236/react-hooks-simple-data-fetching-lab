// create your App component here
import React, { useState, useEffect } from "react";

function App() {
    const [dogPicture, setDogPicture] = useState("");

    useEffect(() => {
        console.log("fetching data...");
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            console.log({data});
            setDogPicture(data.message);
        })
    }, []);
    
    
    return (
        <div className="App">
            {!dogPicture ? 
                <p>Loading...</p> 
            :
                <img src={dogPicture} alt={"A Random Dog"}></img>
            }
        </div>
    )
}

export default App;
