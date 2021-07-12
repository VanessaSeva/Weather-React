import React, { useState, useEffect } from 'react'
import moment from 'moment';
import axios from 'axios';


const Forecast = (props) => {
  props.dateBuilder(new Date());
  console.log(props);
 
const [city, setCity] = useState('')
const [apiData, setApiData] = useState({})
const [loading, setLoading] = useState(false)
const [error, setError] = useState();



console.log(city);

      useEffect(() => {
       
        fetch( `https://api.openweathermap.org/data/2.5/forecast?q=Paris&units=metric&appid=76a27df4ea541168980658d2bbc73e19`)
          .then((res) => res.json())
          .then((results) => {
          setApiData(results)
          setCity(city);
            console.log(results);
            results.filter(value => console.log(moment.unix(value.dt).format("HH:mm:ss")))})
         .catch((err) => {
           setError(err)
         })
         .finally(() => {
           setLoading(false)
         })   
         
   }, []);


   
    return (
      <div className="forecastDays" >
        {apiData.list &&
          apiData.list.map((day) => (
            <div className="weatherBox1">
              <div>
                  <p key={day.id}>
                  {day ? props.dateBuilder(day.dt_txt):''} 
                 
                  </p>
               </div>
               <div>
                  <p>
                  {  day.main  && day.main.temp ? Math.round(day.main.temp) : ''} °C
               {city}
                  </p>
                
                </div>
            </div>
          ))}
      </div>
    ); 
    
}


export default Forecast