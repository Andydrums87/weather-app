import React, {useEffect, useState} from "react";
import "./hourly.css"
import Snow from "/src/images/02d.png"

function Hourly({allData, getIcon, data}) {


    const filtered = data.hourly &&  data.hourly.filter((_, i) => i % 3 === 0 && i < 22)


    return (
        <div className="hourly__container" >
              {filtered && filtered.map((n, i) => {
                const date = new Date(n.dt * 1000).toLocaleTimeString("en-US", {hour: '2-digit',
                    minute: '2-digit'})
                
                return (
                    <div className="hourly__card" key={i}>
                        <p className="time">{date.charAt(0) == 0 ? date.slice(1) : date}</p>
                   {n.weather && n.weather.map((n, i) => {
                    return (
                    <div key={i}>
                             <img className="hourly__icon"src={getIcon(n.description)} alt="" />
                             <p className="description">{n.main}</p>
                    </div>

                    )
                   })}
                    <p className="hourly__temp">{n.temp.toFixed()}&deg;</p>
                    </div>

                   
                )
            

          })} 
        
         
         
      
                

        </div>
    )
}

export default Hourly;