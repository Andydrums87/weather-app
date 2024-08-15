import React from "react";
import "./cities.css"
import Icon from "/src/images/01d.png"

function Cities ({data, getIcon}) {
    return (
        <div className="cities__container">
             <h1>Other large cities</h1>
             {data.list && data.list.map((city, i) => {
                return (
        <div className="cities__card" key={i}>
         <ul className="cities__left" key={i}>

         <li className="cities__country">{city.sys.country}</li>
         <li className="cities__name">{city.name}</li>

            
         </ul>


                {city.weather && city.weather.map((c, i) => {
                    return (
                    <ul className="cities__right" key={i}>
                      <li><p className="cities__description">{c.main}</p></li>
                      <li><img id="cities__img"src={getIcon(c.description)} alt="" /></li>
                      <li> <p>{city.main.temp.toFixed()}&deg;</p></li>

                    </ul>
    
                )
                })}
        


        </div>
       
                )
             })}
        
</div>
    )
}

export default Cities;