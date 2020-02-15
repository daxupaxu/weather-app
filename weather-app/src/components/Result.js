import React from 'react'

const Result = props => {

    const {err, city, sunrise, sunset, wind, pressure, temp } = props.weather
    let content = null;

    if (!err && city ) {

        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
        content = (
            <div>
            Weather for : <strong>{city}</strong> <br/>
            Temprature: {temp} &#176;C <br/>
            Wind : {wind} m/s <br/>
            Sunrise : {sunriseTime} <br/>
            Sunset : {sunsetTime} <br/>
            Pressure : {pressure} hPa <br/>
            </div>
        )
    }
    return (

        <div className='result'>

            {err ? `We dont have ${city} in our base sorry! :( ` :  content}
        </div>
    )
}

export default Result