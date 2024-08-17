import React, { useEffect, useState } from "react";
import "./maincountry.css"
import Wind from "/src/images/wind.png"

function MainCountry({data, getIcon, cityName, loading}) {
const [time, setTime] = useState("")


useEffect(() => {
    getTime()
})
    const getTime = () => {
        const d = new Date([data.current?.dt + data.timezone_offset] * 1000).toLocaleTimeString("en-US", {hour: '2-digit', minute: '2-digit'})
        var myString = d

        if( myString.charAt( 0 ) === '0' )
            myString = myString.slice( 1 );
        console.log(myString)
        setTime(myString)
    }
 
    return (
  
        <div className="main__card">
            {loading ? <p style={{color: "white"}}>.....</p> : null}
            <div className="left">
                <ul className="left__list">
                <li className="main__temp">{data.current?.temp.toFixed()}&deg;</li>
                <li>
                    <figure>
                    <img className="main__img"src={getIcon(data.current?.weather[0].description)} alt="weather icon" />
                    <figcaption>{data.current?.weather[0].main}</figcaption>
                    </figure>
                </li>
                <li className="main__feels">Feels like: &#160;{data.current?.feels_like.toFixed()}&deg;</li>
                </ul>
            </div>
            <div className="right">
                <ul>
                    <li className="city__name">{cityName}</li>
                    <li className="main__time">{loading ? "..." : time}</li>
                    <li>
                    <figure className="wind__speed">
                        <img src={Wind} alt="wind speed" id="wind__img"  />
                    <figcaption className="wind__txt">
                    {data.current?.wind_speed}m/s
                    </figcaption>
                    </figure>
               
                    </li>
                    <li className="min_max">{data.daily && data.daily[0].temp.min.toFixed()} &deg; to {data.daily && data.daily[0].temp.max.toFixed()}&deg;</li>
                </ul>
            </div>
            
            {/* <li>{cityName}</li>
            <li>{new Date(data.current?.dt * 1000).toLocaleTimeString("en-us", {hour: '2-digit',minute: '2-digit'})}</li>
            <li>{data.current?.temp.toFixed()}&deg;</li>
       
            <li>{data.current?.feels_like.toFixed()}&deg;</li>
            <li>{data.current?.wind_speed}</li>
          
            <li>{data.daily && data.daily[0].temp.min.toFixed()}</li>
            <li>{data.daily && data.daily[0].temp.max.toFixed()}</li> */}
       
            
         
            {/* <p>{data.timezone}</p>
            <p>{new Date().toLocaleString(({timeZone: `${data.timezone}`}))}</p>
            <p>{data.current.temp.toFixed()}</p>
            <p>{data.current.weather[0].main}</p>
          <p>{data.current.feels_like}</p> */}
          {/* <p>{data.current.wind_speed}</p> */}
            {/* <p>{forecast.cnt}</p> */}
           {/* <p>{forecast[0].main.temp}</p>   */}
            {/* <p>{forecast.list[0].main.temp}</p> */}
        
      

        </div>
    )
}

export default MainCountry