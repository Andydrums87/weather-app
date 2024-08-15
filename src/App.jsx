import { useState, useEffect, Component } from 'react'

import './App.css'
import Search from './components/Search/Search'
import Switch from './components/Switch/Switch'
import MainCountry from './components/MainCountry/MainCountry'
import Cities from './components/Cities/Cities'
import Hourly from './components/Hourly/Hourly'
import FiveDay from './components/FiveDay/FiveDay'
import axios from "axios"
import Sunny from "./images/01d.png"
import Clear from "./images/02d.png"
import Overcast from "./images/03d.png"
import BrokenClouds from "./images/04d.png"
import LightRain from "./images/09d.png"
import HeavyRain from "./images/10d.png"
import Thunder from "./images/11d.png"
import Snow from "./images/13d.png"
import Mist from "./images/50d.png"



function App() {

  const [data, setData] = useState([])
  const [lat, setLat] = useState(60.192059)
  const [long, setLong] = useState(24.945831)
  const [units, setUnits] = useState("metric")
  const [cityName, setCityName] = useState("Helsinki")
  const [allData, setAllData] = useState([])
  const [majorCities, setMajorCities] = useState([])
  const [userInput, setUserInput] = useState("")

  const icons = [Sunny, Clear, Overcast, BrokenClouds, LightRain, HeavyRain, Thunder, Snow, Mist]

const APIKEY = import.meta.env.VITE_WEATHER_API_KEY

  useEffect(() => {
    handleData()
  }, [lat, long, units])

  const handleData = () => {
    axios.get(`https://api.openweathermap.org/data/3.0/onecall?units=${units}&lat=${lat}&lon=${long}&appid=729f65ddf757252c88da2b6644725c22`)
    .then(response => {
      
      setData(response.data);
      setAllData(response.data)
     
    })
    .catch(error => {
      console.log(error, "its an error");
    });
  }

  const handleSearch = () => {
    axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${userInput}&limit=1&appid=729f65ddf757252c88da2b6644725c22`)
        .then(response => {
          setLat(response.data[0].lat);
          setLong(response.data[0].lon);
          setCityName(response.data[0].name)
        }) 
        .catch(error => {
          console.log(error, "its an error");
        });
       
  }

  useEffect(() => {
    handleMajorCities()
  }, [])

  const handleMajorCities = () => {

    axios.get(`https://api.openweathermap.org/data/2.5/group?id=524901,1273294,2643743&units=${units}&appid=729f65ddf757252c88da2b6644725c22`)
        .then(response => {
          setMajorCities(response.data)
          
        }) 
        .catch(error => {
          console.log(error, "its an error");
        });
       
  }


 



const getIcon = (data) => {
  switch(data){
    case "clear sky":
    return icons[0]
    break;
    case "few clouds":
      return icons[1]
      break;
      case "scattered clouds": 
      case "overcast clouds":
        case "haze":
        return icons[2]
        break;
        case "broken clouds":
          return icons[3]
          break;
              case "light rain":
                case "shower rain":
                  case "moderate rain":
                    case "drizzle":
                return icons[4]
                break;
            case "rain":
              case "heavy intensity rain":
            return icons[5]
            break;
            case "thunderstorm":
              return icons[6]
              break;
              case "snow":
                return icons[7]
                break;
                case "mist":
                  return icons[8]
                  break;
                default: 
                return icons[7]
  }
}






  






  return (
    <div className="container">
      <Search 
      setUserInput={setUserInput}
      handleSearch={handleSearch}
      />
      <Switch 
     
    
     
      setUnits={setUnits}
      />

      <MainCountry 
      data={data}
      cityName={cityName}
      getIcon={getIcon}

      />
      <Cities 
      data={majorCities}
      getIcon={getIcon}
      />
      <Hourly 
      allData={allData}
      data={data}
      getIcon={getIcon}
      />
      <FiveDay 
      data={data}
      getIcon={getIcon}
      allData={allData}
      />
    </div>
    
  )
}

export default App
