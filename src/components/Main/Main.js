import React, {useState, useEffect} from 'react'
import Forecast from '../Forecast/Forecast';
import SelectCity from '../SelectCity/SelectCity';


const Main = () => {
    const api = {
        key: "76a27df4ea541168980658d2bbc73e19",
        base: "http://api.openweathermap.org/data/2.5/"
    }

    const [data, setData] = useState('');
    const [weather, setWeather] = useState({})

    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${data}&lang=fr&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setData('');
                setWeather(result)
                 })
            
        }
    }
    
    const dateBuilder = (d) => {

        d = new Date(d);
        let months = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre",
        "Novembre", "Décembre"];
        let days = ["Dimanche","Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        let hour = d.getHours();
        
       
        return `${day} ${date} ${month} ${year} ${hour}h`
        
    }



    return (
        <div>
            <div>
            <h1 className="title">Weather App</h1>
            <hr className="separation"/>
            </div>
            <div>
                <input className="inputSearch" type="text" 
                placeholder="chercher une ville" 
                onChange={e => setData(e.target.value)} 
                value={data}
                onKeyPress={search}
                />
            </div>
          
            <div className="container">
          
            <div className="weatherBox">
                <h2 className="title">{dateBuilder(new Date())}</h2>
                <div className="conditions">
                <p className="detailsBox">
            {weather.name} 
                </p>
                <p className="detailsBox">
                {weather.main ? Math.round(weather.main.temp) : ''} °C                
                </p>
                <p className="detailsBox">
            {weather.weather?.[0].description}
                </p>
                </div>
                <SelectCity weather={weather.name} temp={weather.main ? Math.round(weather.main.temp) : ''}/>
            </div>
         
            </div>
           
           <Forecast dateBuilder={dateBuilder} search={weather} weather={weather}/>

        </div>
    )
}


export default Main