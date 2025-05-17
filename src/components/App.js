
import React, { useState } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";
const App = () => {
  let [weather,setWeather] = useState({ temperature: 25, conditions: "Sunny" })
  
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center",  } }>
        
<WeatherDisplay
weather = {weather}
/>
    
    </div>
  )
}

export default App
