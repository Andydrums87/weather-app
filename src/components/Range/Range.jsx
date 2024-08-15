import React, { useState, useEffect} from "react";
import "./range.css"

function Range ({ data, allData}) {

const [minTemp, setMinTemp] = useState('')
const [maxTemp, setMaxTemp] = useState("")
const [maxOfMins, setMaxOfMins] = useState('')
const [minOfMax, setMinOfMax] = useState('')



useEffect(() => {
    handleTemps()
})

const handleTemps = () => {
    const minTemps = allData && allData.daily.slice(0, 5).map((item) => item.temp.min)
    const maxTemps = allData && allData.daily.slice(0,5).map((item) => item.temp.max)
    const minimum = Math.min(...minTemps)
    // const minMax = Math.max(...minTemps)
    // const maxMin = Math.min(...maxTemps)
    const maximum = Math.max(...maxTemps)
    setMinTemp(minimum)
    setMaxTemp(maximum)
    // setMaxOfMins(minMax)
    // setMinOfMax(maxMin)
}

const minValue = data.temp.min
const maxValue = data.temp.max





    return (
        <div className="range__container">
             <div className="range__slider__box">
             <span className="range__track"></span>
                    <div>
                          <li ><input type="range" className="min" min={minTemp} max={maxTemp} value={minValue}  step="0" /></li>
                          <li ><input type="range" className="max" min={minTemp}max={maxTemp} value={maxValue} step="0" /></li>
                          <div className ="maxvalue">{data.temp.max.toFixed()}&deg;</div>
                          <div className="minvalue">{data.temp.min.toFixed()}&deg;</div>
                    </div>
              </div>
        </div>
      
     
    )
}

export default Range;