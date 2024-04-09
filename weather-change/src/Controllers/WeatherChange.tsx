import React, { useState } from "react"
import CheckWeather from "./CheckWeather"
import Temperature from "./Temperature"

export default function Weather() {
    const [weather,setWeather] = useState('sunny')
    const [tempCelcius,setTempCelcius] = useState(27)
    const handleWeatherChange = (newWeather, newTemp) => {
        setWeather(newWeather)
        setTempCelcius(newTemp)
    }

    return (
        <div className="Weather componentBox">
            <h1>Today's weather</h1>
            <div>
                <strong>{weather}</strong> with a temp of {/*Child component to display temp - needs temp value as prop */}
                <Temperature temp={tempCelcius} units="c" />
            </div>
            {/* Child component to update the weather - needs handler function as prop */}
            <CheckWeather onWeatherChange={handleWeatherChange} />
        </div>

    )
}

