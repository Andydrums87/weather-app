import React from "react";
import "./fiveday.css"
import Range from "../Range/Range";


function FiveDay({data,getIcon}) {

    return (
        <div className="fiveday__container">
            <h1>5-day forecast</h1>
            {data.daily && data.daily.slice(0, 5).map((d, index) => {
                return (
                    <div className="fiveday__card" key={index}>
                        {d.weather && d.weather.map((c, i) => {
                            return (
                                <ul className="list" key={index}>
                                    <li>{index === 0 ? "Today" : new Date(d.dt * 1000).toDateString().slice(0, 3)}</li>
                                    
                                    <li>
                                    <figure>
                                    <img id="fiveday__img"src={getIcon(c.description)} alt="" />
                                    <figcaption>{c.description}</figcaption>
                                        </figure>
                                        </li>
                                    {/* <li className="list__description">{c.description}</li> */}
                                    
                             
                                            <Range allData={data} data={d}/>
                                            </ul>
                                            )
                                            })}
                                            </div>

                )
             
            })}

        </div>
    )
}

export default FiveDay