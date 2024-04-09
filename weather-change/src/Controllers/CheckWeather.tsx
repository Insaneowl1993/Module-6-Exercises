
function CheckWeather(props) {
    const weatherTypes = ['sunny', 'cloudy', 'windy', 'raining'];

// generates new random weather data and updates state via prop

const randomWeather = () => {
    let newTemp = Math.floor(Math.random() * 40);
    let newWeather = Math.floor(Math.random() * weatherTypes.length);
    props.onWeatherChange(weatherTypes[newWeather], newTemp)
}

return (
    <button onClick={randomWeather}> Check Weather</button>
)
}

export default CheckWeather