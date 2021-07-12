import React, {useState} from 'react'

const SelectCity = (props) => {
    console.log(props);
    
const cities = ['Paris', 'Madrid', 'Barcelone', 'Florence', 'Wellington']
const [selectedCity, setSelectedCity] = useState()
const [data, setData] = useState([]);
const [weather, setWeather] = useState({})



const api = {
    key: "76a27df4ea541168980658d2bbc73e19",
    base: "http://api.openweathermap.org/data/2.5/"
}

const selectSearch = () => {
    fetch(`${api.base}weather?q=${selectedCity}&lang=fr&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
            setData('')
            setWeather(result)
            console.log(result);
             })
        
    
}
const handleChange = (e) => {
    const selectedCity = e.target.value;
    setSelectedCity(selectedCity)
    console.log(e.target.value);
}

console.log(selectedCity);
    return(
        <div className="containerSelect">
            
            <select onClick={selectSearch} onChange={handleChange} value={selectedCity}> 
            { 
    cities && cities.map((city, key) => (
           <option key={key}  value={city}>{city}</option>
            ))
            }
           </select>
           
            <p>{selectedCity} - {weather.main ? Math.round(weather.main.temp) : ''} °C</p>
          
           
        </div>
    )
}
export default SelectCity