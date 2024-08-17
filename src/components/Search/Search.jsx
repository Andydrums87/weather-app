import React, {useRef} from "react";
import "./search.css"
import Autocomplete from "react-google-autocomplete";

function Search ({setUserInput}) {


    return (
       
        <Autocomplete
  apiKey="AIzaSyCR1HgpSwAqufJ4oJAasaBWUDUcQAfXqi8"
  onPlaceSelected={(place => {
 setUserInput(place.address_components[0].long_name) 

  })}
  style={{ 
    backgroundColor: "#20293A",
    borderRadius: "20px",
    border:"none",
    width:"70%",
    height:"40px",
    paddingLeft: "40px",
    backgroundImage:"url(/src/images/Search.svg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "5% 50%",
    color: "#97A3B6",
    fontSize: "0.75rem"
   }}
 

/>
    )
}

export default Search;