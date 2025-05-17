import React from "react";


const WeatherDisplay = ({ weather }) => {

    const temp = weather.temperature > 20 ? "red" : "blue"
    return (
        <div style={{ textAlign: "center",  width:"300px", boxShadow:"0px 0px 5px", backgroundColor:"white", marginTop:"50vh"}}>
            <h1>Weather App</h1>
            <p>Tempture:                <span style={{ color: temp }} >{weather.temperature}</span>
            </p>
            <p>Condition:{weather.conditions}</p>


        </div>
    )
}

export default WeatherDisplay