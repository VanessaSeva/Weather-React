import React, { useState, useEffect } from 'react'

const Forecast = (props) => {
  props.dateBuilder(new Date());

const [apiData, setApiData] = useState({})
const [loading, setLoading] = useState(false)
const [error, setError] = useState();


const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Paris&units=metric&appid=76a27df4ea541168980658d2bbc73e19'

      useEffect(() => {
        setLoading(true);
        fetch(apiUrl)
          .then((res) => res.json())
          .then((results) => {
            setApiData(results)
            console.log(results);
          })
         .catch((err) => {
           setError(err)
         })
         .finally(() => {
           setLoading(false)
         })
          
   }, []);


      
    return (
      <div>
        {apiData.list &&
          apiData.list.map((day) => (
            <div className="weatherBox1">
              <p>
                {day ? props.dateBuilder(day.dt_txt) :''} - {Math.round(day.main.temp)} °C
              </p>
            </div>
          ))}
      </div>
    ); 
    
}


export default Forecast