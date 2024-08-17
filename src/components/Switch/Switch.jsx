import React, {useState, useEffect} from "react";
import ReactSwitch from "react-switch";
import "./switch.css"

function Switch ({setUnits}) {
    const [checked, setChecked] = useState(false)


    const handleChange = (checked) => { 
        setChecked(checked) 
        checked === true ? setUnits("imperial") : setUnits("metric")
    }
   
    return (
        <div className="switch__container">

<ReactSwitch 
    checked={checked}
    onChange={handleChange}
    onColor={"#20293A"}
    offColor={"#20293A"}
    checkedIcon={<p style={{color: "white"}}>&#160;&#160;&deg;C</p>}
    uncheckedIcon={<p style={{color: "white"}}>&#160;&#160;&deg;F</p>}
    uncheckedHandleIcon={<p>&#160;&#160;&deg;C</p>}
    checkedHandleIcon={<p>&#160;&#160;&deg;F</p>}
    className="custom-switch"
    onHandleColor={ "#fff"}
    offHandleColor={ "#fff"}
  
/>
        </div>

    )
}

export default Switch;